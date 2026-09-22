import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMeeting } from '../context/MeetingContext';
import { mockStats } from '../data/mockData';
import {
  Calendar,
  Radio,
  CheckSquare,
  Users,
  Brain,
  Plus,
  ArrowRight,
  Sparkles,
  Camera,
  FileText,
  Clock,
  ChevronRight,
  BarChart3
} from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { StatusBadge } from '../components/StatusBadge';

export const DashboardPage = () => {
  const { user } = useAuth();
  const { meetings, actionItems, toggleActionItemStatus } = useMeeting();
  const navigate = useNavigate();

  const activeMeeting = meetings.find((m) => m.status === 'LIVE') || meetings[1];
  const upcomingMeetings = meetings.filter((m) => m.status === 'UPCOMING');
  const recentMeetings = meetings.filter((m) => m.status === 'COMPLETED');
  const pendingActionItems = actionItems.filter((a) => a.status !== 'COMPLETED').slice(0, 4);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#2E5BFF] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Executive Suite</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            Good morning, {user?.name || 'Dr. Elena Vance'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Your meeting intelligence at a glance.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="cyan"
            size="md"
            icon={Radio}
            onClick={() => navigate('/live-meeting')}
          >
            Join Live Meeting
          </Button>
          <Button
            variant="glow"
            size="md"
            icon={Plus}
            onClick={() => navigate('/meetings/new')}
          >
            Start New Meeting
          </Button>
        </div>
      </div>

      {/* Active Meeting Highlight Banner */}
      {activeMeeting && (
        <Card className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-[#1E3A8A] text-white relative overflow-hidden border-none shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <StatusBadge status="LIVE" pulse />
                <span className="text-xs text-cyan-400 font-mono">ESP32 BOT CONNECTED</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display">{activeMeeting.title}</h2>
              <p className="text-xs text-slate-300 max-w-2xl">{activeMeeting.summary}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                <span>Location: {activeMeeting.location}</span>
                <span>•</span>
                <span>Attendees: {activeMeeting.attendees.length} Members</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="cyan"
                size="md"
                icon={ArrowRight}
                onClick={() => navigate('/live-meeting')}
              >
                Enter Live HUD Feed
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Meeting Intelligence Metrics */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#2E5BFF]" />
            Meeting Intelligence
          </h3>
          <span className="text-xs text-slate-400 font-medium">Real-time Metrics</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="p-4">
            <span className="text-xs font-semibold text-slate-500">Meetings Processed</span>
            <p className="text-2xl font-black text-slate-900 font-display mt-2">{mockStats.meetingsProcessed}</p>
            <span className="text-[10px] text-emerald-600 font-medium">↑ +14% this month</span>
          </Card>

          <Card className="p-4">
            <span className="text-xs font-semibold text-slate-500">Action Items</span>
            <p className="text-2xl font-black text-[#2E5BFF] font-display mt-2">{mockStats.actionItemsCaptured}</p>
            <span className="text-[10px] text-slate-400 font-medium">Auto-extracted</span>
          </Card>

          <Card className="p-4">
            <span className="text-xs font-semibold text-slate-500">Decisions Recorded</span>
            <p className="text-2xl font-black text-[#7B61FF] font-display mt-2">{mockStats.decisionsRecorded}</p>
            <span className="text-[10px] text-slate-400 font-medium">Indexed to RAG</span>
          </Card>

          <Card className="p-4">
            <span className="text-xs font-semibold text-slate-500">Active Board Members</span>
            <p className="text-2xl font-black text-slate-900 font-display mt-2">{mockStats.activeBoardMembers}</p>
            <span className="text-[10px] text-slate-400 font-medium">Diarization Profiled</span>
          </Card>

          <Card className="p-4 col-span-2 lg:col-span-1">
            <span className="text-xs font-semibold text-slate-500">Camera Detection</span>
            <p className="text-2xl font-black text-[#00C2FF] font-display mt-2">{mockStats.cameraAccuracyRate}</p>
            <span className="text-[10px] text-emerald-600 font-medium">Autonomous Accuracy</span>
          </Card>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 cols): Upcoming & Recent Meetings */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Meetings */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#2E5BFF]" />
                Upcoming Meetings
              </h3>
              <button
                onClick={() => navigate('/meetings')}
                className="text-xs font-bold text-[#2E5BFF] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {upcomingMeetings.map((m) => (
                <Card key={m.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={m.status} />
                      <span className="text-xs text-slate-400 font-mono">{m.time}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{m.summary}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/live-meeting')}
                    className="shrink-0"
                  >
                    Prepare Session
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Completed Meetings & MoM */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#7B61FF]" />
                Recent Minutes of Meeting (MoM)
              </h3>
              <button
                onClick={() => navigate('/minutes')}
                className="text-xs font-bold text-[#2E5BFF] hover:underline"
              >
                View MoMs
              </button>
            </div>

            <div className="space-y-4">
              {recentMeetings.map((m) => (
                <Card key={m.id} className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <StatusBadge status="COMPLETED" />
                    <span className="text-xs text-slate-400 font-mono">{m.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{m.title}</h4>
                  <p className="text-xs text-slate-600 mb-4">{m.summary}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium">
                      {m.actionItemsCount} Action Items • MoM Generated
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={ChevronRight}
                      onClick={() => navigate('/minutes')}
                    >
                      Open Document
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 col): Pending Action Items & Quick RAG Prompt */}
        <div className="space-y-8">
          {/* Pending Action Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-[#00C2FF]" />
                Pending Commitments
              </h3>
              <button
                onClick={() => navigate('/action-items')}
                className="text-xs font-bold text-[#2E5BFF] hover:underline"
              >
                View Board
              </button>
            </div>

            <Card className="p-5 space-y-3">
              {pendingActionItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={item.status === 'COMPLETED'}
                      onChange={() => toggleActionItemStatus(item.id)}
                      className="mt-0.5 w-4 h-4 rounded text-[#2E5BFF] focus:ring-[#2E5BFF]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-800 leading-snug">{item.task}</p>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                        <span>Assignee: {item.assignee}</span>
                        <span className="font-mono text-rose-600 font-semibold">Due {item.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>

          {/* Persistent Memory Quick Query Card */}
          <Card className="p-6 bg-gradient-to-br from-[#2E5BFF]/10 via-[#7B61FF]/10 to-[#00C2FF]/10 border border-[#2E5BFF]/20">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2E5BFF] mb-2">
              <Brain className="w-4 h-4" />
              <span>Ask Meeting Memory (RAG)</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">
              "What decisions were made about camera hardware?"
            </h4>
            <p className="text-xs text-slate-600 mb-4">
              Query past meeting transcripts and action item records instantly using AI search.
            </p>
            <Button
              variant="glow"
              size="sm"
              className="w-full"
              onClick={() => navigate('/memory')}
            >
              Ask SABHA AI
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
