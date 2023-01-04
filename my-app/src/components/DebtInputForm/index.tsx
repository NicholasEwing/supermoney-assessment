import { FormEventHandler } from "react";
import Row from "../Containers/Row";
import AddDebtButton from "./AddDebtButton";
import CalculateSavingsButton from "./CalculateSavingsButton";

interface DebtInputFormProps {
  handleCalculateSavings: FormEventHandler<HTMLFormElement>;
}

const headers = [
  "Debt Name",
  "Remaining Debt Amount",
  "Current APR",
  "Current Monthly Payment",
];

export default function DebtInputForm({
  handleCalculateSavings,
}: DebtInputFormProps) {
  return (
    <form onSubmit={handleCalculateSavings} className="space-y-3">
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
      {/* TODO: create item object shape */}
      {/* TODO: create way to manage items state */}
      {/* TODO: hook up input fields to items state */}
      {/* for each item, display row w/ input fields... */}
      <Row>
        <input
          type="text"
          name="debt-name"
          id="debt-name"
          placeholder="Credit Card"
          className="w-40 border border-sm-light-gray bg-sky p-2"
        />
        <input
          type="number"
          placeholder="5000"
          id="remaining-debt-amount"
          name="remaining-debt-amount"
          className="w-40 border border-sm-light-gray bg-sky p-2"
        />
        <input
          type="number"
          placeholder="15.99"
          id="current-apr"
          name="current-apr"
          className="w-40 border border-sm-light-gray bg-sky p-2"
        />
        <input
          type="number"
          placeholder="200"
          id="current-monthly-payment"
          name="current-monthly-payment"
          className="w-40 border border-sm-light-gray bg-sky p-2"
        />
      </Row>
      <div className="space-y-6">
        <AddDebtButton />
        <CalculateSavingsButton />
      </div>
    </form>
  );
}
