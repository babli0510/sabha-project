import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverable = true,
  glass = true,
  dark = false,
  padding = 'p-6',
  onClick,
  ...props
}) => {
  const baseCard = dark
    ? 'glass-panel-dark text-white rounded-2xl border border-slate-700/50'
    : glass
    ? 'glass-card rounded-2xl'
    : 'bg-white rounded-2xl border border-slate-200/80 shadow-sm';

  const hoverStyle = hoverable ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseCard} ${padding} ${hoverStyle} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};
