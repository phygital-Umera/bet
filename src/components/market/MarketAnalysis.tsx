import React, {useState} from 'react';
import {LayoutGrid} from 'lucide-react';

const MarketAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sports' | 'special'>('sports');

  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 font-sans text-sm">
      {/* Main Container */}
      <div className="border-gray-300 border bg-white">
        {/* Dark Header Bar */}
        <div className="bg-[#2c3e50] px-4 py-2.5 text-sm font-bold tracking-wide text-[#f1f1f1]">
          Market Analysis
        </div>

        {/* Inner Content Area with Margin */}
        <div className="py6 border-gray-200 min-h-[700px] border-b border-l border-r">
          {/* Tab Selection Area */}
          <div className="flex h-[600px] flex-col rounded border border-stroke bg-white shadow-sm">
            <div className="border-gray-300 flex border-b sm:border-b-0">
              <button
                onClick={() => setActiveTab('sports')}
                className={`border-gray-300 border-r px-8 py-2.5 text-[13px] font-bold transition-all ${
                  activeTab === 'sports'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#666] hover:bg-[#d9d9d9]'
                }`}
              >
                Sports
              </button>
              <button
                onClick={() => setActiveTab('special')}
                className={`border-gray-300 border-r px-8 py-2.5 text-[13px] font-bold transition-all ${
                  activeTab === 'special'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#666] hover:bg-[#d9d9d9]'
                }`}
              >
                Special Markets
              </button>
            </div>

            {/* Search Input on the right */}
            <div className="ml-auto w-full p-2 sm:w-auto">
              <input
                type="text"
                placeholder="Search by Event Name"
                className="border-gray-300 text-gray-700 placeholder:text-gray-400 w-full border bg-white px-3 py-1.5 text-sm focus:outline-none sm:w-[220px]"
              />
            </div>
          </div>

          {/* Table / Data Area */}
          <div className="border-gray-200 mt-[1px] border border-t-0">
            <div className="p-4">
              <p className="text-[13px] font-bold text-black">No data found</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Gold Button */}
      <div className="fixed bottom-8 right-8">
        <button className="group rounded bg-[#fecb00] p-3 text-black shadow-md transition-all hover:bg-yellow-500 active:scale-95">
          <LayoutGrid className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default MarketAnalysis;
