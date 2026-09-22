import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { StatusBadge } from '../components/StatusBadge';
import { mockPhotos } from '../data/mockData';
import {
  Camera,
  Cpu,
  Sliders,
  Maximize2,
  RefreshCw,
  Clock,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';

export const PhotographyBotPage = () => {
  const [panAngle, setPanAngle] = useState(45);
  const [tiltAngle, setTiltAngle] = useState(12);
  const [activePhoto, setActivePhoto] = useState(mockPhotos[0]);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Autonomous Photography Bot"
        subtitle="An intelligent meeting camera system that captures meaningful moments based on participant detection instead of random continuous photography."
        breadcrumb="Hardware Telemetry"
        badge="ESP32 + CV"
      />

      {/* Hardware Telemetry Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <span className="text-xs font-semibold text-slate-500">Camera Status</span>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-bold text-slate-900">CONNECTED</p>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-live" />
          </div>
          <span className="text-[10px] text-slate-400 font-mono mt-1 block">ESP32-CAM 1080p @ 60FPS</span>
        </Card>

        <Card className="p-4">
          <span className="text-xs font-semibold text-slate-500">Dual Servo Motors</span>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-bold text-slate-900">READY</p>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] text-slate-400 font-mono mt-1 block">Pan: {panAngle}° | Tilt: {tiltAngle}°</span>
        </Card>

        <Card className="p-4">
          <span className="text-xs font-semibold text-slate-500">Participant Detection</span>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-bold text-[#2E5BFF]">ACTIVE</p>
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E5BFF] pulse-live" />
          </div>
          <span className="text-[10px] text-slate-400 font-mono mt-1 block">Bounding Box Precision 99.4%</span>
        </Card>

        <Card className="p-4">
          <span className="text-xs font-semibold text-slate-500">Capture Mode</span>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-bold text-[#00C2FF]">INTELLIGENT</p>
            <Sparkles className="w-4 h-4 text-[#00C2FF]" />
          </div>
          <span className="text-[10px] text-slate-400 font-mono mt-1 block">Gesture & Speaker Triggers</span>
        </Card>
      </div>

      {/* Main Hardware Viewport & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Viewport (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 bg-slate-950 text-white border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono">
                <Camera className="w-4 h-4 text-[#00C2FF]" />
                <span className="text-cyan-400">HARDWARE_PREVIEW // ESP32-DUAL-SERVO</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold font-mono">
                LIVE SERVO FEED
              </span>
            </div>

            {/* Video Viewport Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-800 flex items-center justify-center">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
              />

              <div className="hud-scanner" />

              {/* Angle HUD Readouts */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[10px] font-mono text-cyan-400">
                SERVO PAN: {panAngle}° | TILT: {tiltAngle}°
              </div>

              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[10px] font-mono text-emerald-400">
                CONFIDENCE: {(activePhoto.confidenceScore * 100).toFixed(1)}%
              </div>
            </div>

            {/* Servo Angle Manual Sliders */}
            <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-400">Pan Servo Angle:</span>
                  <span className="text-[#00C2FF] font-bold">{panAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="180"
                  value={panAngle}
                  onChange={(e) => setPanAngle(parseInt(e.target.value))}
                  className="w-full accent-[#00C2FF]"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-400">Tilt Servo Angle:</span>
                  <span className="text-[#00C2FF] font-bold">{tiltAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  value={tiltAngle}
                  onChange={(e) => setTiltAngle(parseInt(e.target.value))}
                  className="w-full accent-[#00C2FF]"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Capture Timeline & Selected Photo Info */}
        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Clock className="w-5 h-5 text-[#2E5BFF]" />
              Captured Moments Timeline
            </h3>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {mockPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setActivePhoto(photo)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                    activePhoto.id === photo.id
                      ? 'bg-gradient-to-r from-[#2E5BFF]/10 to-[#00C2FF]/10 border-[#2E5BFF]/40 shadow-sm'
                      : 'bg-slate-50 border-slate-200/80 hover:bg-white'
                  }`}
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
                      <span className="font-bold text-[#2E5BFF]">{photo.eventTag}</span>
                      <span>{photo.timestamp}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 truncate">{photo.title}</p>
                    <p className="text-[10px] text-slate-500 truncate">{photo.cameraAngle}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
