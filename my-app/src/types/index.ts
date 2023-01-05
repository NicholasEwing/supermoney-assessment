export interface DebtItem {
  id: number;
  name?: string;
  remainingAmount?: number;
  currentApr?: number;
  currentMonthly?: number;
}

export type DebtItems = DebtItem[];

export interface ResultObject {
  new: number;
  current: number;
  total: number;
}
