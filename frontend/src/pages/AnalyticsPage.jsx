import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { mockAnalytics } from '../data/mockData';
import { BarChart3, TrendingUp, Users, CheckCircle2, Clock, Brain } from 'lucide-react';

export const AnalyticsPage = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Boardroom Analytics & Diarization Insights"
        subtitle="Analytical breakdown of boardroom productivity, participation distribution, and decision velocity."
        breadcrumb="Executive Analytics"
      />

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Total Meetings</span>
            <BarChart3 className="w-4 h-4 text-[#2E5BFF]" />
          </div>
          <p className="text-3xl font-black text-slate-900 font-display">142</p>
          <span className="text-[10px] text-emerald-600 font-semibold">↑ +18% from last quarter</span>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Avg Meeting Length</span>
            <Clock className="w-4 h-4 text-[#7B61FF]" />
          </div>
          <p className="text-3xl font-black text-slate-900 font-display">58m</p>
          <span className="text-[10px] text-emerald-600 font-semibold">↓ -12m efficiency gain</span>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Action Completion</span>
            <CheckCircle2 className="w-4 h-4 text-[#00C2FF]" />
          </div>
          <p className="text-3xl font-black text-slate-900 font-display">86%</p>
          <span className="text-[10px] text-emerald-600 font-semibold">388 tasks tracked</span>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Diarization Accuracy</span>
            <Brain className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-3xl font-black text-slate-900 font-display">99.4%</p>
          <span className="text-[10px] text-slate-400 font-semibold">Sub-50ms window</span>
        </Card>
      </div>

      {/* Analytics Visualization Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Meetings & Decisions Over Time */}
        <Card className="p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#2E5BFF]" />
            Meetings & Decisions Velocity
          </h3>
          <div className="space-y-4 pt-2">
            {mockAnalytics.meetingsOverTime.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">{item.month}</span>
                  <span className="font-mono text-slate-500">
                    {item.meetings} Meetings | {item.decisions} Decisions
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 flex overflow-hidden">
                  <div
                    className="h-full bg-[#2E5BFF]"
                    style={{ width: `${(item.meetings / 50) * 100}%` }}
                  />
                  <div
                    className="h-full bg-[#00C2FF]"
                    style={{ width: `${(item.decisions / 50) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Speaking Distribution Breakdown */}
        <Card className="p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#7B61FF]" />
            Boardroom Speaking Share (%)
          </h3>
          <div className="space-y-4 pt-2">
            {mockAnalytics.speakingDistribution.map((spk, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{spk.name}</span>
                  <span className="font-mono font-bold text-[#2E5BFF]">{spk.value}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${spk.value}%`, backgroundColor: spk.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
