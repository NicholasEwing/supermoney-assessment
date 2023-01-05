import { ResultObject } from "../../../types";
import ResultsLineItem from "./ResultsLineItem";

interface ResultsBoxProps {
  type: "Repayment" | "Monthly";
  result: ResultObject;
}

export default function ResultsBox({ type, result }: ResultsBoxProps) {
  const newPaymentMsg =
    type === "Repayment" ? "New Total Repayment" : "New Monthly Payment";
  const currentPaymentMsg =
    type === "Repayment"
      ? "Current Total Repayment"
      : "Current Monthly Payment";
  const savingsResultMsg =
    type === "Repayment" ? "Total Repayment Savings" : "Total Monthly Savings";

  return (
    <div className="flex w-1/2 flex-col space-y-8 border-l border-b border-sm-light-gray pt-8 last:border-r">
      <ResultsLineItem msg={newPaymentMsg} value={result.new} timeline="New" />
      <ResultsLineItem
        msg={currentPaymentMsg}
        value={result.current}
        timeline="Current"
      />
      <ResultsLineItem
        msg={savingsResultMsg}
        value={result.total}
        timeline="Total"
      />
    </div>
  );
}
