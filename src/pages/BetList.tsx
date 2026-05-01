import React from 'react';
import {ChevronDown, Calendar, Search, ArrowUpDown} from 'lucide-react';
import {motion} from 'framer-motion';

const BetList: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#e8e4d9] p-4 font-sans text-[#212529] lg:p-6">
      <div className="space-y-4">
        {/* Filter Section */}
        <div className="border-stroke rounded border bg-[#f8f9fa] p-5 shadow-sm">
          <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {/* Game Type */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">
                Game Type
              </label>
              <div className="relative">
                <select className="h-[38px] w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-1.5 text-sm focus:border-blue-400 focus:outline-none">
                  <option>SPORTS</option>
                </select>
                <ChevronDown className="text-gray-400 pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </div>

            {/* Sports */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">
                Sports
              </label>
              <div className="relative">
                <select className="h-[38px] w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-1.5 text-sm focus:border-blue-400 focus:outline-none">
                  <option>Select</option>
                </select>
                <ChevronDown className="text-gray-400 pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </div>

            {/* Bet Status */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">
                Bet Status
              </label>
              <div className="relative">
                <select className="h-[38px] w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-1.5 text-sm focus:border-blue-400 focus:outline-none">
                  <option>All</option>
                  <option>Settled</option>
                  <option>Unsettled</option>
                </select>
                <ChevronDown className="text-gray-400 pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </div>

            {/* Stake */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">
                Stake
              </label>
              <div className="relative">
                <select className="h-[38px] w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-1.5 text-sm focus:border-blue-400 focus:outline-none">
                  <option>&gt;0</option>
                </select>
                <ChevronDown className="text-gray-400 pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </div>

            {/* Date */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">
                Date
              </label>
              <div className="flex h-[38px]">
                <input
                  type="text"
                  defaultValue="01/05/2026 00:00:00 - 01/"
                  className="w-full rounded-l border border-r-0 border-[#ced4da] bg-white px-3 py-1.5 text-xs focus:border-blue-400 focus:outline-none"
                />
                <button className="hover:bg-gray-300 flex items-center justify-center rounded-r border border-[#ced4da] bg-[#dee2e6] px-3">
                  <Calendar className="h-4 w-4 text-[#495057]" />
                </button>
              </div>
            </div>

            {/* Get History Button */}
            <div>
              <motion.button
                whileHover={{brightness: 1.1}}
                className="h-[38px] w-full rounded border border-[#eeb902] bg-[#f9d423] px-6 text-sm font-bold text-black shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all hover:bg-[#ffdf40]"
              >
                Get History
              </motion.button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="border-stroke flex h-[600px] flex-col rounded border bg-white shadow-sm">
          {/* Main Title Bar */}
          <div className="bg-[#2a3a4a] px-4 py-2 text-sm font-bold tracking-wide text-white">
            Bet List
          </div>

          {/* Search Bar Container */}
          <div className="flex justify-end bg-white p-3">
            <div className="relative w-full max-w-[200px]">
              <input
                type="text"
                placeholder="Search"
                className="border-stroke w-full rounded border bg-[#f1f3f5] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="flex-1 overflow-auto">
            <table className="w-full min-w-[1200px] border-collapse text-left text-[12px]">
              <thead className="border-stroke sticky top-0 border-b bg-[#f1f3f5] font-bold text-[#495057]">
                <tr>
                  {[
                    'SN',
                    'PL ID',
                    '$',
                    'Parent',
                    'Bet ID',
                    'IP Address',
                    'Sports',
                    'Market',
                    'Event',
                    'Selection',
                    'Type',
                    'Odd req',
                    'Bet Taken',
                    'S',
                  ].map((header) => (
                    <th
                      key={header}
                      className="border-stroke whitespace-nowrap border-r px-3 py-2.5 last:border-r-0"
                    >
                      <div className="flex cursor-pointer items-center gap-1">
                        {header}
                        <ArrowUpDown className="text-gray-400 ml-auto h-3 w-3" />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={14}
                    className="text-gray-700 bg-white py-32 text-center text-[15px] font-bold"
                  >
                    No data to display
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Action Button (mocking the bottom right yellow icon) */}
      <div className="fixed bottom-6 right-6">
        <button className="group rounded-lg bg-[#f9d423] p-3 shadow-xl transition-all hover:bg-[#eeb902]">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-sm bg-white"></div>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
};

export default BetList;
