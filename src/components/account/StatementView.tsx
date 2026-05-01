import React from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export default function StatementView() {
  return (
    <div id="statement-view" className="flex flex-col gap-6">
      {/* Search Header */}
      <div className="bg-[#e9eff5] p-5 rounded border border-gray-200">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</label>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded bg-white overflow-hidden shadow-inner">
              <input 
                type="text" 
                defaultValue="01/05/2026 00:00 - 01/05/2026" 
                className="p-2 text-sm outline-none bg-transparent w-[240px]"
              />
              <div className="bg-gray-200 p-2 border-l border-gray-300">
                <Calendar size={16} className="text-gray-600" />
              </div>
            </div>
            <button className="bg-[#ffbf00] hover:bg-[#e6ac00] px-6 py-2 rounded font-bold text-sm shadow-sm transition-colors border border-gray-400/20">
              Get Statement
            </button>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden min-h-[400px] flex flex-col">
        <div className="bg-[#2b415a] text-white p-3 font-semibold text-sm">
          Account Statement
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-[#f0f3f6] border-b border-gray-200 text-gray-600 font-bold uppercase tracking-tight">
                <th className="p-3 border-r border-gray-200">
                  <div className="flex items-center justify-between">
                    To <div className="flex flex-col text-blue-500"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                  </div>
                </th>
                <th className="p-3 border-r border-gray-200">
                  <div className="flex items-center justify-between">
                    Deposit <div className="flex flex-col text-blue-500"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                  </div>
                </th>
                <th className="p-3 border-r border-gray-200">
                  <div className="flex items-center justify-between">
                    Withdraw <div className="flex flex-col text-blue-500"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                  </div>
                </th>
                <th className="p-3 border-r border-gray-200">
                  <div className="flex items-center justify-between">
                    Balance <div className="flex flex-col text-blue-500"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                  </div>
                </th>
                <th className="p-3 border-r border-gray-200">
                  <div className="flex items-center justify-between">
                    Remark <div className="flex flex-col text-blue-500"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                  </div>
                </th>
                <th className="p-3 border-r border-gray-200">
                  <div className="flex items-center justify-between">
                    Date/Time <div className="flex flex-col text-blue-500"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                  </div>
                </th>
                <th className="p-3 border-r border-gray-200">
                  <div className="flex items-center justify-between">
                    Old Balance <div className="flex flex-col text-blue-500"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="p-8 text-center text-gray-500 font-bold text-sm italic bg-white">
                  No data to display
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
