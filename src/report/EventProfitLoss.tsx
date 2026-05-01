import React, { useState } from 'react';
import { Calendar, Search, ChevronsUpDown, LayoutGrid } from 'lucide-react';
import { motion } from "framer-motion";

const EventProfitLoss: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tableHeaders = [
    { label: 'Matches', sortable: true },
    { label: 'View Bets', sortable: true },
    { label: 'Loosing Stake', sortable: false },
    { label: 'Stake', sortable: true },
    { label: 'Player P/L', sortable: false },
    { label: 'Upline P/L', sortable: true },
    { label: 'MO Comm.', sortable: true },
    { label: 'BM Comm.', sortable: true },
    { label: 'SettleTime', sortable: true },
  ];

  return (
    <div className="min-h-screen bg-[#eeede7] p-4 sm:p-6 font-sans text-gray-800">
      <div className="max-w-[1600px] mx-auto space-y-4">
        
        {/* Filter Section */}
        <div className="bg-[#dbe0e6] border border-gray-300 rounded-sm p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Game Type</label>
              <select className="w-full h-10 px-3 bg-white border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat">
                <option>Sports</option>
                <option>Casino</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Sports</label>
              <select className="w-full h-10 px-3 bg-white border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat">
                <option>All</option>
                <option>Cricket</option>
                <option>Tennis</option>
                <option>Soccer</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <div className="relative">
                <input 
                  type="text" 
                  value="01/05/2026 00:00 - 01/05/2026 23:59"
                  readOnly
                  className="w-full h-10 pl-3 pr-10 bg-white border border-gray-400 rounded-sm focus:outline-none"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-200 border-l border-gray-400 cursor-pointer">
                  <Calendar className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <button className="bg-[#eebb2c] hover:bg-[#d8a81d] text-black font-bold h-10 px-6 rounded-sm border border-black shadow-[0_1px_1px_rgba(0,0,0,0.2)] transition-colors active:shadow-inner">
                Get P&L
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden min-h-[500px]">
          {/* Header Bar */}
          <div className="bg-[#2c3e50] px-4 py-2 text-white font-bold flex items-center justify-between h-10">
            <span>Profit Loss</span>
          </div>

          <div className="p-4 space-y-4">
            {/* Search Bar */}
            <div className="flex justify-end">
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-9 px-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-yellow-500 pr-8"
                />
                {/* Search icon isn't explicitly visible in input in img but good practice; leaving it out to match exact look if needed, but adding subtle search hint */}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-[#e5e7e9]">
                  <tr>
                    {tableHeaders.map((header, idx) => (
                      <th 
                        key={idx}
                        className="px-4 py-3 font-semibold text-gray-700 border-r border-gray-300 last:border-r-0 whitespace-nowrap"
                      >
                        <div className="flex items-center gap-2">
                          {header.label}
                          {header.sortable && (
                            <ChevronsUpDown className="w-3 h-3 text-[#7a8da3]" />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="h-64">
                    <td colSpan={tableHeaders.length} className="text-center text-gray-600 font-medium">
                      No data to display
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#ffc107] text-black rounded-lg shadow-lg flex items-center justify-center border-2 border-white/20"
      >
        <LayoutGrid className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default EventProfitLoss;
