interface ConfigureSliderProps {
  type: "apr" | "term";
  value: number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ConfigureSlider({
  type,
  value,
  handleChange,
}: ConfigureSliderProps) {
  const name = type === "apr" ? "desiredApr" : "desiredTerm";
  const label = type === "apr" ? "Desired APR" : "Desired Loan Term";
  const min = type === "apr" ? "4" : "12";
  const max = type === "apr" ? "36" : "60";
  const longUnit = type === "apr" ? "%" : " months";
  const unit = type === "apr" ? "%" : " mo.";

  return (
    <div className="flex w-2/5 justify-between">
      <div className="flex flex-col space-y-1">
        <span className="text-xs uppercase tracking-wider text-sm-dark-gray">
          {label}
        </span>
        <span className="text-2xl font-semibold text-sm-blue">
          {value}
          {longUnit}
        </span>
      </div>
      <div className="flex w-3/5 flex-col">
        <input
          className="slider cursor-pointer appearance-none rounded-full"
          type="range"
          name={name}
          id={name}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <div className="mt-2 flex w-full justify-between text-xs text-sm-dark-gray">
          <span>
            {min}
            {unit}
          </span>
          <span>
            {max}
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}
