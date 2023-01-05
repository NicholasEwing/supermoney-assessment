import { finance } from "../../../lib/finance";
import { ResultObject } from "../../../types";
import ResultsLineItem from "./ResultsLineItem";

interface ResultsBoxProps {
  type: "Repayment" | "Monthly";
  result: ResultObject;
}

export default function ResultsBox({ type, result }: ResultsBoxProps) {
  const { newAmount, current, total } = result;

  const newPaymentMsg =
    type === "Repayment" ? "New Total Repayment" : "New Monthly Payment";
  const currentPaymentMsg =
    type === "Repayment"
      ? "Current Total Repayment"
      : "Current Monthly Payment";
  const savingsResultMsg =
    type === "Repayment" ? "Total Repayment Savings" : "Total Monthly Savings";

  const formatNum = (num: number) => {
    if (num > 0 && type === "Monthly") {
      return finance.format(num, "USD");
    } else if (num > 0) {
      return `$${Math.round(num).toLocaleString()}`;
    } else {
      return "-";
    }
  };

  return (
    <div className="flex w-1/2 flex-col space-y-8 border-l border-b border-sm-light-gray pt-8 last:border-r">
      <ResultsLineItem
        msg={newPaymentMsg}
        value={formatNum(newAmount)}
        timeline="New"
      />
      <ResultsLineItem
        msg={currentPaymentMsg}
        value={formatNum(current)}
        timeline="Current"
      />
      <ResultsLineItem
        msg={savingsResultMsg}
        value={formatNum(total)}
        timeline="Total"
      />
    </div>
  );
}
