import { HTMLAttributes } from "react";

import Button from "./Button";

export type PaginationProps = {
  total: number;
  limit: number;
  currentPage: number;
  onPaginationChange: (page: number) => void;
} & HTMLAttributes<HTMLDivElement>;

function getTotalPages(total: number, limit: number) {
  return total > limit ? Math.ceil(total / limit) : 1;
}

export default function Pagination({
  total,
  limit,
  currentPage,
  onPaginationChange,
  className,
}: PaginationProps) {
  const totalPages = getTotalPages(total, limit);
  const canGoPrev = currentPage !== 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div
      className={`flex ${className} font-sans gap-3 bg-zinc-50 rounded-md items-center mx-auto`}
    >
      <Button
        className="rounded-l-md"
        disabled={!canGoPrev}
        onClick={() => onPaginationChange(currentPage - 1)}
      >
        Prev
      </Button>
      <p className="inline-flex no-underline p-2">
        {currentPage} / {totalPages}
      </p>
      <Button
        className="rounded-r-md"
        disabled={!canGoNext}
        onClick={() => onPaginationChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
