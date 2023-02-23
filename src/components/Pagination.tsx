import { CaretLeft, CaretRight } from 'phosphor-react';

/**
 * This component is only visual for now, but it will be connected
 * to the api with pagination logic in the future.
 */

interface Props {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (currentPage: number) => void;
}

export function Pagination({ items, pageSize, currentPage, onPageChange }: Props) {
  const pagesCount = Math.ceil(items / pageSize);

  return (
    <div className="flex items-center gap-2">
      <span className="text-blue-900">Página</span>

      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage + 1 === 1}
      >
        <CaretLeft
          size={20}
          className={currentPage + 1 === 1 ? 'text-gray-300' : 'text-orange-600'}
        />
      </button>

      <span className="text-blue-900 border px-2 leading-tight rounded-sm border-orange-600">
        {currentPage + 1}
      </span>

      <span className="text-blue-900">de {pagesCount}</span>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage + 1 === pagesCount}
      >
        <CaretRight
          size={20}
          className={currentPage + 1 === pagesCount ? 'text-gray-300' : 'text-orange-600'}
        />
      </button>
    </div>
  );
}
