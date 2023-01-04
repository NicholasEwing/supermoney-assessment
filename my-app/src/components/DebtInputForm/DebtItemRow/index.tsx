import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Row from "../../Containers/Row";
import { DebtItem } from "../../../types";
import { ChangeEvent } from "react";

interface DebtItemRowProps extends DebtItem {
  handleRemoveItem: (id: number) => void;
  handleChanges: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function DebtItemRow({
  id,
  name,
  remainingAmount,
  currentApr,
  currentMonthly,
  handleChanges,
  handleRemoveItem,
}: DebtItemRowProps) {
  return (
    <Row>
      <Input
        id={id}
        type="text"
        name="name"
        placeholder="Medical"
        value={name || ""}
        handleChanges={handleChanges}
      />
      <Input
        id={id}
        type="number"
        name="remainingAmount"
        placeholder="5000"
        symbol="$"
        value={remainingAmount || ""}
        handleChanges={handleChanges}
      />
      <Input
        id={id}
        type="number"
        name="currentApr"
        placeholder="15.99"
        symbol="%"
        symbolPos="right"
        value={currentApr || ""}
        handleChanges={handleChanges}
      />
      <Input
        id={id}
        type="number"
        name="currentMonthly"
        placeholder="200"
        symbol="$"
        value={currentMonthly || ""}
        handleChanges={handleChanges}
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
