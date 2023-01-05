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
}

export default function ConfigureResult({
  debtItems,
  handleCalculateSavings,
}: ConfigureResultProps) {
  // init slider state
  const [desiredApr, setDesiredApr] = useState(8);
  const [desiredTerm, setDesiredTerm] = useState(24);

  // Handle sliders
  const handleAprChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDesiredApr(parseInt(e.target.value));
  };
  const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDesiredTerm(parseInt(e.target.value));
  };

  const totalDebt = getSum(debtItems, "remainingAmount");

  // calculate monthly ResultBox info
  const monthly = {
    new: 0,
    current: 0,
    total: 0,
  };
  monthly.new = finance.calculatePayment(totalDebt, desiredTerm, desiredApr);
  monthly.current = getSum(debtItems, "currentMonthly");
  monthly.total = monthly.current - monthly.new;

  // TODO: calculate total ResultBox info

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
        {/* <ResultsBox type="Repayment" /> */}
        <ResultsBox type="Monthly" result={monthly} />
      </div>
    </div>
  );
}
