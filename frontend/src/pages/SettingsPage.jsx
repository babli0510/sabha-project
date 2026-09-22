import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { User, Bell, Camera, Cpu, Shield, Sliders, Check } from 'lucide-react';

export const SettingsPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('PROFILE');

  const [toggles, setToggles] = useState({
    autoCapturePhotos: true,
    speakerDiarization: true,
    ragMemoryIndexing: true,
    emailNotifications: true,
    servoPanLimits: true,
    encryptedPdfExports: true
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <PageHeader
        title="System Settings & Hardware Preferences"
        subtitle="Manage executive account credentials, AI diarization models, and ESP32 camera bot parameters."
        breadcrumb="System Control"
      />

      {/* Tabs Row */}
      <div className="glass-panel p-2 rounded-2xl flex items-center gap-1 overflow-x-auto">
        {[
          { key: 'PROFILE', label: 'Profile & Account', icon: User },
          { key: 'AI', label: 'AI & Diarization', icon: Cpu },
          { key: 'CAMERA', label: 'Camera & Servos', icon: Camera },
          { key: 'NOTIFICATIONS', label: 'Notifications', icon: Bell }
        ].map((tab) => {
          const IconComp = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab.key
                  ? 'bg-[#2E5BFF] text-white shadow-md shadow-[#2E5BFF]/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <IconComp className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'PROFILE' && (
        <Card className="p-6 space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Profile Settings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                defaultValue={user?.name || 'Dr. Elena Vance'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 font-semibold"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                defaultValue={user?.email || 'elena@sabha.ai'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 font-semibold"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Role & Designation</label>
              <input
                type="text"
                defaultValue={user?.role || 'Executive Chair'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Department</label>
              <input
                type="text"
                defaultValue="Board of Directors / AI Engineering"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
              />
            </div>
          </div>
          <Button variant="glow" size="sm">
            Save Profile Changes
          </Button>
        </Card>
      )}

      {activeTab === 'AI' && (
        <Card className="p-6 space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            AI Engine & Diarization Configuration
          </h3>
          <div className="space-y-4">
            {[
              {
                key: 'speakerDiarization',
                title: 'Real-time Speaker Diarization',
                desc: 'Attribute spoken segments to participants with sub-50ms window latency.'
              },
              {
                key: 'ragMemoryIndexing',
                title: 'Automatic Vector RAG Indexing',
                desc: 'Index transcripts into persistent memory store immediately after meeting completion.'
              },
              {
                key: 'encryptedPdfExports',
                title: 'Encrypted MoM PDF Signatures',
                desc: 'Apply cryptographic seal to generated Minutes of Meeting PDFs.'
              }
            ].map((setting) => (
              <div
                key={setting.key}
                onClick={() => handleToggle(setting.key)}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between cursor-pointer hover:bg-white transition-colors"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{setting.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{setting.desc}</p>
                </div>
                <div
                  className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 ${
                    toggles[setting.key] ? 'bg-[#2E5BFF]' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      toggles[setting.key] ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'CAMERA' && (
        <Card className="p-6 space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            ESP32 Photography Bot Hardware Preferences
          </h3>
          <div className="space-y-4">
            {[
              {
                key: 'autoCapturePhotos',
                title: 'Autonomous Gesture Trigger Photo Capture',
                desc: 'Trigger camera capture when participant detection signals active debate or voting motions.'
              },
              {
                key: 'servoPanLimits',
                title: 'Dual-Axis Servo Soft Angle Limiting',
                desc: 'Restrict pan angles to 180° boardroom radius to prevent physical obstruction.'
              }
            ].map((setting) => (
              <div
                key={setting.key}
                onClick={() => handleToggle(setting.key)}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between cursor-pointer hover:bg-white transition-colors"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{setting.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{setting.desc}</p>
                </div>
                <div
                  className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 ${
                    toggles[setting.key] ? 'bg-[#2E5BFF]' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      toggles[setting.key] ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'NOTIFICATIONS' && (
        <Card className="p-6 space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Boardroom Alerts & Digest
          </h3>
          <div className="space-y-4">
            <div
              onClick={() => handleToggle('emailNotifications')}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between cursor-pointer hover:bg-white transition-colors"
            >
              <div>
                <h4 className="text-xs font-bold text-slate-900">Email MoM Summary Digest</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Receive structured PDF summary via email immediately after meeting end.</p>
              </div>
              <div
                className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 ${
                  toggles.emailNotifications ? 'bg-[#2E5BFF]' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    toggles.emailNotifications ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
