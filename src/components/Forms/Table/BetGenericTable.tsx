import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export interface BetColumn<T = any> {
  label: string;
  key: string;
  sortable?: boolean;
  width?: string;
  render?: (row: T, index: number) => React.ReactNode;
}

interface BetGenericTableProps<T = any> {
  columns: BetColumn<T>[];
  data: T[];
  emptyMessage?: string;
  onSort?: (key: string) => void;
}

function BetGenericTable<T>({
  columns,
  data,
  emptyMessage = 'No data to display',
  onSort,
}: BetGenericTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1200px] border-collapse">
        <thead>
          <tr className="bg-[#dee2e6] border-b border-gray-300">
            {columns.map((col, idx) => (
              <th
                key={col.key || idx}
                className="px-3 py-2.5 text-left text-xs font-bold text-[#495057] uppercase whitespace-nowrap border-r border-gray-300 last:border-r-0"
                style={{ width: col.width }}
                onClick={() => col.sortable && onSort?.(col.key)}
              >
                <div className={`flex items-center gap-1 ${col.sortable ? 'cursor-pointer hover:text-gray-900' : ''}`}>
                  {col.label}
                  {col.sortable && (
                    <ArrowUpDown className="h-3 w-3 text-[#6c757d]" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-gray-500 py-12 text-sm"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-200 hover:bg-gray-50">
                {columns.map((col, colIndex) => (
                  <td
                    key={col.key || colIndex}
                    className="px-3 py-2.5 text-sm text-gray-700 whitespace-nowrap border-r border-gray-200 last:border-r-0"
                  >
                    {col.render
                      ? col.render(row, rowIndex)
                      : (row as any)[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BetGenericTable;