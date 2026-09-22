import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { mockRagQueries } from '../data/mockData';
import { Brain, Search, Sparkles, FileText, ArrowRight, CheckCircle2, Database } from 'lucide-react';

export const MeetingMemoryPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [activeResults, setActiveResults] = useState(mockRagQueries);
  const [isSearching, setIsSearching] = useState(false);

  const suggestedQuestions = [
    'What decisions were made about the AI Photography Bot in Q4?',
    'Who was assigned the documentation task for the Q4 strategy?',
    'What did we discuss regarding speaker diarization latency?'
  ];

  const handleSearch = (qToSearch) => {
    const searchTerm = qToSearch || query;
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      const filtered = mockRagQueries.filter(
        (r) =>
          r.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.sourceMeeting.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setActiveResults(filtered.length > 0 ? filtered : mockRagQueries);
      setIsSearching(false);
    }, 300);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <PageHeader
        title="Persistent Meeting Memory (RAG)"
        subtitle="Conversational vector search across past boardroom transcripts, decisions, and action items."
        breadcrumb="Organizational Intelligence"
        badge="Multi-Agent RAG"
      />

      {/* Main RAG Conversational Search Box */}
      <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#2E5BFF]/10 via-[#7B61FF]/10 to-[#00C2FF]/10 border border-[#2E5BFF]/30 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#2E5BFF] uppercase tracking-wider">
          <Brain className="w-4 h-4" />
          <span>Ask SABHA Intelligence</span>
        </div>

        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Ask SABHA about your meetings, e.g. 'What decisions were made about the budget?'"
            className="w-full pl-5 pr-28 py-3.5 text-sm rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/40 shadow-md transition-all font-medium"
          />
          <Button
            variant="glow"
            size="sm"
            icon={Sparkles}
            onClick={() => handleSearch()}
            className="absolute right-2 top-1/2 -translate-y-1/2"
            disabled={isSearching}
          >
            {isSearching ? 'Querying...' : 'Ask RAG'}
          </Button>
        </div>

        {/* Suggested Queries Pills */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-semibold text-slate-500 block">Suggested Boardroom Queries:</span>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setQuery(q);
                  handleSearch(q);
                }}
                className="px-3 py-1.5 rounded-xl bg-white/80 hover:bg-white text-slate-700 hover:text-[#2E5BFF] text-xs font-medium border border-slate-200/80 shadow-sm transition-all text-left"
              >
                "{q}"
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* RAG Answer Cards Feed */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <Database className="w-5 h-5 text-[#2E5BFF]" />
            Synthesized Answers & Context Citations
          </h3>
          <span className="text-xs text-slate-400 font-mono">3 Vector Match Clusters</span>
        </div>

        {activeResults.map((result) => (
          <Card key={result.id} className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Question
                </span>
                <h4 className="text-base font-bold text-slate-900">{result.query}</h4>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-[10px] shrink-0 border border-emerald-200">
                {result.confidence}
              </span>
            </div>

            {/* Answer Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
              <span className="font-bold text-[#2E5BFF] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                SABHA AI Synthesized Answer:
              </span>
              <p className="text-slate-800 leading-relaxed text-sm font-medium">{result.answer}</p>
            </div>

            {/* Cited Context Snippet */}
            <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono space-y-1">
              <span className="text-cyan-400 text-[10px] block font-bold">CITED TRANSCRIPT CONTEXT:</span>
              <p className="text-slate-300 italic">{result.contextSnippet}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <FileText className="w-4 h-4 text-[#2E5BFF]" />
                Source: {result.sourceMeeting}
              </span>
              <span className="font-mono text-slate-400">{result.sourceDate}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
