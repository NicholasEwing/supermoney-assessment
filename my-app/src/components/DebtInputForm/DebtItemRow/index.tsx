import Input from "./Input";
import DebtItem from "../../../types/DebtItem";

export default function DebtItemRow({
  name,
  remainingAmount,
  currentApr,
  currentMonthly,
}: DebtItem) {
  return (
    <>
      <Input type="text" name="debt-name" placeholder="Medical" />
      <Input
        type="number"
        name="remaining-debt-amount"
        placeholder="5000"
        symbol="$"
      />
      <Input
        type="number"
        name="current-apr"
        placeholder="15.99"
        symbol="%"
        symbolPos="right"
      />
      <Input
        type="number"
        name="current-monthly-payment"
        placeholder="200"
        symbol="$"
      />
    </>
  );
}
