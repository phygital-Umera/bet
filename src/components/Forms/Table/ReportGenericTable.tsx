import React from 'react';
import { ChevronsUpDown } from 'lucide-react';

export interface ReportColumn<T = any> {
  label: string;
  key: string;
  sortable?: boolean;
  render?: (row: T, index: number) => React.ReactNode;
}

interface ReportGenericTableProps<T = any> {
  columns: ReportColumn<T>[];
  data: T[];
  emptyMessage?: string;
}

function ReportGenericTable<T>({
  columns,
  data,
  emptyMessage = 'No data to display',
}: ReportGenericTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        
        {/* Header */}
        <thead>
          <tr className="bg-[#e5e7e9]">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
              >
                <div className="flex items-center gap-1.5">
                  {col.label}
                  {col.sortable && (
                    <ChevronsUpDown className="w-3.5 h-3.5 text-[#7a8da3]" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-gray-500 py-12 border border-gray-300"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-sm text-gray-700 border border-gray-300">
                    {col.render
                      ? col.render(row, index)
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

export default ReportGenericTable;