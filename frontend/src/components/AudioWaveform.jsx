import React, { useEffect, useState } from 'react';

export const AudioWaveform = ({ isLive = true }) => {
  const [bars, setBars] = useState([20, 45, 70, 30, 85, 60, 40, 95, 50, 75, 30, 65, 80, 45, 90, 35, 70, 25, 60, 80]);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 75) + 20));
    }, 120);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="flex items-center gap-1 h-10 px-3 bg-slate-900/90 rounded-xl border border-slate-700/50 backdrop-blur-md shadow-inner">
      {bars.map((height, idx) => (
        <div
          key={idx}
          className="w-1 rounded-full transition-all duration-150"
          style={{
            height: `${height}%`,
            background: idx % 3 === 0 
              ? '#00C2FF' 
              : idx % 2 === 0 
              ? '#2E5BFF' 
              : '#7B61FF',
            boxShadow: `0 0 8px ${idx % 3 === 0 ? 'rgba(0,194,255,0.6)' : 'rgba(46,91,255,0.6)'}`
          }}
        />
      ))}
    </div>
  );
};
