import { ReactNode } from "react";

interface RowProps {
  children: ReactNode[];
}

export default function Row({ children }: RowProps) {
  return <div className="relative grid grid-cols-4 gap-4">{children}</div>;
}
