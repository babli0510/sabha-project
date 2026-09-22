import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { StatusBadge } from '../components/StatusBadge';
import {
  Radio,
  Camera,
  Cpu,
  Users,
  Brain,
  Square,
  Sparkles,
  Volume2,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const LiveMeetingPage = () => {
  const navigate = useNavigate();

  // Live timer counter
  const [seconds, setSeconds] = useState(1485); // start at ~24 mins 45 secs
  const [botStatusIndex, setBotStatusIndex] = useState(2); // 'Participant Detected'

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    const statusCycle = setInterval(() => {
      setBotStatusIndex((prev) => (prev + 1) % 5);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(statusCycle);
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const botStatuses = [
    { label: 'Ready', bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200' },
    { label: 'Scanning', bg: 'bg-cyan-500/10 text-cyan-600 border-cyan-200' },
    { label: 'Participant Detected', bg: 'bg-indigo-500/10 text-indigo-600 border-indigo-200' },
    { label: 'Capturing', bg: 'bg-rose-500/10 text-rose-600 border-rose-200' },
    { label: 'Processing', bg: 'bg-violet-500/10 text-violet-600 border-violet-200' }
  ];

  const currentBotStatus = botStatuses[botStatusIndex];

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-rose-500 pulse-live" />
          <div>
            <span className="text-xs text-rose-600 font-bold uppercase tracking-wider">LIVE BOARDROOM SESSION</span>
            <h2 className="text-xl font-bold text-slate-900">Live Product Design & Glassmorphism UX Sprint</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono text-xs">
            <Clock className="w-4 h-4 text-[#00C2FF]" />
            <span>ELAPSED: {formatTime(seconds)}</span>
          </div>

          <Button variant="danger" size="sm" icon={Square} onClick={() => navigate('/minutes')}>
            End Meeting
          </Button>
        </div>
      </div>

      {/* Main Live Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 cols): Camera / Visual Viewport */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel p-4 rounded-3xl bg-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
            {/* Viewport Header Controls */}
            <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#00C2FF]" />
                <span className="font-mono text-cyan-400">ESP32_OPTICAL_CAM_01</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400">1080p @ 60fps</span>
              </div>

              {/* Bot Status Indicators */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400 font-mono uppercase">Photography Bot:</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${currentBotStatus.bg}`}>
                  ● {currentBotStatus.label}
                </span>
              </div>
            </div>

            {/* Video / Visual Simulation Area */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-800 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1542744836-561432865532?auto=format&fit=crop&w=1200&q=80"
                alt="Live Camera View"
                className="w-full h-full object-cover opacity-85"
              />

              {/* Laser Scanner Line */}
              <div className="hud-scanner" />

              {/* Simulated Detection Bounding Box Overlays */}
              <div className="absolute top-1/4 left-1/3 w-40 h-44 border-2 border-[#00C2FF] rounded-lg bg-[#00C2FF]/10 p-2 pointer-events-none animate-pulse">
                <span className="text-[9px] font-mono font-bold text-[#00C2FF] bg-slate-950/90 px-1.5 py-0.5 rounded">
                  Dr. Vance [Speaker] 0.98
                </span>
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#00C2FF]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#00C2FF]" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#00C2FF]" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#00C2FF]" />
              </div>

              <div className="absolute top-1/3 right-1/4 w-32 h-36 border border-emerald-400 rounded-lg bg-emerald-400/10 p-2 pointer-events-none">
                <span className="text-[9px] font-mono text-emerald-400 bg-slate-950/90 px-1.5 py-0.5 rounded">
                  Marcus C. 0.95
                </span>
              </div>

              {/* Telemetry Corner Badges */}
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[10px] font-mono text-slate-300 space-x-3">
                <span>Pan: 45.2°</span>
                <span>Tilt: 12.0°</span>
                <span>Zoom: 1.8x</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[10px] font-mono text-cyan-400">
                AI DIARIZATION: ACTIVE (38ms)
              </div>
            </div>

            {/* Hardware Status Row */}
            <div className="grid grid-cols-4 gap-2 mt-4 text-[11px] font-mono">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-slate-500 block text-[9px]">ESP32 CAMERA</span>
                <span className="text-emerald-400 font-bold">CONNECTED</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-slate-500 block text-[9px]">SERVO MOTORS</span>
                <span className="text-emerald-400 font-bold">READY (0.1°)</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-slate-500 block text-[9px]">DETECTION MODE</span>
                <span className="text-[#00C2FF] font-bold">INTELLIGENT</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-slate-500 block text-[9px]">MIC ARRAY</span>
                <span className="text-emerald-400 font-bold">ACTIVE (4 CH)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (1 col): Live Intelligence Panel */}
        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#2E5BFF]" />
                Live Intelligence
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#2E5BFF]/10 text-[#2E5BFF] text-[10px] font-bold">
                STREAMING
              </span>
            </div>

            {/* Current Active Speaker */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2E5BFF]/10 to-[#00C2FF]/10 border border-[#2E5BFF]/30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E5BFF] block mb-1">
                Current Speaker
              </span>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Elena Vance"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#2E5BFF]"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dr. Elena Vance</h4>
                  <p className="text-xs text-slate-500">Executive Chair (34% Talk Time)</p>
                </div>
              </div>
            </div>

            {/* Recent Live Discussion Stream */}
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-2">Real-time Transcript Stream</span>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {[
                  { time: '14:24:10', name: 'Dr. Elena Vance', text: 'We should ensure the optical camera zoom triggers specifically during voting motions.' },
                  { time: '14:23:45', name: 'Marcus Chen', text: 'Servo angles recalibrate every 500ms when participant detection detects gesture movement.' },
                  { time: '14:22:30', name: 'Sophia Reynolds', text: 'The glassmorphism card elevation looks crisp in the executive view.' }
                ].map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="font-bold text-slate-700">{item.name}</span>
                      <span>{item.time}</span>
                    </div>
                    <p className="text-slate-600 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time AI Insight Key Takeaway */}
            <div className="p-3 rounded-xl bg-violet-50 border border-violet-200 text-xs text-violet-900">
              <span className="font-bold block mb-1">AI Live Key Takeaway:</span>
              Board members agreed on autonomous optical zoom triggers for active voting gestures.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
