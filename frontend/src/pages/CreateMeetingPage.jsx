import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMeeting } from '../context/MeetingContext';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Camera, Users, Brain, Sparkles, Check, ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const CreateMeetingPage = () => {
  const navigate = useNavigate();
  const { addMeeting } = useMeeting();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '2026-09-25',
    time: '14:00 - 15:30 PST',
    location: 'Executive Digital Suite Alpha',
    meetingType: 'Executive Strategy',
    expectedDuration: '90',
    participants: 'Dr. Elena Vance, Marcus Chen, Sophia Reynolds, David Kim'
  });

  const [toggles, setToggles] = useState({
    enablePhotoBot: true,
    enableSpeakerAttribution: true,
    generateAiMinutes: true,
    saveMeetingMemory: true
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      id: `M-${Date.now()}`,
      title: formData.title || 'Untitled Boardroom Session',
      date: formData.date,
      time: formData.time,
      status: 'UPCOMING',
      attendees: formData.participants.split(',').map((p) => p.trim()),
      durationMinutes: parseInt(formData.expectedDuration) || 60,
      summary: formData.description || 'Configured with SABHA AI Diarization and Camera Bot telemetry.',
      momGenerated: false,
      actionItemsCount: 0,
      tags: [formData.meetingType.split(' ')[0], 'SABHA AI'],
      location: formData.location,
      meetingType: formData.meetingType
    };

    addMeeting(newMeeting);
    navigate('/meetings');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => navigate('/meetings')}>
          Back to Meetings
        </Button>
      </div>

      <PageHeader
        title="Schedule New Boardroom Session"
        subtitle="Configure meeting metadata, hardware photography bot settings, and AI diarization preferences."
        breadcrumb="Boardroom Setup"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            General Session Info
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Meeting Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Q4 Executive Product & Camera Bot Alignment"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 transition-all font-semibold"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Meeting Description / Context</label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Key goals, agenda topics, and intended outcomes..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Time & Timezone</label>
              <input
                type="text"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                placeholder="14:00 - 15:30 PST"
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Location / Room</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Executive Suite Alpha"
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Meeting Type</label>
              <select
                value={formData.meetingType}
                onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
              >
                <option value="Executive Strategy">Executive Strategy</option>
                <option value="Technical Review">Technical Review</option>
                <option value="Hardware Sync">Hardware Sync</option>
                <option value="Compliance Audit">Compliance Audit</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Participants (Comma Separated)</label>
              <input
                type="text"
                value={formData.participants}
                onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                placeholder="Dr. Elena Vance, Marcus Chen, Sophia Reynolds"
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
              />
            </div>
          </div>
        </Card>

        {/* AI & Autonomous Bot Settings */}
        <Card className="p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2E5BFF]" />
            AI & Hardware Bot Options
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                key: 'enablePhotoBot',
                title: 'Enable Photography Bot',
                desc: 'ESP32 camera tracking participant detection & optical zoom presets.',
                icon: Camera
              },
              {
                key: 'enableSpeakerAttribution',
                title: 'Enable Speaker Diarization',
                desc: 'Sub-50ms voice turn attribution bound to participant seating array.',
                icon: Users
              },
              {
                key: 'generateAiMinutes',
                title: 'Generate AI Minutes (MoM)',
                desc: 'Auto-compile decisions, responsibilities, and visual timeline.',
                icon: Brain
              },
              {
                key: 'saveMeetingMemory',
                title: 'Save Meeting Memory (RAG)',
                desc: 'Index transcript into searchable vector organizational memory.',
                icon: Sparkles
              }
            ].map((opt) => {
              const IconComp = opt.icon;
              const isChecked = toggles[opt.key];
              return (
                <div
                  key={opt.key}
                  onClick={() => handleToggle(opt.key)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-gradient-to-r from-[#2E5BFF]/10 to-[#00C2FF]/10 border-[#2E5BFF]/40 shadow-sm'
                      : 'bg-slate-50 border-slate-200/80 opacity-70'
                  }`}
                >
                  <div className={`p-2 rounded-xl text-white ${isChecked ? 'bg-[#2E5BFF]' : 'bg-slate-400'}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{opt.title}</span>
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] ${isChecked ? 'bg-[#2E5BFF]' : 'bg-slate-300'}`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">{opt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button variant="ghost" onClick={() => navigate('/meetings')}>
            Cancel
          </Button>
          <Button type="submit" variant="glow" size="lg">
            Create Meeting & Calibrate Bot
          </Button>
        </div>
      </form>
    </div>
  );
};
