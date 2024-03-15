import { HTMLAttributes } from "react";

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
      className={`flex ${className} font-sans gap-3 bg-white rounded-md items-center mx-auto`}
    >
      <button
        className="inline-flex py-2 px-3 border-4 border-transparent rounded-l-md font-serif ease-in-out hover:border-t-purple-500 transition-colors disabled:bg-slate-100 disabled:border-t-transparent"
        disabled={!canGoPrev}
        onClick={() => onPaginationChange(currentPage - 1)}
      >
        Prev
      </button>
      <p className="inline-flex no-underline p-2">
        {currentPage} / {totalPages}
      </p>
      <button
        className="inline-flex py-2 px-3 border-4 border-transparent font-serif rounded-r-md ease-in-out hover:border-t-purple-500 transition-colors disabled:bg-slate-100 disabled:border-t-transparent"
        disabled={!canGoNext}
        onClick={() => onPaginationChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
