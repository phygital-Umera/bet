import {Link, useNavigate} from '@tanstack/react-router';
import {useState} from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* BEGIN: MainHeader */}
      <header className="bg-brand-charcoal text-white shadow-md">
        <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between px-4">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-2xl text-brand-gold"></i>
            <span className="font-serif text-2xl font-bold tracking-tight">
              fairexch<sup className="text-xs">®</sup>
            </span>
          </Link>

          {/* User Quick Info */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-4">
              <span>vik11000</span>
              <span className="text-brand-gold">CI:1500.00</span>
            </div>
            <button
              aria-label="Refresh"
              className="hover:bg-gray-600 rounded-custom bg-brand-gray-dark p-2 text-white transition-colors"
            >
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: Secondary Navigation */}
      <nav className="sticky top-0 z-10 border-b border-yellow-600 bg-brand-gold shadow-sm">
        <div className="mx-auto flex h-12 max-w-[1920px] items-center justify-between px-4">
          {/* Navigation Links */}
          <ul className="flex h-full items-center space-x-1 text-sm font-semibold text-brand-charcoal">
            {/* Downline List Dropdown */}
            <li className="relative h-full">
              <button
                onClick={() => toggleDropdown('downline')}
                className="flex h-full items-center border-b-2 border-transparent px-4 transition-colors hover:border-black hover:bg-black/10"
              >
                Downline List{' '}
                <i className="fa-solid fa-caret-down ml-1 text-xs"></i>
              </button>
              {openDropdown === 'downline' && (
                <div className="absolute left-0 top-full z-20 mt-0 w-56 rounded-b-custom border border-brand-border bg-white shadow-lg">
                  <button
                    onClick={() => navigate({ to: '/downline/userdownlinelist' })}
                    className="block w-full px-4 py-2 text-left text-sm text-brand-text transition-colors hover:bg-brand-gray"
                  >
                    <i className="fa-solid fa-users mr-2 text-brand-gold"></i>
                    User Downline List
                  </button>
                  <button
                    onClick={() => navigate({ to: '/downline/masterdownline' })}
                    className="block w-full border-t border-brand-border px-4 py-2 text-left text-sm text-brand-text transition-colors hover:bg-brand-gray"
                  >
                    <i className="fa-solid fa-crown mr-2 text-brand-gold"></i>
                    Master Downline List
                  </button>
                </div>
              )}
            </li>

            <li className="h-full">
              <Link
                to="/my-account"
                className="flex h-full items-center border-b-2 border-transparent px-4 transition-colors hover:border-black hover:bg-black/10"
              >
                My Account
              </Link>
            </li>

            {/* My Report Dropdown */}
            <li className="relative h-full">
              <button
                onClick={() => toggleDropdown('report')}
                className="flex h-full items-center border-b-2 border-transparent px-4 transition-colors hover:border-black hover:bg-black/10"
              >
                My Report{' '}
                <i className="fa-solid fa-caret-down ml-1 text-xs"></i>
              </button>
              {openDropdown === 'report' && (
                <div className="absolute left-0 top-full z-20 mt-0 w-64 rounded-b-custom border border-brand-border bg-white shadow-lg">
                  <button
                    onClick={() => navigate('/report/event-profit-loss')}
                    className="block w-full px-4 py-2 text-left text-sm text-brand-text transition-colors hover:bg-brand-gray"
                  >
                    <i className="fa-solid fa-chart-line mr-2 text-brand-gold"></i>
                    Event Profit/Loss
                  </button>
                  <button
                    onClick={() => navigate('/report/downline-profit-loss')}
                    className="block w-full border-t border-brand-border px-4 py-2 text-left text-sm text-brand-text transition-colors hover:bg-brand-gray"
                  >
                    <i className="fa-solid fa-diagram-project mr-2 text-brand-gold"></i>
                    Downline Profit/Loss
                  </button>
                </div>
              )}
            </li>

            <li className="h-full">
              <Link
                to="/bet-list"
                className="flex h-full items-center border-b-2 border-transparent px-4 transition-colors hover:border-black hover:bg-black/10"
              >
                Bet List
              </Link>
            </li>

            <li className="h-full">
              <Link
                to="/bet-list-live"
                className="flex h-full items-center border-b-2 border-transparent px-4 transition-colors hover:border-black hover:bg-black/10"
              >
                Bet List Live
              </Link>
            </li>

            <li className="h-full">
              <Link
                to="/market-analysis"
                className="flex h-full items-center border-b-2 border-transparent px-4 transition-colors hover:border-black hover:bg-black/10"
              >
                Market Analysis
              </Link>
            </li>

            <li className="h-full">
              <Link
                to="/banking"
                className="flex h-full items-center border-b-2 border-transparent px-4 transition-colors hover:border-black hover:bg-black/10"
              >
                Banking
              </Link>
            </li>

            {/* Games Dropdown */}
            <li className="relative h-full">
              <button
                onClick={() => toggleDropdown('games')}
                className="flex h-full items-center border-b-2 border-transparent px-4 transition-colors hover:border-black hover:bg-black/10"
              >
                Games <i className="fa-solid fa-caret-down ml-1 text-xs"></i>
              </button>
              {openDropdown === 'games' && (
                <div className="absolute left-0 top-full z-20 mt-0 w-56 rounded-b-custom border border-brand-border bg-white shadow-lg">
                  <button
                    onClick={() => navigate('/games/player-battle')}
                    className="block w-full px-4 py-2 text-left text-sm text-brand-text transition-colors hover:bg-brand-gray"
                  >
                    <i className="fa-solid fa-gamepad mr-2 text-brand-gold"></i>
                    Player Battle
                  </button>
                  <button
                    onClick={() => navigate('/games/roulette')}
                    className="block w-full border-t border-brand-border px-4 py-2 text-left text-sm text-brand-text transition-colors hover:bg-brand-gray"
                  >
                    <i className="fa-solid fa-circle-notch mr-2 text-brand-gold"></i>
                    Roulette
                  </button>
                </div>
              )}
            </li>
          </ul>

          {/* Logout */}
          <Link
            to="/logout"
            className="flex items-center rounded-custom px-4 py-1.5 text-sm font-semibold text-brand-charcoal transition-colors hover:bg-black/10"
          >
            Logout <i className="fa-solid fa-arrow-right-from-bracket ml-2"></i>
          </Link>
        </div>
      </nav>
      {/* END: Secondary Navigation */}
    </>
  );
};

export default Header;
