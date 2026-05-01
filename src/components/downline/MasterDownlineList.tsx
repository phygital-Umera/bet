import React, {useState} from 'react';
import {RotateCw, UserPlus, Search, PenSquare, Eye} from 'lucide-react';
import GenericTable, {
  Column,
  Action,
  defaultActions,
} from '../Forms/Table/GenericTable';
import {motion, AnimatePresence} from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AddMaster from '../user/AddMaster';

interface MetricProps {
  label: string;
  value: string;
  currency?: string;
  isNegative?: boolean;
}

const Metric = ({
  label,
  value,
  currency = 'CI',
  isNegative = false,
}: MetricProps) => (
  <div className="flex flex-col justify-between rounded-custom border border-brand-border bg-white p-4 shadow-card">
    <span className="mb-1 text-xs font-medium uppercase tracking-wider text-brand-text-muted">
      {label}:
    </span>
    <span
      className={`font-serif text-lg font-bold ${isNegative ? 'text-red-600' : 'text-brand-charcoal'}`}
    >
      {currency} {value}
    </span>
  </div>
);

interface MasterUser {
  id: string;
  username: string;
  type: 'MA' | 'PL';
  creditRef: string;
  balance: string;
  exposure: string;
  availBal: string;
  refPL: string;
  rate: string;
  playerBal: string;
  status: 'active' | 'suspended' | 'closed';
}

