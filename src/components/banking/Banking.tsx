import React from 'react';
import {
  Search,
  ChevronDown,
  Edit2,
  Plus,
  LayoutGrid,
  RotateCcw,
} from 'lucide-react';
import {motion} from 'framer-motion';

const Banking = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 font-sans text-sm">
      {/* Top Banner (Banking Title) */}
      <div className="bg-[#2d3e50] px-4 py-2 font-bold text-white shadow-sm">
        Banking
      </div>

      <div className="border-gray-200 mx-1 mt-2 overflow-hidden border bg-white shadow-sm">
        {/* Filters Area */}
        <div className="border-gray-100 flex flex-wrap items-center justify-end gap-3 border-b bg-white p-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs font-semibold">Status</span>
            <div className="relative">
              <select className="border-gray-300 appearance-none rounded border bg-white px-2 py-0.5 pr-6 text-xs focus:border-blue-500 focus:outline-none">
                <option>ACTIVE</option>
                <option>INACTIVE</option>
              </select>
              <ChevronDown className="text-gray-500 pointer-events-none absolute right-1.5 top-1 h-3 w-3" />
            </div>
          </div>

          <div className="relative">
            <select className="border-gray-300 w-40 appearance-none rounded border bg-white px-2 py-0.5 pr-6 text-xs focus:border-blue-500 focus:outline-none">
              <option>Select columns</option>
            </select>
            <ChevronDown className="text-gray-500 pointer-events-none absolute right-1.5 top-1 h-3 w-3" />
          </div>

          <input
            type="text"
            placeholder="Search by Username"
            className="border-gray-300 w-48 rounded border px-2 py-0.5 text-xs focus:border-blue-500 focus:outline-none"
          />

          <button className="rounded bg-[#333a41] px-4 py-1 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#444c54]">
            Search
          </button>
        </div>

        {/* Table Container */}
        <div className="min-h-[400px] overflow-x-auto">
          <table className="w-full table-fixed border-collapse text-left">
            <thead>
              <tr className="border-gray-300 border-b bg-[#e9ecef]">
                <th className="border-gray-300 w-[12%] whitespace-nowrap border-r px-2 py-1.5 text-xs font-bold">
                  <div className="flex items-center gap-1">
                    Username
                    <RotateCcw className="h-3 w-3 cursor-pointer text-blue-500" />
                  </div>
                </th>
                <th className="border-gray-300 w-[8%] whitespace-nowrap border-r px-2 py-1.5 text-xs font-bold">
                  Balance
                </th>
                <th className="border-gray-300 w-[6%] border-r px-2 py-1.5 text-center font-bold">
                  <button className="rounded bg-[#868e96] px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-tighter text-white">
                    Recall All
                  </button>
                </th>
                <th className="border-gray-300 w-[10%] whitespace-nowrap border-r px-2 py-1.5 text-xs font-bold">
                  Available D/W
                </th>
                <th className="border-gray-300 w-[8%] whitespace-nowrap border-r px-2 py-1.5 text-center text-xs font-bold">
                  <div className="flex items-center justify-center gap-1">
                    Rate <RotateCcw className="h-3 w-3 text-blue-500" />
                  </div>
                </th>
                <th className="border-gray-300 w-[10%] whitespace-nowrap border-r px-2 py-1.5 text-center text-xs font-bold">
                  Credit Reference
                </th>
                <th className="border-gray-300 w-[10%] whitespace-nowrap border-r px-2 py-1.5 text-center text-xs font-bold">
                  Reference P/L
                </th>
                <th className="border-gray-300 w-[20%] whitespace-nowrap border-r px-2 py-1.5 text-center text-xs font-bold">
                  <div className="flex items-center justify-center gap-1">
                    Deposit/Withdraw
                    <button className="ml-2 rounded bg-[#868e96] px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-tighter text-white">
                      Settle All
                    </button>
                  </div>
                </th>
                <th className="border-gray-300 w-[8%] whitespace-nowrap border-r px-2 py-1.5 text-center text-xs font-bold">
                  Status
                </th>
                <th className="w-[8%] px-2 py-1.5 text-xs font-bold">Remark</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-gray-200 hover:bg-gray-50 border-b text-xs transition-colors">
                <td className="border-gray-200 border-r px-2 py-1">
                  <span className="mr-1 rounded bg-[#f0ad4e] px-1 py-0.5 text-[9px] font-bold text-black">
                    PL
                  </span>
                  rbz5
                </td>
                <td className="border-gray-200 border-r px-2 py-1 font-bold">
                  0.00
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center">
                  <button className="text-gray-600 hover:text-black">
                    <Plus className="border-gray-400 h-3 w-3 rounded-sm border" />
                  </button>
                </td>
                <td className="border-gray-200 border-r px-2 py-1 font-bold">
                  0.00
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center">
                  <div className="flex items-center justify-between px-1">
                    <span className="font-bold">1.000</span>
                    <Edit2 className="text-gray-500 h-2.5 w-2.5 cursor-pointer" />
                  </div>
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center">
                  <div className="flex items-center justify-between px-1">
                    <span className="font-bold">0.00</span>
                    <Edit2 className="text-gray-500 h-2.5 w-2.5 cursor-pointer" />
                  </div>
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center font-bold">
                  0.00
                </td>
                <td className="border-gray-200 border-r px-2 py-1">
                  <div className="flex items-center justify-center gap-1">
                    <button className="hover:bg-gray-500 flex h-5 w-5 items-center justify-center rounded bg-[#adb5bd] text-[10px] font-bold text-white transition-colors">
                      D
                    </button>
                    <button className="hover:bg-gray-500 flex h-5 w-5 items-center justify-center rounded bg-[#adb5bd] text-[10px] font-bold text-white transition-colors">
                      W
                    </button>
                    <input
                      type="text"
                      className="border-gray-300 w-14 rounded border px-1 py-0.5 text-right text-[10px] focus:outline-none"
                    />
                    <button className="truncate rounded bg-[#f2bc1b] px-1.5 py-0.5 text-[8px] font-bold uppercase text-white">
                      Full
                    </button>
                    <button className="rounded bg-[#f2bc1b] px-1.5 py-0.5 text-[8px] font-bold uppercase text-white">
                      St.
                    </button>
                  </div>
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center">
                  <span className="rounded-full border border-[#c3e6cb] bg-[#d4edda] px-1.5 py-0.5 text-[9px] font-medium text-[#155724]">
                    active
                  </span>
                </td>
                <td className="px-2 py-1">
                  <input
                    type="text"
                    placeholder="Remark..."
                    className="border-gray-300 w-full rounded border px-1 py-0.5 text-[10px] focus:outline-none"
                  />
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="border-gray-200 hover:bg-gray-50 border-b text-xs transition-colors">
                <td className="border-gray-200 border-r px-2 py-1">
                  <span className="mr-1 rounded bg-[#f0ad4e] px-1 py-0.5 text-[9px] font-bold text-black">
                    PL
                  </span>
                  v2345
                </td>
                <td className="border-gray-200 border-r px-2 py-1 font-bold">
                  0.00
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center">
                  <button className="text-gray-600 hover:text-black">
                    <Plus className="border-gray-400 h-3 w-3 rounded-sm border" />
                  </button>
                </td>
                <td className="border-gray-200 border-r px-2 py-1 font-bold">
                  0.00
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center">
                  <div className="flex items-center justify-between px-1">
                    <span className="font-bold">7.000</span>
                    <Edit2 className="text-gray-500 h-2.5 w-2.5 cursor-pointer" />
                  </div>
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center">
                  <div className="flex items-center justify-between px-1">
                    <span className="font-bold">0.00</span>
                    <Edit2 className="text-gray-500 h-2.5 w-2.5 cursor-pointer" />
                  </div>
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center font-bold">
                  0.00
                </td>
                <td className="border-gray-200 border-r px-2 py-1">
                  <div className="flex items-center justify-center gap-1">
                    <button className="hover:bg-gray-500 flex h-5 w-5 items-center justify-center rounded bg-[#adb5bd] text-[10px] font-bold text-white transition-colors">
                      D
                    </button>
                    <button className="hover:bg-gray-500 flex h-5 w-5 items-center justify-center rounded bg-[#adb5bd] text-[10px] font-bold text-white transition-colors">
                      W
                    </button>
                    <input
                      type="text"
                      className="border-gray-300 w-14 rounded border px-1 py-0.5 text-right text-[10px] focus:outline-none"
                    />
                    <button className="rounded bg-[#f2bc1b] px-1.5 py-0.5 text-[8px] font-bold uppercase text-white">
                      Full
                    </button>
                    <button className="rounded bg-[#f2bc1b] px-1.5 py-0.5 text-[8px] font-bold uppercase text-white">
                      St.
                    </button>
                  </div>
                </td>
                <td className="border-gray-200 border-r px-2 py-1 text-center">
                  <span className="rounded-full border border-[#c3e6cb] bg-[#d4edda] px-1.5 py-0.5 text-[9px] font-medium text-[#155724]">
                    active
                  </span>
                </td>
                <td className="px-2 py-1">
                  <input
                    type="text"
                    placeholder="Remark..."
                    className="border-gray-300 w-full rounded border px-1 py-0.5 text-[10px] focus:outline-none"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note under table */}
        <div className="bg-white px-4 py-2">
          <p className="text-gray-600 text-[10px] font-medium">
            Please re-call casino wallet balance before submitting the Payment!
          </p>
        </div>

        {/* Footer Actions */}
        <div className="border-gray-100 flex flex-wrap items-center gap-4 border-t bg-white p-4">
          <button className="rounded bg-[#747d8c] px-10 py-1.5 text-xs font-bold uppercase tracking-tight text-white transition-colors hover:bg-[#57606f]">
            Clear All
          </button>
          <div className="max-w-[200px] flex-1">
            <input
              type="password"
              placeholder="Enter Password"
              className="border-gray-300 w-full rounded border px-3 py-1.5 text-xs shadow-inner focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button className="rounded border border-[#d1a317] bg-gradient-to-b from-[#ffcf3b] to-[#f2bc1b] px-10 py-1.5 text-xs font-extrabold uppercase tracking-tight text-black transition-all hover:from-[#f2bc1b] hover:to-[#e1ad10]">
            Submit Payment
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[#d1a317] bg-[#f2bc1b] shadow-lg"
      >
        <LayoutGrid className="h-6 w-6 text-black" />
      </motion.button>
    </div>
  );
};

export default Banking;
