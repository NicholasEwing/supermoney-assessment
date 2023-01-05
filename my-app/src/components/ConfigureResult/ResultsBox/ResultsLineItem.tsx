interface ResultsLineItemProps {
  msg: string;
  value: number;
  timeline: "New" | "Current" | "Total";
}

export default function ResultsLineItem({
  msg,
  value,
  timeline,
}: ResultsLineItemProps) {
  const textColor =
    timeline === "New"
      ? "text-sm-blue"
      : timeline === "Current"
      ? "text-sm-black"
      : "text-sm-positive";
  const fontWeight =
    timeline === "New" || timeline === "Total"
      ? "font-semibold"
      : "font-normal";
  const bgColor = timeline === "Total" ? "bg-sm-positive-faded" : "bg-inherit";
  const marginAndWidth = timeline === "Total" ? "m-auto p-8 w-full" : "mx-8";
  const fontSize = timeline === "Total" ? "text-2xl" : "text-xl";

  return (
    <div className={`${bgColor} ${marginAndWidth} flex justify-between`}>
      <p className="text-lg">{msg}</p>
      <p className={`${textColor} ${fontWeight} ${fontSize}`}>{value}</p>
    </div>
  );
}
