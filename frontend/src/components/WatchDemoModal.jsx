import React from 'react';
import { X, Play, Shield, Sparkles, CheckCircle2, Radio } from 'lucide-react';
import { AudioWaveform } from './AudioWaveform';

export const WatchDemoModal = ({ isOpen, onClose, onEnterBoardroom }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2E5BFF] via-[#7B61FF] to-[#00C2FF] flex items-center justify-center font-black text-white text-lg">
              S
            </div>
            <div>
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                SABHA Cinematic Boardroom Demo
                <span className="text-[10px] bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                  SIMULATED STREAM
                </span>
              </h3>
              <p className="text-xs text-slate-400">Autonomous MoM Synthesis & Photography Bot Telemetry</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Screen Body */}
        <div className="relative aspect-video bg-slate-950 flex flex-col justify-between p-6 overflow-hidden">
          {/* Background Grid & Scanline */}
          <div className="hud-line" />
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
            alt="Boardroom"
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />

          {/* Top HUD overlay */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#2E5BFF]/30 border border-[#2E5BFF]/60 rounded-full text-xs font-mono text-[#00C2FF] flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#00C2FF]" />
                CAMERA PATROL: CAM-01 [ACTIVE]
              </span>
              <span className="text-xs text-slate-400 font-mono">DIARIZATION: WHISPER-V4</span>
            </div>
            <AudioWaveform isLive={true} />
          </div>

          {/* Center Target Box Simulation */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            <div className="w-48 h-48 border-2 border-dashed border-[#00C2FF]/60 rounded-2xl relative flex flex-col justify-between p-2 animate-pulse">
              <div className="flex justify-between text-[10px] text-[#00C2FF] font-mono">
                <span>[FACE-01 DETECTED]</span>
                <span>99.4%</span>
              </div>
              <div className="text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur py-1 px-2 rounded border border-slate-700">
                Dr. Elena Vance (CEO)
              </div>
            </div>
            <div className="mt-4 max-w-lg bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 text-xs text-slate-300">
              <strong className="text-[#00C2FF]">Live Transcript AI: </strong>
              "We have approved the $2.4M drone camera expansion for all executive conference rooms."
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>MoM Action Items Extracted Automatically (3 Tasks Pending)</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onEnterBoardroom();
              }}
              className="btn-glow px-6 py-2.5 rounded-xl font-bold text-sm text-white flex items-center gap-2 shadow-lg"
            >
              <span>Enter Full Interactive Boardroom</span>
              <Play className="w-4 h-4 fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
