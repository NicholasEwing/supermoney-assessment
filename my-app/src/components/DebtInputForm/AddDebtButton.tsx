import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

interface AddDebtButtonProps {
  handleNewItem: MouseEventHandler<HTMLButtonElement>;
}

export default function AddDebtButton({ handleNewItem }: AddDebtButtonProps) {
  return (
    <button onClick={handleNewItem} className="space-x-2 text-sm-blue">
      <FontAwesomeIcon className="stroke-current stroke-[60px]" icon={faPlus} />
      <span>Add Another Debt</span>
    </button>
  );
}
