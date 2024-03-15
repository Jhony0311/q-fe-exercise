import { ReactNode } from "react";

export type PillProps = {
  children: ReactNode;
};

export default function Pill({children}: PillProps) {
  return (
    <span className="text-[11px] rounded-full py-1 px-3 bg-indigo-500 text-white font-bold font-sans uppercase">
      {children}
    </span>
  );
}
