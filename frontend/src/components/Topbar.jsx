import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Menu,
  Search,
  Bell,
  Plus,
  Radio,
  Sparkles,
  ChevronDown,
  User,
  LogOut,
  ShieldAlert,
  Brain
} from 'lucide-react';
import { Button } from './Button';

export const Topbar = ({ onToggleMobile, isSidebarCollapsed, onToggleSidebar }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/memory?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Determine current section title
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('/dashboard')) return 'Executive Dashboard';
    if (path.includes('/meetings/new')) return 'Create New Meeting';
    if (path.includes('/meetings')) return 'Boardroom Meetings';
    if (path.includes('/live-meeting')) return 'Live Intelligence Stream';
    if (path.includes('/participants')) return 'Board Participants';
    if (path.includes('/photos')) return 'Autonomous Photography Bot';
    if (path.includes('/minutes')) return 'Minutes of Meeting (MoM)';
    if (path.includes('/action-items')) return 'Action Items & Commitments';
    if (path.includes('/memory')) return 'Persistent Meeting Memory (RAG)';
    if (path.includes('/analytics')) return 'Boardroom Analytics';
    if (path.includes('/settings')) return 'System Settings';
    return 'Boardroom Intelligence';
  };

  return (
    <header className="h-16 glass-panel sticky top-0 z-30 bg-white/80 border-b border-slate-200/80 px-4 md:px-6 flex items-center justify-between gap-4">
      {/* Left section: Hamburger Menu Toggle & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobile}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
          title="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <button
          onClick={onToggleSidebar}
          className="hidden lg:flex p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          title="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex flex-col">
          <span className="text-sm font-bold text-slate-900">{getPageTitle()}</span>
          <span className="text-[10px] text-slate-400 font-medium">SABHA AI Engine v2.4 Active</span>
        </div>
      </div>

      {/* Center Search Input */}
      <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask SABHA or search meetings, action items..."
            className="w-full pl-10 pr-12 py-2 text-xs rounded-xl bg-slate-100/80 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 focus:border-[#2E5BFF] transition-all"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-slate-200/60 rounded">
            ⌘K
          </span>
        </div>
      </form>

      {/* Right Actions & Profile */}
      <div className="flex items-center gap-3">
        {/* Live Meeting Shortcut Pill */}
        <button
          onClick={() => navigate('/live-meeting')}
          className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-200 text-rose-600 text-xs font-semibold hover:bg-rose-500/20 transition-all active:scale-95"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500 pulse-live" />
          <span>Live Session Active</span>
        </button>

        {/* Create Meeting CTA */}
        <Button
          variant="glow"
          size="sm"
          icon={Plus}
          onClick={() => navigate('/meetings/new')}
          className="hidden sm:inline-flex"
        >
          New Meeting
        </Button>

        {/* Notifications Icon */}
        <button className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#2E5BFF] ring-2 ring-white" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'}
              alt={user?.name}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#2E5BFF]/30"
            />
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
          </button>

          {showProfileMenu && (
            <div
              className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <div className="p-2 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-900">{user?.name || 'Dr. Elena Vance'}</p>
                <p className="text-[11px] text-slate-500">{user?.email || 'elena@sabha.ai'}</p>
                <span className="inline-block mt-1 px-2 py-0.5 bg-[#2E5BFF]/10 text-[#2E5BFF] text-[10px] font-semibold rounded">
                  {user?.role || 'Admin'}
                </span>
              </div>

              <div className="py-1">
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate('/settings');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  Account Settings
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate('/memory');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Brain className="w-4 h-4 text-slate-400" />
                  Meeting Memory (RAG)
                </button>
              </div>

              <div className="pt-1 border-t border-slate-100">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 rounded-lg transition-colors font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
