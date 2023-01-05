import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface UpdateDebtsButtonProps {
  handleCalculateSavings: MouseEventHandler<HTMLButtonElement>;
}
export default function UpdateDebtsButton({
  handleCalculateSavings,
}: UpdateDebtsButtonProps) {
  return (
    <button
      className="mb-4 space-x-2 font-semibold text-sm-blue"
      onClick={handleCalculateSavings}
    >
      <FontAwesomeIcon
        className="stroke-current stroke-[30px]"
        icon={faArrowLeft}
      />
      <span>Update Your Current Debts</span>
    </button>
  );
}
