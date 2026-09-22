import React, { useState } from 'react';
import { FileText, Sparkles, CheckCircle2, Copy, Download, Share2, Users, Calendar, ShieldCheck } from 'lucide-react';

export const MoMPage = () => {
  const [copied, setCopied] = useState(false);

  const momData = {
    meetingId: "M-101",
    title: "Q4 Enterprise Strategy & Board Alignment",
    date: "2026-09-22",
    time: "14:00 - 15:30 PST",
    attendees: [
      { name: "Dr. Elena Vance", role: "CEO" },
      { name: "Marcus Chen", role: "CTO" },
      { name: "Sophia Reynolds", role: "VP Product" },
      { name: "David Kim", role: "Lead UX" }
    ],
    executiveSummary: "The executive board met to evaluate infrastructure scaling for the SABHA platform, approve the $2.4M autonomous camera drone fleet deployment, and standardize zero-trust AES-256 transcript encryption across all corporate suites.",
    keyDecisions: [
      "Unanimously approved $2.4M budget for autonomous camera fleet.",
      "Established < 40ms SLA for real-time neural voice diarization.",
      "Enforced mandatory 24-hour SLA on AI-extracted action items."
    ],
    actionItems: [
      { task: "Deploy SABHA-Whisper-V4 diarization pipeline to edge clusters", assignee: "Marcus Chen", due: "2026-09-25", priority: "HIGH" },
      { task: "Finalize Q4 visual PDF export templates for board members", assignee: "Sophia Reynolds", due: "2026-09-28", priority: "MEDIUM" },
      { task: "Conduct zero-trust security audit on meeting audio transcripts", assignee: "Dr. Elena Vance", due: "2026-10-02", priority: "HIGH" }
    ],
    sentimentAnalysis: {
      overall: "Highly Decisive / Forward-Looking",
      collaborativeScore: "96%",
      engagementIndex: "92%"
    }
  };

  const handleCopy = () => {
    const formatted = `SABHA MINUTES OF MEETING (MoM)\n${momData.title}\nDate: ${momData.date}\nSummary: ${momData.executiveSummary}\nKey Decisions:\n${momData.keyDecisions.map(d => `- ${d}`).join('\n')}`;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="glass-panel p-5 rounded-3xl border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#2E5BFF]/10 text-[#2E5BFF]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold text-lg text-slate-900">
                AI Minutes of Meeting (MoM) Hub
              </h2>
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                CONFIDENCE: 99.4%
              </span>
            </div>
            <p className="text-xs text-slate-500">Auto-synthesized executive summary and structured action points.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-2xs"
          >
            <Copy className="w-4 h-4 text-[#2E5BFF]" />
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="btn-glow px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Export Formal MoM</span>
          </button>
        </div>
      </div>

      {/* Main Document Layout */}
      <div className="glass-card p-8 rounded-3xl border border-slate-200/80 space-y-8 max-w-4xl mx-auto shadow-xl">
        {/* Document Header */}
        <div className="border-b border-slate-200 pb-6 flex items-start justify-between">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E5BFF] bg-[#2E5BFF]/10 px-3 py-1 rounded-full">
              SABHA EXECUTIVE MINUTES
            </span>
            <h1 className="text-2xl font-black text-slate-900 mt-3">
              {momData.title}
            </h1>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{momData.date} ({momData.time})</span>
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900 text-white text-right font-mono text-xs shadow-md">
            <div className="text-[10px] text-slate-400">MEETING REF</div>
            <div className="font-bold text-[#00C2FF]">{momData.meetingId}</div>
          </div>
        </div>

        {/* Attendees Pill List */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#7B61FF]" /> Boardroom Attendees & Diarized Roles
          </h3>
          <div className="flex flex-wrap gap-2">
            {momData.attendees.map((a, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E5BFF]" />
                <span>{a.name}</span>
                <span className="text-[10px] text-slate-500 font-medium">({a.role})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Executive Summary */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#2E5BFF] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> AI Executive Summary
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {momData.executiveSummary}
          </p>
        </div>

        {/* Key Decisions Taken */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Formal Consensus & Key Decisions
          </h3>
          <div className="space-y-2">
            {momData.keyDecisions.map((dec, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 flex items-start gap-3 shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{dec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extracted Action Items */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7B61FF] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Action Items & Task Assignment
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-100 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th className="p-3">Task Commitment</th>
                  <th className="p-3">Assignee</th>
                  <th className="p-3">Due Date</th>
                  <th className="p-3">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {momData.actionItems.map((act, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{act.task}</td>
                    <td className="p-3 font-medium text-[#2E5BFF]">{act.assignee}</td>
                    <td className="p-3 text-slate-500 font-mono">{act.due}</td>
                    <td className="p-3 font-bold text-rose-600">{act.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