const MasterDownlineList = () => {
  const [statusFilter, setStatusFilter] = useState('ACTIVE');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [showAddMasterModal, setShowAddMasterModal] = useState(false);

  const [masterData, setMasterData] = useState<MasterUser[]>([
    {
      id: '1',
      username: 'master1',
      type: 'MA',
      creditRef: '0.00',
      balance: '5000.00',
      exposure: '1000.00',
      availBal: '4000.00',
      refPL: '500.00',
      rate: '1.500',
      playerBal: '2500.00',
      status: 'active',
    },
    {
      id: '2',
      username: 'master2',
      type: 'MA',
      creditRef: '0.00',
      balance: '3000.00',
      exposure: '500.00',
      availBal: '2500.00',
      refPL: '300.00',
      rate: '1.200',
      playerBal: '1500.00',
      status: 'active',
    },
  ]);

  const columns: Column<MasterUser>[] = [
    {
      key: 'username',
      label: 'Username',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center gap-2 font-medium">
          <span className="rounded-sm bg-brand-gold px-1.5 py-0.5 text-[10px] font-bold text-brand-charcoal">
            {row.type}
          </span>
          {value}
        </div>
      ),
    },
    {
      key: 'creditRef',
      label: 'Credit Ref.',
      sortable: true,
      render: (value, row) => (
        <div className="group flex items-center justify-between">
          <span>{value}</span>
          <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <button className="text-gray-400 hover:text-brand-charcoal">
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="text-gray-400 hover:text-brand-charcoal">
              <i className="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>
      ),
    },
    {
      key: 'balance',
      label: 'Balance',
      sortable: true,
      render: (value, row) => (
        <div className="group flex items-center justify-between">
          <span>{value}</span>
          <button className="text-gray-400 opacity-0 transition-opacity hover:text-brand-charcoal group-hover:opacity-100">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </div>
      ),
    },
    {
      key: 'exposure',
      label: 'Exposure',
      sortable: true,
      render: (value) => (
        <span className="font-medium text-red-600">{value}</span>
      ),
    },
    {key: 'availBal', label: 'Avail Bal.', sortable: true},
    {key: 'refPL', label: 'Ref. P/L', sortable: true},
    {key: 'rate', label: 'Rate', sortable: true},
    {
      key: 'playerBal',
      label: 'Player Bal.',
      sortable: true,
      render: (value) => <span className="text-gray-400">{value}</span>,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value) => {
        const statusStyles: Record<string, string> = {
          active: 'bg-green-100 text-green-800 border-green-200',
          suspended: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          closed: 'bg-red-100 text-red-800 border-red-200',
        };
        return (
          <span
            className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${statusStyles[value] || 'bg-gray-100 text-gray-800 border-gray-200'}`}
          >
            {value}
          </span>
        );
      },
    },
  ];

  const actions: Action<MasterUser>[] = [
    defaultActions.banking((row) => console.log('Banking', row.username)),
    defaultActions.transfer((row) => console.log('Transfer', row.username)),
    defaultActions.history((row) => console.log('History', row.username)),
    defaultActions.settings((row) => console.log('Settings', row.username)),
    defaultActions.profile((row) => console.log('Profile', row.username)),
  ];

  const handleSort = (field: string, direction: 'asc' | 'desc') => {
    setSortField(field);
    setSortDirection(direction);
    console.log(`Sorting by ${field} in ${direction} order`);
  };

  const handleAddMasterSuccess = (newMaster: MasterUser) => {
    // Add new master to the list
    setMasterData((prev) => [...prev, newMaster]);
    setShowAddMasterModal(false);
    console.log('Master added successfully:', newMaster);
  };

  const filteredData = masterData.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    const aVal = a[sortField as keyof MasterUser];
    const bVal = b[sortField as keyof MasterUser];
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <>
      <main className="mx-auto flex w-full max-w-[1920px] flex-grow flex-col gap-6 bg-[#F9FAFB] p-4 md:p-6 lg:p-8">
        {/* User Summary & Status */}
        <section className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="rounded-sm bg-brand-gold px-2 py-1 text-xs font-bold text-brand-charcoal">
              MA
            </span>
            <h1 className="font-serif text-2xl font-bold text-brand-charcoal">
              vik11000
            </h1>
          </div>
          <div className="flex items-center gap-3 rounded-custom border border-brand-border bg-white p-2 shadow-sm">
            <label
              className="text-sm font-medium text-brand-text"
              htmlFor="status-select"
            >
              Status :
            </label>
            <select
              className="form-select rounded-md border-stroke py-1.5 pl-3 pr-8 text-sm focus:border-brand-gold focus:ring-brand-gold"
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
              className="hover:bg-gray-200 rounded-md border border-stroke bg-brand-gray p-1.5 text-brand-text transition-colors"
              onClick={() => console.log('Refreshing status...')}
            >
              <i className="fa-solid fa-rotate-right"></i>
            </button>
            {/* Add Master Button */}
            <button
              onClick={() => setShowAddMasterModal(true)}
              className="hover:bg-gray-800 flex items-center gap-2 rounded-md bg-brand-charcoal px-4 py-1.5 text-sm font-semibold text-white transition-colors"
            >
              <UserPlus size={16} />
              <span>Add Master</span>
            </button>
          </div>
        </section>

        {/* Financial Cards Grid */}
        <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <Metric label="Total Balance" value="0.00" />
          <Metric label="Total Exposure" value="( 0.00 )" isNegative={true} />
          <Metric label="Avail. Balance" value="1500.00" />
          <Metric label="Balance" value="1500.00" />
          <Metric label="Total Avail. Balance" value="0.00" />
          <Metric label="Ref P/L" value="1500.00" />
        </section>

        {/* Master Downline List Section */}
        <section className="flex flex-col overflow-hidden rounded-custom border border-brand-border bg-white shadow-card">
          {/* Toolbar */}
          <div className="bg-gray-50/50 flex justify-end border-b border-brand-border p-4">
            <div className="flex w-full max-w-sm gap-2">
              <input
                className="form-input placeholder-gray-400 w-full rounded-md border-stroke text-sm focus:border-brand-gold focus:ring-brand-gold"
                placeholder="Search for..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="hover:bg-gray-800 flex items-center gap-2 whitespace-nowrap rounded-md bg-brand-charcoal px-4 py-2 text-sm font-semibold text-white transition-colors">
                <i className="fa-solid fa-magnifying-glass"></i> Downline
              </button>
            </div>
          </div>

          {/* Generic Table */}
          <GenericTable
            data={sortedData}
            columns={columns}
            actions={actions}
            onSort={handleSort}
            initialSortField={sortField}
            initialSortDirection={sortDirection}
            emptyMessage="No master data to display"
            onRowClick={(row) => console.log('Row clicked:', row.username)}
          />
        </section>
      </main>

      {/* Add Master Modal */}
      <AnimatePresence>
        {showAddMasterModal && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowAddMasterModal(false)}
          >
            <motion.div
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              exit={{scale: 0.9, opacity: 0}}
              transition={{type: 'spring', damping: 25, stiffness: 300}}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[700px]"
            >
              <AddMaster
                onClose={() => setShowAddMasterModal(false)}
                onSuccess={handleAddMasterSuccess}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MasterDownlineList;
