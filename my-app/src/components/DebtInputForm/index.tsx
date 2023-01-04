import { MouseEventHandler, useState } from "react";
import DebtItem from "../../types/DebtItem";
import Row from "../Containers/Row";
import AddDebtButton from "./AddDebtButton";
import CalculateSavingsButton from "./CalculateSavingsButton";
import DebtItemRow from "./DebtItemRow";

interface DebtInputFormProps {
  handleCalculateSavings: MouseEventHandler<HTMLButtonElement>;
}

const headers = [
  "Debt Name",
  "Remaining Debt Amount",
  "Current APR",
  "Current Monthly Payment",
];

type DebtItems = DebtItem[];

export default function DebtInputForm({
  handleCalculateSavings,
}: DebtInputFormProps) {
  const [debtItems, setDebtItems] = useState<DebtItems>([
    { name: "", remainingAmount: 0, currentApr: 0, currentMonthly: 0 },
  ]);

  const handleNewItem = () => {
    const newDebtItems = [
      ...debtItems,
      {
        name: "",
        remainingAmount: 0,
        currentApr: 0,
        currentMonthly: 0,
      },
    ];
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
            className="max-w-40 text-xs font-semibold uppercase tracking-wider text-sm-dark-gray"
          >
            {name}
          </span>
        ))}
      </Row>
      {/* TODO: create way to manage items state */}
      {/* TODO: hook up input fields to items state */}
      <Row>
        {debtItems.map((i) => (
          <DebtItemRow
            name={"Credit Card"}
            remainingAmount={0}
            currentApr={0}
            currentMonthly={0}
          />
        ))}
      </Row>
      <div className="space-y-6">
        <AddDebtButton onClick={handleNewItem} />
        <CalculateSavingsButton onClick={handleCalculateSavings} />
      </div>
    </div>
  );
}
