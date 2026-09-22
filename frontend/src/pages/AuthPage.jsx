import React, { useState } from 'react';
import { Sparkles, Shield, ArrowRight, CheckCircle2, User, Mail, Lock, KeyRound, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ParticleBackground } from '../components/ParticleBackground';

export const AuthPage = ({ onSuccess }) => {
  const { login, quickDemoLogin } = useAuth();
  const [isRegister, setIsRegister] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [rememberMe, setRememberMe] = useState(true);
  const [forgotSent, setForgotSent] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      id: `u-${Date.now()}`,
      name: isRegister ? (name || 'Executive User') : (email ? email.split('@')[0].toUpperCase() : 'Dr. Elena Vance'),
      email: email || 'elena@sabha.ai',
      role: isRegister ? role : 'Admin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    });
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] relative flex items-center justify-center p-6 text-slate-900 overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#2E5BFF] via-[#7B61FF] to-[#00C2FF] text-white font-black text-3xl shadow-glow-primary mb-4">
            S
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            SABHA Boardroom Access
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Zero-Trust AI Meeting Intelligence Gateway
          </p>
        </div>

        {/* Glassmorphism Card */}
        <div className="glass-panel p-8 rounded-3xl shadow-2xl border border-white/80 relative overflow-hidden backdrop-blur-2xl">
          {/* Top Tab Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-2xl mb-6 border border-slate-200/80">
            <button
              onClick={() => { setIsRegister(false); setShowForgot(false); }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                !isRegister && !showForgot
                  ? 'bg-white text-[#2E5BFF] shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setIsRegister(true); setShowForgot(false); }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                isRegister
                  ? 'bg-white text-[#2E5BFF] shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Register Board Member
            </button>
          </div>

          {showForgot ? (
            /* Forgot Password Form */
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-sm font-bold text-slate-900">Reset Security Token</h3>
              <p className="text-xs text-slate-500">Enter your registered boardroom email address to receive password recovery instructions.</p>
              
              {forgotSent ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong className="block font-bold">Recovery Sent!</strong>
                    Check your inbox for a secure SABHA reset link.
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@sabha.ai"
                      className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForgot(false)}
                  className="flex-1 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Back to Sign In
                </button>
                {!forgotSent && (
                  <button
                    type="button"
                    onClick={() => setForgotSent(true)}
                    className="flex-1 btn-glow py-2.5 rounded-xl text-xs font-bold text-white shadow-md"
                  >
                    Send Reset Link
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Elena Vance"
                      className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@sabha.ai"
                    className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]"
                  />
                </div>
              </div>

              {isRegister && (
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Boardroom Role</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Admin', 'Member', 'Guest'].map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setRole(r)}
                        className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                          role === r
                            ? 'bg-[#2E5BFF] text-white border-[#2E5BFF] shadow-sm'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]"
                  />
                </div>
              </div>

              {!isRegister && (
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-[#2E5BFF] focus:ring-[#2E5BFF]"
                    />
                    <span>Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgot(true)}
                    className="text-[#2E5BFF] font-bold hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-glow py-3 rounded-2xl text-xs font-extrabold text-white flex items-center justify-center gap-2 shadow-lg mt-4"
              >
                <span>{isRegister ? 'Complete Registration' : 'Authenticate & Enter Boardroom'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Quick Preset Login Buttons for instant evaluation */}
          <div className="mt-6 pt-6 border-t border-slate-200/80">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center mb-2.5">
              Instant One-Click Demo Access
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => { quickDemoLogin('Admin'); onSuccess(); }}
                className="py-1.5 px-2 rounded-xl bg-slate-900 text-white text-[11px] font-bold hover:bg-[#2E5BFF] transition-colors flex items-center justify-center gap-1"
              >
                <span>Admin</span>
              </button>
              <button
                type="button"
                onClick={() => { quickDemoLogin('Member'); onSuccess(); }}
                className="py-1.5 px-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"
              >
                <span>Member</span>
              </button>
              <button
                type="button"
                onClick={() => { quickDemoLogin('Guest'); onSuccess(); }}
                className="py-1.5 px-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"
              >
                <span>Guest</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
