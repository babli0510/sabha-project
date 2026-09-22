import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle2, 
  Users, 
  Camera, 
  Calendar,
  Sparkles,
  PieChart as PieIcon
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { useMeeting } from '../context/MeetingContext';

export const ReportsPage = () => {
  const { meetings, actionItems } = useMeeting();
  const [downloading, setDownloading] = useState(false);

  // Chart seed data
  const trendData = [
    { month: 'May', count: 18, hours: 28 },
    { month: 'Jun', count: 24, hours: 36 },
    { month: 'Jul', count: 32, hours: 44 },
    { month: 'Aug', count: 29, hours: 40 },
    { month: 'Sep', count: 42, hours: 58 }
  ];

  const participationData = [
    { name: 'Dr. Elena Vance (CEO)', talkTime: 38 },
    { name: 'Marcus Chen (CTO)', talkTime: 27 },
    { name: 'Sophia Reynolds (VP Product)', talkTime: 22 },
    { name: 'David Kim (Lead UX)', talkTime: 13 }
  ];

  const taskData = [
    { name: 'Completed', value: actionItems.filter(a => a.status === 'COMPLETED').length, color: '#00C2FF' },
    { name: 'In Progress', value: actionItems.filter(a => a.status === 'IN_PROGRESS').length, color: '#7B61FF' },
    { name: 'Pending', value: actionItems.filter(a => a.status === 'PENDING').length, color: '#2E5BFF' }
  ];

  const handleExportPDF = () => {
    setDownloading(true);
    setTimeout(() => {
      window.print();
      setDownloading(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Printable / Screen Header */}
      <div className="glass-panel p-5 rounded-3xl border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#7B61FF]/10 text-[#7B61FF]">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
              SABHA Executive Board Intelligence Reports
              <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-0.5 rounded-full font-bold">
                Q4 BOARD AUDIT
              </span>
            </h2>
            <p className="text-xs text-slate-500">Automated meeting analytics, participation trends, and PDF export generator.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportPDF}
            disabled={downloading}
            className="btn-glow px-5 py-2.5 rounded-2xl text-xs font-bold text-white flex items-center gap-2 shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? 'Preparing PDF...' : 'Download PDF Board Report'}</span>
          </button>
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1: Meeting Trends Area Chart */}
        <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Meeting Trends & Boardroom Hours</h3>
              <p className="text-xs text-slate-500">Monthly volume of indexed boardroom sessions</p>
            </div>
            <span className="text-xs font-bold text-[#2E5BFF] bg-[#2E5BFF]/10 px-2.5 py-1 rounded-full">
              +44% Growth
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E5BFF" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#2E5BFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} />
                <Tooltip contentStyle={{ borderRadius: '16px', background: '#0F172A', color: '#FFF', border: 'none' }} />
                <Area type="monotone" dataKey="count" stroke="#2E5BFF" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Task Completion Pie */}
        <div className="glass-card p-6 rounded-3xl border border-slate-200/80 space-y-4">
          <div>
            <h3 className="font-bold text-sm text-slate-900">Task Velocity Breakdown</h3>
            <p className="text-xs text-slate-500">Action items status distribution</p>
          </div>

          <div className="h-48 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {taskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs font-semibold">
            {taskData.map((t, idx) => (
              <div key={idx} className="flex items-center justify-between text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: t.color }} />
                  {t.name}
                </span>
                <span className="font-bold">{t.value} Items</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Participation Breakdown Bar Chart */}
      <div className="glass-card p-6 rounded-3xl border border-slate-200/80 space-y-4">
        <h3 className="font-bold text-sm text-slate-900">Executive Speaker Talk-Time (%)</h3>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={participationData}>
              <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} />
              <YAxis stroke="#94A3B8" fontSize={11} />
              <Tooltip contentStyle={{ borderRadius: '12px', background: '#0F172A', color: '#FFF' }} />
              <Bar dataKey="talkTime" fill="#00C2FF" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Printable Board Meeting Breakdown Table */}
      <div className="glass-card p-6 rounded-3xl border border-slate-200/80 space-y-4">
        <h3 className="font-bold text-base text-slate-900">Board Meeting Summary Matrix</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-100 text-slate-500 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3.5">Meeting ID</th>
                <th className="p-3.5">Title</th>
                <th className="p-3.5">Date</th>
                <th className="p-3.5">Attendees</th>
                <th className="p-3.5">MoM Status</th>
                <th className="p-3.5">Action Items</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {meetings.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50">
                  <td className="p-3.5 font-mono font-bold text-[#2E5BFF]">{m.id}</td>
                  <td className="p-3.5 font-bold text-slate-900">{m.title}</td>
                  <td className="p-3.5 font-medium text-slate-500">{m.date}</td>
                  <td className="p-3.5 text-slate-600">{m.attendees.join(', ')}</td>
                  <td className="p-3.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                      GENERATED
                    </span>
                  </td>
                  <td className="p-3.5 font-bold text-slate-800">{m.actionItemsCount} Tasks</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
