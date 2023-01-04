import { ChangeEvent, useState } from "react";
import { DebtItems } from "../types";
import ConfigureResult from "./ConfigureResult";
import DebtInputForm from "./DebtInputForm";

export default function Calculator() {
  const [calculateSavings, setCalculateSavings] = useState(false);
  const [debtItems, setDebtItems] = useState<DebtItems>([
    {
      id: 0,
    },
  ]);

  const handleCalculateSavings = () => setCalculateSavings(!calculateSavings);

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, name, value } = e.target;

    const newDebtItems = debtItems.map((item) => {
      if (item.id === parseInt(id)) return { ...item, [name]: value };
      return item;
    });
    setDebtItems(newDebtItems);
  };

  return (
    <>
      {calculateSavings ? (
        <ConfigureResult handleCalculateSavings={handleCalculateSavings} />
      ) : (
        <DebtInputForm
          debtItems={debtItems}
          setDebtItems={setDebtItems}
          handleChanges={handleChanges}
          handleCalculateSavings={handleCalculateSavings}
        />
      )}
    </>
  );
}
