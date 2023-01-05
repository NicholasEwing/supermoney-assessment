import { DebtItem } from "./../types/index";
import { DebtItems } from "../types";
import { finance } from "./finance";

export const getSum = (arr: DebtItems, key: string) =>
  arr.reduce((sum, current) => {
    if (current[key as keyof DebtItem]) {
      sum += parseInt(current[key as keyof DebtItem]!.toString());
    }
    return sum;
  }, 0);

export const getTotalRepayment = (arr: DebtItems) => {
  return arr.reduce((sum, currentValue) => {
    const { remainingAmount, currentApr, currentMonthly } = currentValue;
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
};
