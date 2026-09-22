import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'glow', 'cyan', 'outline', 'ghost', 'danger'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none rounded-xl disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5 font-semibold'
  };

  const variants = {
    primary: 'bg-[#2E5BFF] hover:bg-[#1E46E6] text-white shadow-md shadow-[#2E5BFF]/20 hover:shadow-lg hover:shadow-[#2E5BFF]/30 active:scale-[0.98]',
    glow: 'btn-glow text-white active:scale-[0.98]',
    cyan: 'btn-cyan text-white active:scale-[0.98]',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 active:scale-[0.98]',
    outline: 'bg-transparent border border-slate-300 hover:border-[#2E5BFF] text-slate-700 hover:text-[#2E5BFF] active:scale-[0.98]',
    ghost: 'bg-transparent hover:bg-slate-100/80 text-slate-600 hover:text-slate-900',
    danger: 'bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-500/20 active:scale-[0.98]'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      {children}
    </button>
  );
};
