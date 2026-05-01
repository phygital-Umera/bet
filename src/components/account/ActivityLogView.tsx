import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ActivityLogView() {
  const logs = [
    { id: 1, date: '01/05/2026 13:04:47', status: 'Login Success', ip: '49.36.35.131' },
    { id: 2, date: '01/05/2026 13:00:36', status: 'Login Success', ip: '49.36.35.131' },
    { id: 3, date: '01/05/2026 11:37:58', status: 'Login Success', ip: '49.36.35.131' },
    { id: 4, date: '08/02/2026 12:58:52', status: 'Login Success', ip: '106.192.114.85' },
    { id: 5, date: '07/02/2026 21:15:29', status: 'Login Success', ip: '122.170.196.47' },
    { id: 6, date: '07/02/2026 20:55:48', status: 'Login Success', ip: '106.192.131.94' },
    { id: 7, date: '07/02/2026 19:46:02', status: 'Login Success', ip: '106.192.131.94' },
  ];

  return (
    <div id="activity-log-view" className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex flex-col">
      <div className="bg-[#2b415a] text-white p-3 font-semibold text-sm">
        Activity Log
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-[#e9eff5] text-gray-700 font-bold">
              <th className="p-3 border border-gray-200 w-16">
                <div className="flex items-center justify-between">
                  S. No. <div className="flex flex-col text-blue-500 opacity-60"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                </div>
              </th>
              <th className="p-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  Login Date & Time <div className="flex flex-col text-blue-500 opacity-60"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                </div>
              </th>
              <th className="p-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  Login Status <div className="flex flex-col text-blue-500 opacity-60"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                </div>
              </th>
              <th className="p-3 border border-gray-200 px-8">
                <div className="flex items-center justify-between">
                  IP Address <div className="flex flex-col text-blue-500 opacity-60"><ChevronUp size={10}/><ChevronDown size={10} className="-mt-1"/></div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-blue-50/30 transition-colors border-b border-gray-200">
                <td className="p-3 border-x border-gray-200 font-bold text-gray-800">{log.id}</td>
                <td className="p-3 border-x border-gray-200 font-medium text-gray-800">{log.date}</td>
                <td className="p-3 border-x border-gray-200 font-medium text-gray-800">{log.status}</td>
                <td className="p-3 border-x border-gray-200 font-medium text-gray-800 px-8">{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Scrollbar simulator like in screenshot */}
      <div className="h-4 bg-[#f1f1f1] border-t border-gray-300 relative">
        <div className="absolute left-0 top-0 h-full w-[98%] bg-[#c1c1c1] rounded-full scale-[0.9] origin-left"></div>
        <div className="absolute right-0 top-0 h-full w-4 flex items-center justify-center border-l border-gray-300">
           <ChevronDown size={12} className="text-gray-500"/>
        </div>
      </div>
    </div>
  );
}
