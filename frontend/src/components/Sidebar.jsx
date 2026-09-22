import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Calendar,
  Radio,
  Users,
  Camera,
  FileText,
  CheckSquare,
  BrainCircuit,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Sparkles,
  Zap
} from 'lucide-react';

export const Sidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Meetings', path: '/meetings', icon: Calendar },
    { label: 'Live Meeting', path: '/live-meeting', icon: Radio, badge: 'LIVE', badgeColor: 'bg-rose-500 text-white' },
    { label: 'Participants', path: '/participants', icon: Users },
    { label: 'Meeting Photos', path: '/photos', icon: Camera },
    { label: 'Minutes of Meeting', path: '/minutes', icon: FileText },
    { label: 'Action Items', path: '/action-items', icon: CheckSquare },
    { label: 'Meeting Memory', path: '/memory', icon: BrainCircuit, badge: 'RAG', badgeColor: 'bg-[#00C2FF] text-slate-950 font-bold' },
    { label: 'Analytics', path: '/analytics', icon: BarChart3 },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen glass-panel bg-white/90 border-r border-slate-200/80 flex flex-col justify-between transition-all duration-300 ease-in-out select-none ${
          isCollapsed ? 'w-20' : 'w-64'
        } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Top Header & Brand */}
        <div>
          <div className="h-16 px-4 flex items-center justify-between border-b border-slate-100">
            <div className={`flex items-center gap-3 overflow-hidden ${isCollapsed ? 'justify-center w-full' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2E5BFF] via-[#7B61FF] to-[#00C2FF] flex items-center justify-center text-white shadow-md shadow-[#2E5BFF]/30 shrink-0">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-wider text-slate-900 font-display flex items-center gap-1">
                    SABHA <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#2E5BFF]/10 text-[#2E5BFF]">AI</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium tracking-tight">Boardroom Intelligence</span>
                </div>
              )}
            </div>

            {/* Collapse Toggle Button (Desktop) */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 items-center justify-center transition-colors"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-160px)]">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative ${
                      isActive
                        ? 'bg-gradient-to-r from-[#2E5BFF]/10 to-[#7B61FF]/10 text-[#2E5BFF] font-semibold border border-[#2E5BFF]/20 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    } ${isCollapsed ? 'justify-center px-0' : ''}`
                  }
                  title={isCollapsed ? item.label : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <IconComponent
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                          isActive ? 'text-[#2E5BFF]' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      />

                      {!isCollapsed && (
                        <span className="truncate flex-1 flex items-center justify-between">
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          )}
                        </span>
                      )}

                      {/* Tooltip on Collapsed Hover */}
                      {isCollapsed && (
                        <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap shadow-xl">
                          {item.label}
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom User Profile Section */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/50">
          <div
            className={`flex items-center gap-3 p-2 rounded-xl transition-colors ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'}
              alt={user?.name || 'User'}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#2E5BFF]/30 shrink-0"
            />

            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">{user?.name || 'Dr. Elena Vance'}</p>
                <p className="text-[10px] text-slate-500 truncate">{user?.role || 'Executive Chair'}</p>
              </div>
            )}

            {!isCollapsed && (
              <button
                onClick={handleLogout}
                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
