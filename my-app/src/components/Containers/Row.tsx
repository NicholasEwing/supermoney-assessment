import { ReactNode } from "react";

interface RowProps {
  children: ReactNode[];
}

export default function Row({ children }: RowProps) {
  return <div className="grid grid-cols-4">{children}</div>;
}
