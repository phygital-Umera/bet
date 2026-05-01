import React from 'react';
import { DollarSign } from 'lucide-react';

export default function BalanceView() {
  return (
    <div id="balance-view" className="flex flex-col gap-6">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden min-h-[100px]">
        <div className="bg-[#2b415a] text-white p-3 font-semibold text-sm">
          Balance Overview
        </div>
        <div className="p-8 flex items-center gap-2 border-t border-gray-100">
          <DollarSign className="text-red-500 w-8 h-8" />
          <h2 className="text-3xl font-normal text-[#2b415a]">
            Balance Overview (1500.00)CI
          </h2>
        </div>
      </div>
    </div>
  );
}
