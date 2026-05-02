import { Calendar, ChevronDown } from 'lucide-react';

const DownlineReportFilter: React.FC = () => {
  return (
    <div className="bg-[#dbe0e6] border border-gray-300 rounded-sm p-4 shadow-sm">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">

        {/* Game Type */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Game Type
          </label>
          <div className="relative">
            <select className="w-full h-10 px-3 bg-white border border-gray-400 rounded-sm focus:outline-none">
              <option>Sports</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <div className="relative">
            <input
              type="text"
              defaultValue="01/05/2026 00:00 - 01/05/2026 23:59"
              className="w-full h-10 pl-3 pr-10 bg-white border border-gray-400 rounded-sm focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-200 border-l border-gray-400 cursor-pointer">
              <Calendar className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button className="bg-[#eebb2c] hover:bg-[#d8a81d] text-black font-bold h-10 px-6 rounded-sm border border-black shadow-[0_1px_1px_rgba(0,0,0,0.2)] transition-colors active:shadow-inner">
            Get P&L
          </button>
        </div>

      </div>
    </div>
  );
};

export default DownlineReportFilter;