import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Sparkles, ArrowRight, Lock, Mail, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, quickDemoLogin } = useAuth();
  const [email, setEmail] = useState('elena@sabha.ai');
  const [password, setPassword] = useState('••••••••••••');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login({
        id: 'u-1',
        name: 'Dr. Elena Vance',
        email: email,
        role: 'Executive Chair',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80'
      });
      setLoading(false);
      navigate('/dashboard');
    }, 400);
  };

  const handleDemoLogin = (role) => {
    quickDemoLogin(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden glass-panel border border-white/80 shadow-2xl">
        {/* Left Side: Brand Visual Panel */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1E3A8A] text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C2FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2E5BFF] via-[#7B61FF] to-[#00C2FF] flex items-center justify-center text-white shadow-md shadow-[#2E5BFF]/30">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white font-display">SABHA</span>
            </div>

            <h2 className="text-3xl font-extrabold font-display mb-4 leading-tight">
              Enter the Digital Boardroom
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Log in to access real-time meeting intelligence, autonomous photography logs, speaker diarization, and persistent organizational RAG memory.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
                <span>Enterprise Encrypted Meeting Transcripts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sub-50ms Speaker Diarization Attribution</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700/60 mt-8">
            <p className="text-xs text-slate-400 font-medium mb-3">Quick Demo Profile Logins:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleDemoLogin('Admin')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#2E5BFF] text-xs font-semibold text-white transition-colors border border-slate-700"
              >
                Dr. Vance (Admin)
              </button>
              <button
                onClick={() => handleDemoLogin('Member')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#2E5BFF] text-xs font-semibold text-white transition-colors border border-slate-700"
              >
                Marcus Chen (CTO)
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Authentication Form */}
        <div className="p-8 sm:p-12 bg-white/95 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#2E5BFF] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to SABHA
            </Link>
            <span className="text-xs text-slate-400 font-medium">JWT Mock Ready</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-1">Sign In</h3>
            <p className="text-xs text-slate-500 mb-6">Enter your email and password to access your boardroom workspace.</p>

            {error && (
              <div className="p-3 mb-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="elena@sabha.ai"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 focus:border-[#2E5BFF] transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700">Password</label>
                  <button
                    type="button"
                    onClick={() => alert('Demo Reset Link Sent!')}
                    className="text-[11px] font-semibold text-[#2E5BFF] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 focus:border-[#2E5BFF] transition-all"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="glow"
                size="md"
                className="w-full mt-2"
                disabled={loading}
                icon={ArrowRight}
              >
                {loading ? 'Authenticating...' : 'Sign In to Boardroom'}
              </Button>
            </form>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-[#2E5BFF] hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
