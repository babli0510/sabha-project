import React from 'react';

export const FeatureCard = ({ title, description, icon: Icon, tag, gradient }) => {
  return (
    <div className="glass-card p-7 rounded-3xl border border-slate-200/90 relative overflow-hidden group hover:border-[#00C2FF]/60 transition-all duration-300">
      {/* Glow highlight spot */}
      <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

      <div className="flex items-center justify-between mb-5">
        <div className="p-3.5 rounded-2xl bg-slate-900 text-white shadow-md group-hover:scale-110 group-hover:bg-[#2E5BFF] transition-all duration-300">
          <Icon className="w-6 h-6 text-[#00C2FF] group-hover:text-white" />
        </div>
        {tag && (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-[#00C2FF]/10 group-hover:text-[#2E5BFF] group-hover:border-[#00C2FF]/30 transition-all">
            {tag}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#2E5BFF] transition-colors">
        {title}
      </h3>

      <p className="text-xs text-slate-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#2E5BFF] opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
        <span>Explore Capability</span>
        <span>→</span>
      </div>
    </div>
  );
};
