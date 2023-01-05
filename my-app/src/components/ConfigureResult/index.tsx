import finance from "../../lib/finance";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import ConfigureHeader from "./ConfigureHeader";
import ConfigureSlider from "./ConfigureSlider";
import ResultsBox from "./ResultsBox";
import UpdateDebtsButton from "./UpdateDebtsButton";
import { DebtItems } from "../../types";
import { getSum } from "../../lib/utils";

interface ConfigureResultProps {
  debtItems: DebtItems;
  handleCalculateSavings: MouseEventHandler<HTMLButtonElement>;
  desiredApr: number;
  desiredTerm: number;
  handleAprChange: React.ChangeEventHandler<HTMLInputElement>;
  handleTermChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ConfigureResult({
  debtItems,
  handleCalculateSavings,
  desiredApr,
  desiredTerm,
  handleAprChange,
  handleTermChange,
}: ConfigureResultProps) {
  const totalDebt = getSum(debtItems, "remainingAmount");

  // calculate monthly ResultBox info
  const monthly = {
    newAmount: 0,
    current: 0,
    total: 0,
  };
  monthly.newAmount = finance.calculatePayment(
    totalDebt,
    desiredTerm,
    desiredApr
  );
  monthly.current = getSum(debtItems, "currentMonthly");
  monthly.total = monthly.current - monthly.newAmount;

  // TODO: calculate total ResultBox info
  const total = {
    newAmount: 0,
    current: 0,
    total: 0,
  };
  total.newAmount = debtItems.reduce((sum, debtItem) => {
    const { remainingAmount } = debtItem;
    const mosRemaining = finance.calculateMonths(
      remainingAmount,
      desiredApr,
      monthly.newAmount
    );

    if (monthly.newAmount) {
      const totalRepayment = mosRemaining * monthly.newAmount;
      sum += totalRepayment;
    }
    return sum;
  }, 0);

  // for every debt item... calculate total repayment and sum them up
  total.current = debtItems.reduce((sum, debtItem) => {
    const { remainingAmount, currentApr, currentMonthly } = debtItem;
    // find mos. remaining for this item
    const mosRemaining = finance.calculateMonths(
      remainingAmount,
      currentApr,
      currentMonthly
    );

    // find the total repayment for this item
    if (currentMonthly) {
      const totalRepayment = mosRemaining * currentMonthly;
      sum += totalRepayment;
    }
    return sum;
  }, 0);
  total.total = total.current - total.newAmount;

  return (
    <div>
      <UpdateDebtsButton handleCalculateSavings={handleCalculateSavings} />
      <div className="space-y-4 border border-x border-sm-light-gray p-8">
        <ConfigureHeader />
        <div className="space-y-7">
          <ConfigureSlider
            type="apr"
            value={desiredApr}
            handleChange={handleAprChange}
          />
          <ConfigureSlider
            type="term"
            value={desiredTerm}
            handleChange={handleTermChange}
          />
        </div>
      </div>
      <div className="flex">
        <ResultsBox type="Repayment" result={total} />
        <ResultsBox type="Monthly" result={monthly} />
      </div>
    </div>
  );
}
