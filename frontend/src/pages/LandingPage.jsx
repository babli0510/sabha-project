import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Camera,
  Users,
  FileText,
  Brain,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Play,
  Cpu,
  Radio
} from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleEnterBoardroom = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-slate-900 overflow-x-hidden selection:bg-[#00C2FF] selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-panel bg-white/80 border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2E5BFF] via-[#7B61FF] to-[#00C2FF] flex items-center justify-center text-white shadow-md shadow-[#2E5BFF]/30">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-wider text-slate-900 font-display">SABHA</span>
              <span className="ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#2E5BFF]/10 text-[#2E5BFF]">
                ENTERPRISE AI
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-[#2E5BFF] transition-colors">Features</a>
            <a href="#photography" className="hover:text-[#2E5BFF] transition-colors">Photography Bot</a>
            <a href="#minutes" className="hover:text-[#2E5BFF] transition-colors">AI MoM</a>
            <a href="#how-it-works" className="hover:text-[#2E5BFF] transition-colors">How It Works</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button variant="glow" size="sm" icon={ArrowRight} onClick={handleEnterBoardroom}>
              Enter the Boardroom
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#2E5BFF]/15 via-[#7B61FF]/10 to-[#00C2FF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#2E5BFF]/30 text-xs font-semibold text-[#2E5BFF] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Sparkles className="w-4 h-4 text-[#00C2FF]" />
            <span>Autonomous Boardroom Intelligence & AI Diarization</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 font-display mb-6 leading-tight">
            SABHA
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient-primary mb-6">
            Where Meetings Become Intelligent.
          </p>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            An AI-powered meeting intelligence platform that captures, understands and transforms conversations into meaningful outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="glow" size="lg" icon={ArrowRight} onClick={handleEnterBoardroom}>
              Enter the Boardroom
            </Button>
            <Button variant="outline" size="lg" icon={Play} onClick={() => navigate('/login')}>
              Explore Demo Workspace
            </Button>
          </div>

          {/* Interactive Digital Boardroom Visualization Canvas */}
          <div className="glass-panel p-4 md:p-8 rounded-3xl border border-white/80 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-rose-500 pulse-live" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Live Boardroom Stream — Digital Suite Alpha
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/30">
                <Cpu className="w-3.5 h-3.5" />
                <span>Camera Bot & Diarization Active</span>
              </div>
            </div>

            {/* Boardroom Layout Mock Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { name: 'Dr. Elena Vance', role: 'Executive Chair', speaking: true, angle: '0° Center', status: 'Speaking (34%)' },
                { name: 'Marcus Chen', role: 'CTO & Computer Vision', speaking: false, angle: '45° Pan', status: 'Detected' },
                { name: 'Sophia Reynolds', role: 'VP of Product', speaking: false, angle: '90° West', status: 'Detected' },
                { name: 'David Kim', role: 'Lead Architect', speaking: false, angle: '120° East', status: 'Detected' }
              ].map((p, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl transition-all duration-300 ${
                    p.speaking
                      ? 'bg-gradient-to-b from-[#2E5BFF]/10 to-[#00C2FF]/10 border-2 border-[#2E5BFF] shadow-lg shadow-[#2E5BFF]/20'
                      : 'bg-white/70 border border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Seat {idx + 1}</span>
                    {p.speaking && (
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-rose-500 text-white animate-pulse">
                        SPEAKING
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-slate-900">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.role}</p>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Cam: {p.angle}</span>
                    <span className="font-semibold text-[#2E5BFF]">{p.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live AI Processing Log Stream */}
            <div className="p-4 rounded-xl bg-slate-900 text-white text-xs font-mono text-left flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <span className="text-[#00C2FF] font-bold">[AI RAG Engine]</span>
                <span className="text-slate-300 truncate">
                  Attributing discussion turn: "Q4 enterprise camera bot deployment approved unanimously."
                </span>
              </div>
              <span className="text-[10px] text-slate-400 shrink-0 ml-2">Latency: 38ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section A: Intelligent Meetings */}
      <section id="features" className="py-20 px-6 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-4">
              Meetings Are No Longer Just Recorded. SABHA Understands Them.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              SABHA transforms ordinary unstructured meetings into organized digital knowledge, binding speech, visuals, and decisions into a permanent organizational memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-[#2E5BFF]/10 text-[#2E5BFF] flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Meeting Understanding</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Multi-agent LLM systems analyze conversation flow, extract core debate points, and synthesize concise executive takeaways automatically.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-[#7B61FF]/10 text-[#7B61FF] flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Speaker Attribution</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seating position data and audio diarization accurately attribute every transcript segment and key decision to the precise board participant.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Structured Minutes (MoM)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Generates instant, publication-ready Minutes of Meeting including Who Spoke, Decisions, Action Items, and Visual Capture timelines.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Section B: Autonomous Photography Bot */}
      <section id="photography" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/10 text-[#00C2FF] text-xs font-bold mb-4">
              <Camera className="w-3.5 h-3.5" />
              AUTONOMOUS COMPUTER VISION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-6 leading-tight">
              Autonomous Photography Bot
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              The Photography Bot intelligently captures relevant meeting moments using participant detection instead of random continuous photography.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Smart facial & gesture detection via dual-axis ESP32 servos',
                'Captures key visual events: presentations, debates, and formal votes',
                'Links timestamps directly to speaker transcripts',
                'Zero unnecessary clutter — only high-signal visual moments'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#2E5BFF] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="cyan" icon={ArrowRight} onClick={handleEnterBoardroom}>
              View Photography Bot UI
            </Button>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/80 shadow-xl bg-slate-900 text-white relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs font-mono text-cyan-400">CAMERA_FEED // ESP32-CAM-01</span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded">CONNECTED</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800 border border-slate-700 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Camera Feed"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="hud-scanner" />
              <div className="absolute top-4 left-4 border border-[#00C2FF] bg-[#00C2FF]/20 text-[#00C2FF] text-[10px] px-2 py-1 rounded">
                PARTICIPANT DETECTED [0.98]
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-300 bg-slate-950/80 px-2 py-1 rounded">
                Pan: 45° | Tilt: 12°
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section D: AI Minutes of Meeting Showcase */}
      <section id="minutes" className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            AI-Generated Minutes of Meeting (MoM)
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Comprehensive executive documentation structured automatically from live audio and camera feeds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel-dark p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-xs border-b border-slate-800 pb-6">
            <div>
              <span className="text-slate-400 block mb-1">WHO SPOKE</span>
              <span className="font-bold text-white">4 Attendees (100% Attributed)</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">DECISIONS RECORDED</span>
              <span className="font-bold text-[#00C2FF]">3 Unanimous Votes</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">ACTION ITEMS</span>
              <span className="font-bold text-amber-400">4 Assigned Tasks</span>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <span className="text-xs font-bold text-[#2E5BFF] uppercase tracking-wider block mb-2">Key Decisions</span>
              <p className="text-sm text-slate-200">
                • Approved immediate acquisition of 12 ESP32 Camera Bot units across all boardroom suites.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">Action Items</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700">
                  <p className="font-bold text-white">Deploy Diarization Pipeline</p>
                  <p className="text-slate-400 mt-1">Assigned to: Marcus Chen (CTO)</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700">
                  <p className="font-bold text-white">Finalize PDF Export Template</p>
                  <p className="text-slate-400 mt-1">Assigned to: Sophia Reynolds (VP Product)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section E: Persistent Meeting Memory / RAG */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B61FF]/10 text-[#7B61FF] text-xs font-bold mb-4">
            <Brain className="w-3.5 h-3.5" />
            ORGANIZATIONAL RAG MEMORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-4">
            Persistent Meeting Memory
          </h2>
          <p className="text-base text-slate-600 mb-10">
            Previous meetings become searchable organizational knowledge. Ask SABHA anything about past discussions, choices, or assigned commitments.
          </p>

          <div className="glass-panel p-6 rounded-2xl border border-slate-200 text-left bg-white/90 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 border border-slate-200 mb-4 text-xs font-medium text-slate-700">
              <Brain className="w-4 h-4 text-[#2E5BFF]" />
              <span>"What decisions were made regarding the AI Camera Bot in Q4?"</span>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#2E5BFF]/5 to-[#00C2FF]/5 border border-[#2E5BFF]/20 text-xs text-slate-800 leading-relaxed">
              <p className="font-bold text-[#2E5BFF] mb-1">SABHA AI Answer (98.5% Confidence):</p>
              <p>
                The board approved the procurement of 12 ESP32 dual-axis servo camera units and set active participant gesture detection mode with sub-50ms diarization attribution.
              </p>
              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500">
                <span>Source: Executive Strategy Meeting (Sept 22, 2026)</span>
                <span className="font-semibold text-[#00C2FF]">Cited Transcript #M-101</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section F: How SABHA Works */}
      <section id="how-it-works" className="py-20 px-6 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-4">
              How SABHA Works
            </h2>
            <p className="text-base text-slate-600">
              Four intelligent steps connecting physical boardroom dynamics to digital enterprise intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', step: 'Capture', desc: 'Camera bot & microphone array capture participant gestures and audio turns.' },
              { num: '02', step: 'Understand', desc: 'Computer vision & speaker diarization attribute topics to specific members.' },
              { num: '03', step: 'Organize', desc: 'Multi-agent AI generates structured Minutes of Meeting, decisions, and tasks.' },
              { num: '04', step: 'Remember', desc: 'Indexed into vector memory for instant conversational Q&A retrieval.' }
            ].map((s, idx) => (
              <Card key={idx} className="p-6 relative overflow-hidden">
                <span className="text-4xl font-black text-[#2E5BFF]/15 absolute top-4 right-4 font-display">
                  {s.num}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.step}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1E3A8A] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black font-display mb-6">
            Ready to Upgrade Your Boardroom?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Enter the SABHA AI boardroom environment and experience intelligent meeting assistance.
          </p>
          <Button variant="glow" size="lg" icon={ArrowRight} onClick={handleEnterBoardroom} className="text-base px-8 py-4">
            Enter the Boardroom
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white font-display">SABHA</span>
            <span>© 2026 AI Intelligent Meeting Assistance Platform</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Enterprise Privacy</span>
            <span>Security</span>
            <span>API Docs</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
