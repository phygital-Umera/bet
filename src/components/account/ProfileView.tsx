import React from 'react';
import { Edit2 } from 'lucide-react';

export default function ProfileView() {
  const details = [
    { label: 'Name', value: 'vik11000' },
    { label: 'User Profile', value: '', icon: <Edit2 size={14} className="text-gray-600 cursor-pointer" /> },
    { label: 'Currency', value: 'CI' },
    { label: 'Password', value: '**********', icon: <Edit2 size={14} className="text-gray-600 cursor-pointer" /> },
  ];

  return (
    <div id="profile-view" className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
      <div className="bg-[#2b415a] text-white p-3 font-semibold text-sm">
        Account Details
      </div>
      <div className="p-2">
        <table className="w-full text-sm">
          <tbody>
            {details.map((detail, idx) => (
              <tr key={idx} className="border-b last:border-0 border-gray-100">
                <td className="p-4 font-semibold text-gray-700 w-1/3">{detail.label}</td>
                <td className="p-4 flex items-center gap-2">
                  <span className="text-gray-600">{detail.value}</span>
                  {detail.icon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
