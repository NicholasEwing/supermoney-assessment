import { MouseEventHandler } from "react";
import ConfigureHeader from "./ConfigureHeader";
import ConfigureSlider from "./ConfigureSlider";
import ResultsBox from "./ResultsBox";
import UpdateDebtsButton from "./UpdateDebtsButton";

interface ConfigureResultProps {
  handleCalculateSavings: MouseEventHandler<HTMLButtonElement>;
}

export default function ConfigureResult({
  handleCalculateSavings,
}: ConfigureResultProps) {
  return (
    <div>
      <UpdateDebtsButton handleCalculateSavings={handleCalculateSavings} />
      <div className="space-y-4 border border-x border-sm-light-gray p-8">
        <ConfigureHeader />
        <div className="space-y-7">
          <ConfigureSlider type="apr" />
          <ConfigureSlider type="term" />
        </div>
      </div>
      <div className="flex">
        <ResultsBox type="Repayment" />
        <ResultsBox type="Monthly" />
      </div>
    </div>
  );
}
