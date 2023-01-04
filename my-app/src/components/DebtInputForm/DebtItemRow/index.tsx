import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Row from "../../Containers/Row";
import { DebtItem } from "../../../types";

interface DebtItemRowProps extends DebtItem {
  handleRemoveItem: (id: number) => void;
}

export default function DebtItemRow({
  id,
  name,
  remainingAmount,
  currentApr,
  currentMonthly,
  handleRemoveItem,
}: DebtItemRowProps) {
  return (
    <Row>
      <Input type="text" name="debt-name" placeholder="Medical" />
      <Input
        type="number"
        name="remaining-debt-amount"
        placeholder="5000"
        symbol="$"
      />
      <Input
        type="number"
        name="current-apr"
        placeholder="15.99"
        symbol="%"
        symbolPos="right"
      />
      <Input
        type="number"
        name="current-monthly-payment"
        placeholder="200"
        symbol="$"
      />
      {id > 0 && (
        <button
          onClick={() => handleRemoveItem(id)}
          className="absolute -right-6 top-1/3"
        >
          <FontAwesomeIcon
            className=" rotate-45 stroke-current stroke-[60px] text-lg text-sm-gray"
            icon={faPlus}
          />
        </button>
      )}
    </Row>
  );
}
