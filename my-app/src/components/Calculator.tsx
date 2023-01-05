import React, { ChangeEvent, useState } from "react";
import { DebtItems } from "../types";
import ConfigureResult from "./ConfigureResult";
import DebtInputForm from "./DebtInputForm";

export default function Calculator() {
  // toggles input or results
  const [calculateSavings, setCalculateSavings] = useState(false);
  const handleCalculateSavings = () => setCalculateSavings(!calculateSavings);

  // displays and handles input fields
  const [debtItems, setDebtItems] = useState<DebtItems>([
    {
      id: 0,
    },
  ]);
  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, name, value } = e.target;

    const newDebtItems = debtItems.map((item) => {
      if (item.id === parseInt(id)) return { ...item, [name]: value };
      return item;
    });
    setDebtItems(newDebtItems);
  };

  // handles slider logic
  const [desiredApr, setDesiredApr] = useState(8);
  const [desiredTerm, setDesiredTerm] = useState(24);
  const makeHandler = (fn: React.Dispatch<React.SetStateAction<number>>) => {
    return function (e: ChangeEvent<HTMLInputElement>) {
      fn(parseInt(e.target.value));
    };
  };
  const handleAprChange = makeHandler(setDesiredApr);
  const handleTermChange = makeHandler(setDesiredTerm);

  return (
    <>
      {calculateSavings ? (
        <ConfigureResult
          debtItems={debtItems}
          handleCalculateSavings={handleCalculateSavings}
          desiredApr={desiredApr}
          desiredTerm={desiredTerm}
          handleAprChange={handleAprChange}
          handleTermChange={handleTermChange}
        />
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
