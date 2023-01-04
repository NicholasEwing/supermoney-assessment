import { MouseEventHandler } from "react";

interface CalculateSavingsButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function CalculateSavingsButton({
  onClick,
}: CalculateSavingsButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mx-auto mt-10 block w-full rounded-md bg-sm-blue p-3 font-medium text-white"
    >
      Calculate Savings
    </button>
  );
}
