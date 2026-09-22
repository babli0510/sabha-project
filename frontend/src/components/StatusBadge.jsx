import React from 'react';

export const StatusBadge = ({ status, pulse = false, className = '' }) => {
  const normalized = (status || '').toUpperCase();

  const statusConfig = {
    LIVE: { label: 'LIVE MEETING', bg: 'bg-rose-500/10 text-rose-600 border-rose-200', dot: 'bg-rose-500' },
    COMPLETED: { label: 'Completed', bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200', dot: 'bg-emerald-500' },
    UPCOMING: { label: 'Upcoming', bg: 'bg-blue-500/10 text-blue-600 border-blue-200', dot: 'bg-blue-500' },
    PROCESSING: { label: 'AI Processing', bg: 'bg-violet-500/10 text-violet-600 border-violet-200', dot: 'bg-violet-500' },
    SCANNING: { label: 'Bot Scanning', bg: 'bg-cyan-500/10 text-cyan-600 border-cyan-200', dot: 'bg-cyan-500' },
    READY: { label: 'Hardware Ready', bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200', dot: 'bg-emerald-500' },
    CONNECTED: { label: 'Connected', bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200', dot: 'bg-emerald-500' },
    PENDING: { label: 'Pending', bg: 'bg-amber-500/10 text-amber-600 border-amber-200', dot: 'bg-amber-500' },
    IN_PROGRESS: { label: 'In Progress', bg: 'bg-indigo-500/10 text-indigo-600 border-indigo-200', dot: 'bg-indigo-500' },
    HIGH: { label: 'High Priority', bg: 'bg-rose-500/10 text-rose-600 border-rose-200', dot: 'bg-rose-500' },
    MEDIUM: { label: 'Medium Priority', bg: 'bg-amber-500/10 text-amber-600 border-amber-200', dot: 'bg-amber-500' },
    LOW: { label: 'Low Priority', bg: 'bg-slate-500/10 text-slate-600 border-slate-200', dot: 'bg-slate-500' }
  };

  const config = statusConfig[normalized] || {
    label: status,
    bg: 'bg-slate-100 text-slate-700 border-slate-200',
    dot: 'bg-slate-400'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border ${config.bg} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${config.dot} ${pulse || normalized === 'LIVE' ? 'pulse-live' : ''}`} />
      {config.label}
    </span>
  );
};
