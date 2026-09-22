import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMeeting } from '../context/MeetingContext';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { StatusBadge } from '../components/StatusBadge';
import { Plus, Search, Filter, Calendar, Users, Clock, FileText, ChevronRight, Radio } from 'lucide-react';

export const MeetingsPage = () => {
  const navigate = useNavigate();
  const { meetings } = useMeeting();
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMeetings = meetings.filter((m) => {
    const matchesFilter =
      filter === 'ALL'
        ? true
        : filter === 'LIVE'
        ? m.status === 'LIVE'
        : filter === 'UPCOMING'
        ? m.status === 'UPCOMING'
        : filter === 'COMPLETED'
        ? m.status === 'COMPLETED'
        : true;

    const matchesSearch =
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Boardroom Meetings"
        subtitle="Manage upcoming executive sessions, live feeds, and archived meeting intelligence."
        breadcrumb="Boardroom Management"
        actions={
          <Button
            variant="glow"
            icon={Plus}
            onClick={() => navigate('/meetings/new')}
          >
            Create Meeting
          </Button>
        }
      />

      {/* Filter and Search Bar */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['ALL', 'LIVE', 'UPCOMING', 'COMPLETED'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                filter === tab
                  ? 'bg-[#2E5BFF] text-white shadow-md shadow-[#2E5BFF]/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab === 'ALL' ? 'All Meetings' : tab}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search meetings by title or location..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 transition-all"
          />
        </div>
      </div>

      {/* Meetings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMeetings.map((m) => (
          <Card key={m.id} className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <StatusBadge status={m.status} />
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {m.durationMinutes} min
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-[#2E5BFF] transition-colors cursor-pointer" onClick={() => navigate(m.status === 'LIVE' ? '/live-meeting' : '/minutes')}>
                {m.title}
              </h3>

              <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                {m.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {m.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-600 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <Users className="w-4 h-4 text-[#2E5BFF]" />
                <span>{m.attendees.length} Attendees</span>
              </div>

              <div className="flex items-center gap-2">
                {m.status === 'LIVE' ? (
                  <Button variant="cyan" size="sm" icon={Radio} onClick={() => navigate('/live-meeting')}>
                    Join Live HUD
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" icon={ChevronRight} onClick={() => navigate('/minutes')}>
                    View MoM
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
