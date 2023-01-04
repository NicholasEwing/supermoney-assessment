import { useState } from "react";
import ConfigureResult from "./ConfigureResult";
import DebtInputForm from "./DebtInputForm";

export default function Calculator() {
  const [calculateSavings, setCalculateSavings] = useState(false);

  const handleCalculateSavings = () => {
    setCalculateSavings(!calculateSavings);
  };

  return (
    <>
      {calculateSavings ? (
        <ConfigureResult />
      ) : (
        <DebtInputForm handleCalculateSavings={handleCalculateSavings} />
      )}
    </>
  );
}
