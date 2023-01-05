import { DebtItem } from "./../types/index";
import { DebtItems } from "../types";

export const getSum = (arr: DebtItems, key: string) =>
  arr.reduce((sum, current) => {
    if (current[key as keyof DebtItem]) {
      sum += parseInt(current[key as keyof DebtItem]!.toString());
    }
    return sum;
  }, 0);
