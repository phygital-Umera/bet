import React, { useState } from 'react';
import { LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import ReportGenericTable, {
  ReportColumn,
} from '@/components/Forms/Table/ReportGenericTable';
import EventProfitLossFilter from '@/report/EventProfitLossFilter';

interface EventPLRow {
  matches: string;
  viewBets: string;
  loosingStake: string;
  stake: string;
  playerPL: string;
  uplinePL: string;
  moComm: string;
  bmComm: string;
  settleTime: string;
}

const EventProfitLoss: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const data: EventPLRow[] = []; // API data later

  const columns: ReportColumn<EventPLRow>[] = [
    { key: 'matches', label: 'Matches', sortable: true },
    {
      key: 'viewBets', 
      label: 'View Bets',
       sortable: true ,
      render: () => (
        <button className="text-blue-500 hover:underline">View</button>
      ),
    },
    { key: 'loosingStake', label: 'Loosing Stake',  sortable: true },
    { key: 'stake', label: 'Stake', sortable: true },
    { key: 'playerPL', label: 'Player P/L',  sortable: true },
    { key: 'uplinePL', label: 'Upline P/L' ,  sortable: true},
    { key: 'moComm', label: 'MO Comm.' ,  sortable: true},
    { key: 'bmComm', label: 'BM Comm.',  sortable: true },
    { key: 'settleTime', label: 'Settle Time', sortable: true },
  ];

  return (
    <div className="min-h-screen bg-[#eeede7] p-4 sm:p-6 font-sans text-gray-800">
      <div className="max-w-[1600px] mx-auto space-y-4">

        {/* Filter Component */}
        <EventProfitLossFilter
          onSubmit={() => console.log('Fetch P&L')}
        />

        {/* Results Section */}
        <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#2c3e50] px-4 py-2 text-white font-bold flex items-center justify-between h-10">
            <span>Profit Loss</span>
          </div>

          <div className="p-4 space-y-4">

            {/* Search */}
            <div className="flex justify-end">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-xs h-9 px-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-yellow-500"
              />
            </div>

            {/* Table */}
            <ReportGenericTable
              data={data}
              columns={columns}
              emptyMessage="No data to display"
            />
          </div>
        </div>
      </div>

      {/* Floating Button */}
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