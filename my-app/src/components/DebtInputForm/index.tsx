import React, { ChangeEvent, MouseEventHandler } from "react";
import { DebtItems } from "../../types";
import Row from "../Containers/Row";
import AddDebtButton from "./AddDebtButton";
import CalculateSavingsButton from "./CalculateSavingsButton";
import DebtItemRow from "./DebtItemRow";

interface DebtInputFormProps {
  debtItems: DebtItems;
  setDebtItems: React.Dispatch<React.SetStateAction<DebtItems>>;
  handleChanges: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCalculateSavings: MouseEventHandler<HTMLButtonElement>;
}

const headers = [
  "Debt Name",
  "Remaining Debt Amount",
  "Current APR",
  "Current Monthly Payment",
];

let id = 0;

export default function DebtInputForm({
  debtItems,
  setDebtItems,
  handleChanges,
  handleCalculateSavings,
}: DebtInputFormProps) {
  const handleNewItem = () => {
    const newDebtItems = [
      ...debtItems,
      {
        id: ++id,
        name: "",
        remainingAmount: 0,
        currentApr: 0,
        currentMonthly: 0,
      },
    ];
    setDebtItems(newDebtItems);
  };

  const handleRemoveItem = (id: number) => {
    const newDebtItems = debtItems.filter((item) => item.id !== id);
    setDebtItems(newDebtItems);
  };

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-sm-black">
        Enter your current debts
      </h2>
      <Row>
        {headers.map((name, i) => (
          <span
            key={`${i}-${name}`}
            className=" text-xs font-semibold uppercase tracking-wider text-sm-dark-gray"
          >
            {name}
          </span>
        ))}
      </Row>
      {debtItems.map(
        ({ id, name, remainingAmount, currentApr, currentMonthly }) => (
          <DebtItemRow
            key={`debt-item-row-${id}`}
            id={id}
            name={name}
            remainingAmount={remainingAmount}
            currentApr={currentApr}
            currentMonthly={currentMonthly}
            handleChanges={handleChanges}
            handleRemoveItem={handleRemoveItem}
          />
        )
      )}
      <div className="space-y-6">
        <AddDebtButton handleNewItem={handleNewItem} />
        <CalculateSavingsButton onClick={handleCalculateSavings} />
      </div>
    </div>
  );
}
