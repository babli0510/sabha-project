import React from 'react';
import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-[#FAFCFF] text-slate-900 selection:bg-[#00C2FF] selection:text-white">
      <Outlet />
    </div>
  );
};
