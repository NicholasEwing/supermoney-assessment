import ResultsLineItem from "./ResultsLineItem";

interface ResultsBoxProps {
  type: "Repayment" | "Monthly";
}

export default function ResultsBox({ type }: ResultsBoxProps) {
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
      <ResultsLineItem msg={newPaymentMsg} value={1234} timeline="New" />
      <ResultsLineItem
        msg={currentPaymentMsg}
        value={1234}
        timeline="Current"
      />
      <ResultsLineItem msg={savingsResultMsg} value={1234} timeline="Total" />
    </div>
  );
}
