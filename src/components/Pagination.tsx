import { HTMLAttributes } from "react";

export type PaginationProps = {
  total: number;
  limit: number;
  currentPage: number;
} & HTMLAttributes<HTMLDivElement>;

function paginationBuilder(total, limit) {
  return {
    totalPages: Math.ceil(total / limit),
    limit,
  };
}

export default function Pagination({
  total,
  limit,
  currentPage,
  onChange,
  className,
}: PaginationProps) {
  const content = paginationBuilder(total, limit);
  return (
    <div className={`flex ${className} font-sans gap-3`}>
      <a className="text-bold no-underline" href="#">Prev</a>
      <a className="text-bold no-underline" href="#">1</a>
      <a className="text-bold no-underline" href="#">next</a>
    </div>
  );
}
