import React, { useState } from 'react';
import { useMeeting } from '../context/MeetingContext';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { StatusBadge } from '../components/StatusBadge';
import { CheckSquare, Search, Filter, Calendar, User, Clock, CheckCircle2 } from 'lucide-react';

export const ActionItemsPage = () => {
  const { actionItems, toggleActionItemStatus } = useMeeting();
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = actionItems.filter((item) => {
    const matchesFilter =
      filter === 'ALL'
        ? true
        : filter === 'PENDING'
        ? item.status === 'PENDING'
        : filter === 'IN_PROGRESS'
        ? item.status === 'IN_PROGRESS'
        : filter === 'COMPLETED'
        ? item.status === 'COMPLETED'
        : true;

    const matchesSearch =
      item.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meetingTitle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Boardroom Action Items & Commitments"
        subtitle="Track assigned responsibilities, execution deadlines, and task completion velocity across meetings."
        breadcrumb="Execution Tracker"
      />

      {/* Filter Tabs & Search */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {['ALL', 'PENDING', 'IN_PROGRESS', 'COMPLETED'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                filter === tab
                  ? 'bg-[#2E5BFF] text-white shadow-md shadow-[#2E5BFF]/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab === 'ALL'
                ? 'All Tasks'
                : tab === 'IN_PROGRESS'
                ? 'In Progress'
                : tab === 'PENDING'
                ? 'Pending'
                : 'Completed'}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks, assignees, or meetings..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 transition-all"
          />
        </div>
      </div>

      {/* Action Items List */}
      <div className="space-y-4">
        {filteredItems.map((item) => {
          const isCompleted = item.status === 'COMPLETED';
          return (
            <Card
              key={item.id}
              className={`p-5 transition-all ${
                isCompleted ? 'bg-slate-50/70 border-slate-200/60 opacity-80' : 'bg-white'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => toggleActionItemStatus(item.id)}
                    className="mt-1 w-5 h-5 rounded text-[#2E5BFF] focus:ring-[#2E5BFF] cursor-pointer"
                  />

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={item.priority} />
                      <StatusBadge status={item.status} />
                    </div>

                    <h3
                      className={`text-base font-bold ${
                        isCompleted ? 'line-through text-slate-500' : 'text-slate-900'
                      }`}
                    >
                      {item.task}
                    </h3>

                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#2E5BFF]" />
                      Meeting: {item.meetingTitle}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 space-y-1 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 text-xs">
                  <div className="flex sm:justify-end items-center gap-1.5 font-bold text-slate-900">
                    <User className="w-3.5 h-3.5 text-[#2E5BFF]" />
                    {item.assignee} ({item.role})
                  </div>
                  <div className="flex sm:justify-end items-center gap-1 text-rose-600 font-mono font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    Due {item.dueDate}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
