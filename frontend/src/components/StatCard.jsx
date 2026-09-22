import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const StatCard = ({ title, value, change, icon: Icon, color = 'blue', subtitle }) => {
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value) || value;
    if (typeof end !== 'number') {
      setDisplayVal(value);
      return;
    }
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setDisplayVal(start);
      if (start >= end) {
        setDisplayVal(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const colorStyles = {
    blue: {
      border: 'hover:border-[#2E5BFF]/50',
      iconBg: 'bg-[#2E5BFF]/10 text-[#2E5BFF]',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(46,91,255,0.15)]'
    },
    purple: {
      border: 'hover:border-[#7B61FF]/50',
      iconBg: 'bg-[#7B61FF]/10 text-[#7B61FF]',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(123,97,255,0.15)]'
    },
    cyan: {
      border: 'hover:border-[#00C2FF]/50',
      iconBg: 'bg-[#00C2FF]/10 text-[#00C2FF]',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(0,194,255,0.15)]'
    },
    emerald: {
      border: 'hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/10 text-emerald-600',
      glow: 'group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]'
    }
  }[color];

  return (
    <div className={`glass-card p-5 rounded-3xl border border-slate-200/80 group transition-all duration-300 relative overflow-hidden ${colorStyles.border} ${colorStyles.glow}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</span>
        <div className={`p-2.5 rounded-2xl ${colorStyles.iconBg} transition-transform group-hover:scale-110`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {displayVal}
        </div>
        {change && (
          <div className="flex items-center gap-0.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <ArrowUpRight className="w-3 h-3" />
            <span>{change}</span>
          </div>
        )}
      </div>

      {subtitle && (
        <p className="text-[11px] font-medium text-slate-400 mt-2 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#00C2FF]" />
          {subtitle}
        </p>
      )}
    </div>
  );
};
