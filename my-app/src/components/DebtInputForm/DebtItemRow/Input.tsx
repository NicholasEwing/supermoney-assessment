import React from "react";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  symbol?: string;
  symbolPos?: "left" | "right";
}

export default function Input({
  type,
  name,
  placeholder,
  symbol,
  symbolPos = "left",
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
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="flex-1 bg-sky p-2 text-sm-black shadow-inner placeholder:text-sm-med-gray"
      />
    </div>
  );
}
