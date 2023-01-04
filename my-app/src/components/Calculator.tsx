import { useState } from "react";
import { DebtItems } from "../types";
import ConfigureResult from "./ConfigureResult";
import DebtInputForm from "./DebtInputForm";

export default function Calculator() {
  const [calculateSavings, setCalculateSavings] = useState(false);
  const [debtItems, setDebtItems] = useState<DebtItems>([
    { id: 0, name: "", remainingAmount: 0, currentApr: 0, currentMonthly: 0 },
  ]);

  const handleCalculateSavings = () => {
    setCalculateSavings(!calculateSavings);
  };

  return (
    <>
      {calculateSavings ? (
        <ConfigureResult handleCalculateSavings={handleCalculateSavings} />
      ) : (
        <DebtInputForm
          debtItems={debtItems}
          setDebtItems={setDebtItems}
          handleCalculateSavings={handleCalculateSavings}
        />
      )}
    </>
  );
}
