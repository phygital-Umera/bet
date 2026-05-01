/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, ChevronDown, ChevronsUpDown } from 'lucide-react';

export function DownlineReport() {
  return (
    <div className="flex flex-col gap-4 py-4 min-h-screen bg-[#efece3] font-sans relative">
      {/* Badge Section */}
      <div className="px-4">
        <div className="flex items-center gap-2 w-fit px-3 py-1.5 bg-[#ced4da] border border-[#adb5bd] rounded shadow-sm">
          <span className="bg-orange-600 text-white text-[11px] px-1.5 py-0.5 rounded font-black uppercase">MA</span>
          <span className="text-[#212529] text-sm font-bold">vik11000</span>
        </div>
      </div>

      {/* Search/Filter Bar */}
      <div className="px-4 md:px-6 py-6 bg-[#e9ecef] border-y border-[#ced4da] shadow-sm">
        <div className="flex flex-wrap items-end gap-4 text-sm text-[#495057]">
          <div className="flex flex-col gap-1 w-full sm:w-60">
            <label className="font-medium">Game Type</label>
            <div className="relative">
              <select className="w-full h-10 px-3 bg-white border border-[#ced4da] rounded focus:outline-none appearance-none">
                <option>Sports</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full sm:w-80">
            <label className="font-medium">Date</label>
            <div className="flex">
              <input 
                type="text" 
                defaultValue="01/05/2026 00:00 - 01/05/2026 23:59"
                className="w-full h-10 px-3 bg-white border border-[#ced4da] border-r-0 rounded-l focus:outline-none text-xs sm:text-sm"
              />
              <div className="flex items-center justify-center h-10 px-3 bg-[#ced4da] border border-[#ced4da] rounded-r cursor-pointer shrink-0">
                <Calendar className="w-4 h-4 text-[#495057]" />
              </div>
            </div>
          </div>

          <button className="h-10 px-8 w-full sm:w-auto bg-gradient-to-b from-[#f7c200] to-[#e0b000] border border-[#cca100] rounded text-black font-bold text-sm hover:brightness-105 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            Get P&L
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col border-y sm:border sm:mx-4 border-[#1d2939] sm:rounded overflow-hidden">
        <div className="bg-[#1d2939] px-4 py-2.5 text-white font-bold text-base">
          Profit Loss
        </div>
        
        <div className="bg-white">
          <div className="p-4 flex justify-end">
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full h-9 px-3 border border-[#ced4da] rounded focus:outline-none focus:border-[#f7c200] text-sm" 
              />
            </div>
          </div>

          <div className="overflow-x-auto border-t border-[#dee2e6]">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="bg-[#dfe2e6] text-[#212529] font-bold text-sm">
                <tr>
                  {[
                    "SN", "Show Detail", "UID", "View Bets", "Stake", 
                    "Player P&L", "Upline P&L", "MO Comm.", "BM Comm."
                  ].map((col, idx) => (
                    <th key={idx} className="p-3 border border-[#dee2e6] whitespace-nowrap">
                      <div className="flex items-center justify-between gap-2">
                        {col}
                        <ChevronsUpDown className="w-3 h-3 text-blue-500" />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={9} className="p-12 text-center text-gray-500 font-medium bg-white">
                    No data to display
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <button className="fixed bottom-4 right-4 w-12 h-12 bg-[#f7c200] text-black shadow-lg rounded-lg flex items-center justify-center hover:bg-[#e0b000] active:scale-95 transition-all outline-none z-50">
        <div className="grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-black rounded-[0.5px]" />
          ))}
        </div>
      </button>
    </div>
  );
}

export default DownlineReport;