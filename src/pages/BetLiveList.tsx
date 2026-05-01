import React from 'react';
import { Search, ChevronDown, ListFilter, ArrowUpDown } from 'lucide-react';

const BetListLive: React.FC = () => {
  const columns = [
    'SN', 'PL ID', 'Parent', 'Bet ID', 'IP Address', 
    'Sports', 'Market', 'Event', 'Selection', 
    'Type', 'Odd req.', 'Bet Stake', 'Exposure'
  ];

  return (
    <div className="min-h-screen bg-[#e9e9e9] p-4 font-sans text-gray-800">
      {/* Filters Section */}
      <div className="border-stroke rounded border bg-[#f8f9fa] p-5 shadow-sm ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Game Type</label>
            <div className="relative">
              <select className="w-full appearance-none rounded border border-stroke bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option>Sports</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Sports</label>
            <div className="relative">
              <select className="w-full appearance-none rounded border border-stroke bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Stake</label>
            <div className="relative">
              <select className="w-full appearance-none rounded border border-stroke bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option>&gt;0</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Max Bets</label>
            <div className="relative">
              <select className="w-full appearance-none rounded border border-stroke bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option>100</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="border-stroke flex h-[600px] flex-col rounded border bg-white shadow-sm">
        {/* Table Title Bar */}
        <div className="bg-[#2a3a4a] px-4 py-2 text-sm font-bold tracking-wide text-white">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">Bet List Live</h2>
        </div>

        {/* Table Controls */}
        <div className="flex flex-wrap items-center justify-end gap-3 border-b border-stroke bg-white p-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-48 rounded border border-stroke bg-gray-50 px-3 py-1.5 pr-8 text-sm focus:border-blue-500 focus:outline-none"
            />
            <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <select className="appearance-none rounded border border-stroke bg-white px-3 py-1.5 pr-8 text-sm focus:border-blue-500 focus:outline-none">
              <option>Select columns</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#dee2e6]">
                {columns.map((col, idx) => (
                  <th 
                    key={idx}
                    className="border-r border-stroke px-3 py-2.5 text-left text-xs font-bold text-[#495057] uppercase whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1">
                      {col}
                      {(col !== 'Selection' && col !== 'Odd req.' && col !== 'Bet Stake' && col !== 'Exposure') && (
                        <ArrowUpDown className="h-3 w-3 opacity-50" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={columns.length} className="py-12 text-center text-sm font-semibold text-gray-600">
                  No data to display
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Action Button (bottom right in image) */}
      <button className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded bg-[#ffb703] shadow-lg hover:bg-[#fb8500] transition-colors">
        <div className="grid grid-cols-3 gap-0.5">
            {[...Array(9)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 bg-white rounded-sm"></div>
            ))}
        </div>
      </button>
    </div>
  );
};

export default BetListLive;
