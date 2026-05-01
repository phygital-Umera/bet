import {useState} from 'react';
import ProfileView from './ProfileView';
import StatementView from './StatementView';
import ActivityLogView from './ActivityLogView';
import BalanceView from './BalanceView';
import Layout from './Layout';

type ViewType = 'profile' | 'statement' | 'log' | 'balance';

export default function MyAccount() {
  const [currentView, setCurrentView] = useState<ViewType>('profile');

  const renderView = () => {
    switch (currentView) {
      case 'profile':
        return <ProfileView />;
      case 'statement':
        return <StatementView />;
      case 'log':
        return <ActivityLogView />;
      case 'balance':
        return <BalanceView />;
      default:
        return <ProfileView />;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <Layout currentView={currentView} setView={setCurrentView}>
        {renderView()}
      </Layout>
    </div>
  );
}
