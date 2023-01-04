import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

interface AddDebtButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function AddDebtButton({ onClick }: AddDebtButtonProps) {
  return (
    <button onClick={onClick} className="space-x-2 text-sm-blue">
      <FontAwesomeIcon className="stroke-current stroke-[60px]" icon={faPlus} />
      <span>Add Another Debt</span>
    </button>
  );
}
