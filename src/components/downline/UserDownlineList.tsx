import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface DownlineUser {
  id: string;
  username: string;
  type: 'PL' | 'MA';
  creditRef: string;
  balance: string;
  exposure: string;
  availBal: string;
  refPL: string;
  rate: string;
  playerBal: string;
  status: 'active' | 'suspended' | 'closed';
}

const UserDownlineList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ACTIVE');
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Sample data - replace with your actual API data
  const [downlineData] = useState<DownlineUser[]>([
    {
      id: '1',
      username: 'rbz5',
      type: 'PL',
      creditRef: '0.00',
      balance: '0.00',
      exposure: '0.00',
      availBal: '0.00',
      refPL: '0.00',
      rate: '1.000',
      playerBal: '-',
      status: 'active',
    },
    {
      id: '2',
      username: 'v2345',
      type: 'PL',
      creditRef: '0.00',
      balance: '0.00',
      exposure: '0.00',
      availBal: '0.00',
      refPL: '0.00',
      rate: '7.000',
      playerBal: '-',
      status: 'active',
    },
  ]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) return <i className="fa-solid fa-sort sort-icon"></i>;
    return sortDirection === 'asc' 
      ? <i className="fa-solid fa-sort-up sort-icon"></i>
      : <i className="fa-solid fa-sort-down sort-icon"></i>;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 border border-green-200">
            active
          </span>
        );
      case 'suspended':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
            suspended
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 border border-red-200">
            closed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
            {status}
          </span>
        );
    }
  };

  const filteredData = downlineData.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-grow p-4 md:p-6 lg:p-8 max-w-[1920px] mx-auto w-full flex flex-col gap-6">
      {/* User Summary & Status */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="bg-brand-gold text-brand-charcoal text-xs font-bold px-2 py-1 rounded-sm">MA</span>
          <h1 className="font-serif text-2xl font-bold text-brand-charcoal">vik11000</h1>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-custom shadow-sm border border-brand-border">
          <label className="text-sm font-medium text-brand-text" htmlFor="status-select">
            Status :
          </label>
          <select
            className="form-select text-sm border-gray-300 rounded-md py-1.5 pl-3 pr-8 focus:ring-brand-gold focus:border-brand-gold"
            id="status-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="SUSPENDED">SUSPENDED</option>
            <option value="CLOSED">CLOSED</option>
          </select>
          <button
            aria-label="Refresh Status"
            className="bg-brand-gray hover:bg-gray-200 border border-gray-300 text-brand-text p-1.5 rounded-md transition-colors"
            onClick={() => {
              // Refresh status logic
              console.log('Refreshing status...');
            }}
          >
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        </div>
      </section>

      {/* Financial Cards Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-custom shadow-card border border-brand-border flex flex-col justify-between">
          <span className="text-xs text-brand-text-muted font-medium uppercase tracking-wider mb-1">
            Total Balance:
          </span>
          <span className="font-serif text-lg font-bold text-brand-charcoal">CI 0.00</span>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-custom shadow-card border border-brand-border flex flex-col justify-between">
          <span className="text-xs text-brand-text-muted font-medium uppercase tracking-wider mb-1">
            Total Exposure:
          </span>
          <span className="font-serif text-lg font-bold text-brand-charcoal">
            CI ( <span className="text-red-600">0.00</span> )
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-custom shadow-card border border-brand-border flex flex-col justify-between">
          <span className="text-xs text-brand-text-muted font-medium uppercase tracking-wider mb-1">
            Avail. Balance:
          </span>
          <span className="font-serif text-lg font-bold text-brand-charcoal">CI 1500.00</span>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded-custom shadow-card border border-brand-border flex flex-col justify-between">
          <span className="text-xs text-brand-text-muted font-medium uppercase tracking-wider mb-1">
            Balance:
          </span>
          <span className="font-serif text-lg font-bold text-brand-charcoal">CI 1500.00</span>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-4 rounded-custom shadow-card border border-brand-border flex flex-col justify-between">
          <span className="text-xs text-brand-text-muted font-medium uppercase tracking-wider mb-1">
            Total Avail. Balance:
          </span>
          <span className="font-serif text-lg font-bold text-brand-charcoal">CI 0.00</span>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-4 rounded-custom shadow-card border border-brand-border flex flex-col justify-between">
          <span className="text-xs text-brand-text-muted font-medium uppercase tracking-wider mb-1">
            Ref P/L:
          </span>
          <span className="font-serif text-lg font-bold text-brand-charcoal">CI 1500.00</span>
        </div>
      </section>

      {/* Downline List Section */}
      <section className="bg-white rounded-custom shadow-card border border-brand-border flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-brand-border flex justify-end bg-gray-50/50">
          <div className="flex gap-2 w-full max-w-sm">
            <input
              className="form-input w-full text-sm border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold placeholder-gray-400"
              placeholder="Search for..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-brand-charcoal hover:bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-md transition-colors whitespace-nowrap flex items-center gap-2">
              <i className="fa-solid fa-magnifying-glass"></i> Downline
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto table-container">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-brand-gray text-brand-text font-semibold border-b border-brand-border">
              <tr>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('username')}
                  scope="col"
                >
                  Username {getSortIcon('username')}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('creditRef')}
                  scope="col"
                >
                  Credit Ref. {getSortIcon('creditRef')}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('balance')}
                  scope="col"
                >
                  Balance {getSortIcon('balance')}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('exposure')}
                  scope="col"
                >
                  Exposure {getSortIcon('exposure')}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('availBal')}
                  scope="col"
                >
                  Avail Bal. {getSortIcon('availBal')}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('refPL')}
                  scope="col"
                >
                  Ref. P/L {getSortIcon('refPL')}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('rate')}
                  scope="col"
                >
                  Rate {getSortIcon('rate')}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('playerBal')}
                  scope="col"
                >
                  Player Bal. {getSortIcon('playerBal')}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleSort('status')}
                  scope="col"
                >
                  Status {getSortIcon('status')}
                </th>
                <th className="px-4 py-3" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {filteredData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium flex items-center gap-2">
                    <span className="bg-brand-gold text-brand-charcoal text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                      {user.type}
                    </span>
                    {user.username}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-between group">
                      <span>{user.creditRef}</span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                        <button className="text-gray-400 hover:text-brand-charcoal">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className="text-gray-400 hover:text-brand-charcoal">
                          <i className="fa-regular fa-eye"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-between group">
                      <span>{user.balance}</span>
                      <button className="text-gray-400 hover:text-brand-charcoal opacity-0 group-hover:opacity-100 transition-opacity">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-red-600 font-medium">{user.exposure}</td>
                  <td className="px-4 py-3">{user.availBal}</td>
                  <td className="px-4 py-3">{user.refPL}</td>
                  <td className="px-4 py-3">{user.rate}</td>
                  <td className="px-4 py-3 text-gray-400">{user.playerBal}</td>
                  <td className="px-4 py-3">{getStatusBadge(user.status)}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button className="action-btn" title="Banking">
                        <i className="fa-solid fa-dollar-sign"></i>
                      </button>
                      <button className="action-btn" title="Transfer">
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                      </button>
                      <button className="action-btn" title="History">
                        <i className="fa-solid fa-clock-rotate-left"></i>
                      </button>
                      <button className="action-btn" title="Settings">
                        <i className="fa-solid fa-gear"></i>
                      </button>
                      <button className="action-btn" title="Profile">
                        <i className="fa-solid fa-user"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default UserDownlineList;