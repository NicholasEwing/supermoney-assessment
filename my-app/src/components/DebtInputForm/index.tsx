import React, { MouseEventHandler } from "react";
import { DebtItems } from "../../types";
import Row from "../Containers/Row";
import AddDebtButton from "./AddDebtButton";
import CalculateSavingsButton from "./CalculateSavingsButton";
import DebtItemRow from "./DebtItemRow";

interface DebtInputFormProps {
  debtItems: DebtItems;
  setDebtItems: React.Dispatch<React.SetStateAction<DebtItems>>;
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
      {/* TODO: create way to manage items state */}
      {/* TODO: hook up input fields to items state */}
      {debtItems.map((item) => (
        <DebtItemRow
          key={`debt-item-row-${item.id}`}
          id={item.id}
          name={"Credit Card"}
          remainingAmount={0}
          currentApr={0}
          currentMonthly={0}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
      <div className="space-y-6">
        <AddDebtButton handleNewItem={handleNewItem} />
        <CalculateSavingsButton onClick={handleCalculateSavings} />
      </div>
    </div>
  );
}
