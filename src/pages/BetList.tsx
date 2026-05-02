import React, { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import BetGenericTable, { BetColumn } from '@/components/Forms/Table/BetGenericTable';

interface BetListRow {
  sn: string;
  plId: string;
  dollar: string;
  parent: string;
  betId: string;
  ipAddress: string;
  sports: string;
  market: string;
  event: string;
  selection: string;
  type: string;
  oddReq: string;
  betTaken: string;
  s: string;
}

const BetList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data: BetListRow[] = []; // API data later

  const columns: BetColumn<BetListRow>[] = [
    { key: 'sn', label: 'SN', sortable: true },
    { key: 'plId', label: 'PL ID', sortable: true },
    { key: 'dollar', label: '$', sortable: true },
    { key: 'parent', label: 'Parent', sortable: true },
    { key: 'betId', label: 'Bet ID', sortable: true },
    { key: 'ipAddress', label: 'IP Address', sortable: true },
    { key: 'sports', label: 'Sports', sortable: true },
    { key: 'market', label: 'Market', sortable: true },
    { key: 'event', label: 'Event', sortable: true },
    { key: 'selection', label: 'Selection', sortable: false },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'oddReq', label: 'Odd req', sortable: false },
    { key: 'betTaken', label: 'Bet Taken', sortable: true },
    { key: 's', label: 'S', sortable: true },
  ];

  return (
    <div className="min-h-screen bg-[#e8e4d9] p-4 font-sans text-[#212529] lg:p-6">
      <div className="space-y-4">
        {/* Filter Section */}
        <div className="border-stroke rounded border bg-[#f8f9fa] p-5 shadow-sm">
          <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {/* Game Type */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">Game Type</label>
              <div className="relative">
                <select className="h-[38px] w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-1.5 text-sm focus:border-blue-400 focus:outline-none">
                  <option>SPORTS</option>
                </select>
                <ChevronDown className="text-gray-400 pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </div>

            {/* Sports */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">Sports</label>
              <div className="relative">
                <select className="h-[38px] w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-1.5 text-sm focus:border-blue-400 focus:outline-none">
                  <option>Select</option>
                </select>
                <ChevronDown className="text-gray-400 pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </div>

            {/* Bet Status */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">Bet Status</label>
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
              <label className="text-gray-700 text-[13px] font-medium">Stake</label>
              <div className="relative">
                <select className="h-[38px] w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-1.5 text-sm focus:border-blue-400 focus:outline-none">
                  <option>&gt;0</option>
                </select>
                <ChevronDown className="text-gray-400 pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>
            </div>

            {/* Date */}
            <div className="space-y-1.5">
              <label className="text-gray-700 text-[13px] font-medium">Date</label>
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
                whileHover={{ brightness: 1.1 }}
                className="h-[38px] w-full rounded border border-[#eeb902] bg-[#f9d423] px-6 text-sm font-bold text-black shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all hover:bg-[#ffdf40]"
              >
                Get History
              </motion.button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="border-stroke flex h-[600px] flex-col rounded border bg-white shadow-sm">
          <div className="bg-[#2a3a4a] px-4 py-2 text-sm font-bold tracking-wide text-white">
            Bet List
          </div>

          <div className="flex justify-end bg-white p-3">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-[200px] rounded border border-[#ced4da] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>

          {/* ONLY THE TABLE - imported from BetGenericTable */}
          <BetGenericTable
            data={data}
            columns={columns}
            emptyMessage="No data to display"
            
          />
        </div>
      </div>

      {/* Floating Button */}
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