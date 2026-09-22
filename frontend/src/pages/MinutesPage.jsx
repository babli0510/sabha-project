import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { mockMomDetail } from '../data/mockData';
import {
  FileText,
  Download,
  Share2,
  RefreshCw,
  Edit3,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  Camera,
  CheckSquare
} from 'lucide-react';

export const MinutesPage = () => {
  const mom = mockMomDetail;

  const handleExport = () => {
    alert('Exporting executive Minutes of Meeting PDF template...');
  };

  const handleShare = () => {
    alert('Shareable encrypted link copied to clipboard!');
  };

  const handleRegenerate = () => {
    alert('SABHA Multi-Agent LLM regenerating summary sections...');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <PageHeader
        title="Minutes of Meeting (MoM)"
        subtitle="AI-generated executive documentation structured automatically from live audio transcripts and optical camera events."
        breadcrumb="Meeting Intelligence Document"
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" icon={Edit3}>
              Edit Document
            </Button>
            <Button variant="outline" size="sm" icon={RefreshCw} onClick={handleRegenerate}>
              Regenerate
            </Button>
            <Button variant="outline" size="sm" icon={Share2} onClick={handleShare}>
              Share
            </Button>
            <Button variant="glow" size="sm" icon={Download} onClick={handleExport}>
              Export PDF
            </Button>
          </div>
        }
      />

      {/* Document Sheet Container */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl space-y-10">
        {/* Document Title & Meta Header */}
        <div className="border-b border-slate-200 pb-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E5BFF]/10 text-[#2E5BFF] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              SABHA AI Executive Briefing
            </div>
            <span className="text-xs font-mono text-slate-400">DOC-ID: {mom.meetingId}</span>
          </div>

          <h1 className="text-3xl font-black text-slate-900 font-display">{mom.title}</h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block mb-1 font-medium">DATE & TIME</span>
              <span className="font-bold text-slate-900">{mom.date}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 font-medium">LOCATION</span>
              <span className="font-bold text-slate-900">{mom.location}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 font-medium">CHAIRPERSON</span>
              <span className="font-bold text-[#2E5BFF]">{mom.chairperson}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 font-medium">AI SCRIBE</span>
              <span className="font-bold text-[#00C2FF]">{mom.scribe}</span>
            </div>
          </div>
        </div>

        {/* Section 1: Meeting Overview */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#2E5BFF]" />
            1. Executive Overview
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
            {mom.overview}
          </p>
        </section>

        {/* Section 2: Participants */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <Users className="w-5 h-5 text-[#2E5BFF]" />
            2. Boardroom Attendees
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mom.attendees.map((a, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{a.name}</span>
                  <span className="text-slate-500 text-[11px]">{a.role}</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-[10px]">
                  PRESENT
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Discussion Summary */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#7B61FF]" />
            3. Detailed Discussion Breakdown
          </h2>
          <div className="space-y-3">
            {mom.discussionSummary.map((d, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs">
                <h3 className="font-bold text-slate-900 text-sm">{d.topic}</h3>
                <p className="text-slate-600 leading-relaxed">{d.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Who Spoke (Diarization Metrics) */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#00C2FF]" />
            4. Speaker Diarization Attribution (Who Spoke)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mom.whoSpoke.map((ws, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{ws.speaker}</span>
                  <span className="font-mono text-[#2E5BFF] font-bold">{ws.timeSpent} ({ws.percentage}%)</span>
                </div>
                <p className="text-slate-500 text-[11px]">Primary Topic: {ws.keyTopic}</p>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2E5BFF] to-[#00C2FF]"
                    style={{ width: `${ws.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Key Decisions */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            5. Key Decisions Recorded
          </h2>
          <ul className="space-y-2">
            {mom.keyDecisions.map((kd, i) => (
              <li key={i} className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-200 text-xs font-semibold text-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{kd}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 6: Responsibilities & Action Items */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-amber-500" />
            6. Responsibilities & Action Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mom.actionItems.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-amber-500/5 border border-amber-200/80 space-y-2 text-xs">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-700">
                  {item.status}
                </span>
                <h4 className="font-bold text-slate-900">{item.task}</h4>
                <div className="pt-2 border-t border-amber-200/60 text-[11px] text-slate-600 space-y-1">
                  <p><span className="text-slate-400">Assigned to:</span> {item.assignee}</p>
                  <p><span className="text-slate-400">Deadline:</span> {item.deadline}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Important Visual Events */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#2E5BFF]" />
            7. Important Visual Events (Camera Bot Capture)
          </h2>
          <div className="space-y-2">
            {mom.visualEvents.map((ve, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[#2E5BFF] font-bold">{ve.timestamp}</span>
                  <span className="text-slate-700">{ve.description}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-semibold">
                  {ve.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Final AI Executive Summary */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2E5BFF]/10 via-[#7B61FF]/10 to-[#00C2FF]/10 border border-[#2E5BFF]/30 space-y-2 text-xs">
          <h3 className="font-bold text-[#2E5BFF] text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            AI Executive Summary
          </h3>
          <p className="text-slate-800 leading-relaxed font-medium">
            {mom.aiSummary}
          </p>
        </div>
      </div>
    </div>
  );
};
