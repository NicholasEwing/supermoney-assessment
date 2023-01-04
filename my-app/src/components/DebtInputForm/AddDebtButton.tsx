import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddDebtButton() {
  return (
    <button className="space-x-1 text-sm-blue">
      <FontAwesomeIcon className="stroke-current stroke-[60px]" icon={faPlus} />
      <span>Add Another Debt</span>
    </button>
  );
}
