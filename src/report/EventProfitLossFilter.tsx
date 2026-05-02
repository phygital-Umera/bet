import React from 'react';
import { Calendar } from 'lucide-react';

interface EventProfitLossFilterProps {
  onSubmit?: () => void;
}

const EventProfitLossFilter: React.FC<EventProfitLossFilterProps> = ({
  onSubmit,
}) => {
  return (
    <div className="bg-[#dbe0e6] border border-gray-300 rounded-sm p-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Game Type */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Game Type
          </label>
          <select className="w-full h-10 px-3 bg-white border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-500">
            <option>Sports</option>
            <option>Casino</option>
          </select>
        </div>

        {/* Sports */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Sports
          </label>
          <select className="w-full h-10 px-3 bg-white border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-500">
            <option>All</option>
            <option>Cricket</option>
            <option>Tennis</option>
            <option>Soccer</option>
          </select>
        </div>

        {/* Date */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
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

        {/* Button */}
        <div className="flex items-end">
          <button
            onClick={onSubmit}
            className="bg-[#eebb2c] hover:bg-[#d8a81d] text-black font-bold h-10 px-6 rounded-sm border border-black shadow-[0_1px_1px_rgba(0,0,0,0.2)] transition-colors active:shadow-inner"
          >
            Get P&L
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventProfitLossFilter;