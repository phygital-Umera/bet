import React from 'react';
import {
  User,
  FileText,
  List,
  PieChart,
  LogOut,
  ChevronRight,
  RefreshCcw,
} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

type ViewType = 'profile' | 'statement' | 'log' | 'balance';

interface SidebarItem {
  id: ViewType;
  label: string;
}

const sidebarItems: SidebarItem[] = [
  {id: 'profile', label: 'My Profile'},
  {id: 'statement', label: 'Account Statement'},
  {id: 'log', label: 'Activity Log'},
  {id: 'balance', label: 'Balance Overview'},
];

export default function Layout({
  currentView,
  setView,
  children,
}: {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      id="dashboard-container"
      className="text-gray-800 flex min-h-screen flex-col bg-[#f5f2e8] font-sans"
    >
      {/* Main Content Area */}
      <div className="flex w-full flex-1 gap-6 p-6">
        {/* Sidebar */}
        <aside id="sidebar" className="w-[280px] flex-shrink-0">
          <div className="border-gray-200 overflow-hidden rounded border bg-white shadow-sm">
            <div className="bg-[#2b415a] p-3 text-sm font-semibold text-white">
              My Account
            </div>
            <nav>
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`border-gray-100 w-full border-b p-3 text-left text-sm transition-colors last:border-0 ${
                    currentView === item.id
                      ? 'bg-[#d9e2ef] font-medium text-[#2b415a]'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* View Content */}
        <main id="main-content" className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.2}}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Floating Action Button (matching the yellow one in screenshots) */}
      <div className="fixed bottom-6 right-6">
        <button
          id="fab"
          className="rounded bg-[#ffbf00] p-3 shadow-lg transition-colors hover:bg-[#e6ac00]"
        >
          <div className="grid grid-cols-3 gap-0.5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-1 w-1 bg-white"></div>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
}
