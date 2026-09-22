import React from 'react';

export const PageHeader = ({
  title,
  subtitle,
  breadcrumb = 'Boardroom Intelligence',
  actions,
  badge
}) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E5BFF] mb-1">
          <span>{breadcrumb}</span>
          {badge && <span className="px-2 py-0.5 rounded-full bg-[#2E5BFF]/10 text-[#2E5BFF] text-[10px]">{badge}</span>}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 font-display">
          {title}
        </h1>
        {subtitle && <p className="mt-1 text-sm text-slate-500 max-w-2xl">{subtitle}</p>}
      </div>

      {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
    </div>
  );
};
