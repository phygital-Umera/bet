import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import BetGenericTable, { BetColumn } from '@/components/Forms/Table/BetGenericTable';

interface BetListLiveRow {
  sn: string;
  plId: string;
  parent: string;
  betId: string;
  ipAddress: string;
  sports: string;
  market: string;
  event: string;
  selection: string;
  type: string;
  oddReq: string;
  betStake: string;
  exposure: string;
}

const BetListLive: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data: BetListLiveRow[] = []; // API data later

  const columns: BetColumn<BetListLiveRow>[] = [
    { key: 'sn', label: 'SN', sortable: true },
    { key: 'plId', label: 'PL ID', sortable: true },
    { key: 'parent', label: 'Parent', sortable: true },
    { key: 'betId', label: 'Bet ID', sortable: true },
    { key: 'ipAddress', label: 'IP Address', sortable: true },
    { key: 'sports', label: 'Sports', sortable: true },
    { key: 'market', label: 'Market', sortable: true },
    { key: 'event', label: 'Event', sortable: true },
    { key: 'selection', label: 'Selection', sortable: false },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'oddReq', label: 'Odd R.', sortable: false },
    { key: 'betStake', label: 'Bet Taken', sortable: true },
    { key: 'exposure', label: 'Exposure', sortable: true },
  ];

  return (
    <div className="min-h-screen bg-[#e9e9e9] p-4 font-sans text-gray-800">
      {/* Filters Section */}
      <div className="border-stroke rounded border bg-[#f8f9fa] p-5 shadow-sm">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Game Type</label>
            <div className="relative">
              <select className="w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none">
                <option>Sports</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Sports</label>
            <div className="relative">
              <select className="w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none">
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Stake</label>
            <div className="relative">
              <select className="w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none">
                <option>&gt;0</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Max Bets</label>
            <div className="relative">
              <select className="w-full appearance-none rounded border border-[#ced4da] bg-white px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none">
                <option>100</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="border-stroke flex h-[600px] flex-col rounded border bg-white shadow-sm mt-4">
        <div className="bg-[#2a3a4a] px-4 py-2 text-sm font-bold tracking-wide text-white">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">Bet List Live</h2>
        </div>

        {/* Search and Select columns - inline on the right */}
        <div className="flex items-center justify-end gap-3 border-b border-gray-200 bg-white p-3">
          <div className="relative">
            <select className="appearance-none rounded border border-[#ced4da] bg-white px-3 py-1.5 pr-8 text-sm focus:border-yellow-500 focus:outline-none">
              <option>Select columns</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-48 rounded border border-[#ced4da] bg-white px-3 py-1.5 pr-8 text-sm focus:border-yellow-500 focus:outline-none"
            />
            <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Table */}
        <BetGenericTable
          data={data}
          columns={columns}
          emptyMessage="No data to display"
        />
      </div>

      {/* Floating Button */}
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