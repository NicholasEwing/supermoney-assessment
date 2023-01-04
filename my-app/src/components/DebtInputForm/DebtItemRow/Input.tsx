import React, { ChangeEvent } from "react";

interface InputProps {
  id: number;
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  symbol?: string;
  symbolPos?: "left" | "right";
  value?: string | number;
  handleChanges: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  type,
  name,
  placeholder,
  symbol,
  symbolPos = "left",
  value,
  handleChanges,
}: InputProps) {
  const positionClass = symbolPos === "right" ? "flex-row-reverse" : "flex-row";
  const borderClass = symbolPos === "left" ? "border-r" : "border-l";

  return (
    <div className={`${positionClass} flex border border-sm-light-gray`}>
      {symbol && (
        <span
          className={`${borderClass} border-sm-light-gray p-3 text-sm-dark-gray`}
        >
          {symbol}
        </span>
      )}
      <input
        min="0"
        type={type}
        name={name}
        id={id.toString()}
        placeholder={placeholder}
        value={value}
        onChange={handleChanges}
        className="flex-1 bg-sky p-2 text-sm-black shadow-inner placeholder:text-sm-med-gray"
      />
    </div>
  );
}
