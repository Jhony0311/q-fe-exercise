import { ReactNode } from "react";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex py-2 px-3 border-4 border-transparent font-serif ease-in-out hover:border-t-purple-500 transition-colors disabled:bg-slate-100 disabled:border-t-transparent ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
