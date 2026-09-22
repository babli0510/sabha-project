import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { mockParticipants } from '../data/mockData';
import { Plus, Users, UserCheck, Mic, Calendar, Mail, MapPin, Search } from 'lucide-react';

export const ParticipantsPage = () => {
  const [participants, setParticipants] = useState(mockParticipants);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newParticipant, setNewParticipant] = useState({
    name: '',
    role: '',
    email: '',
    seat: 'Seat 6 (Guest Desk)'
  });

  const handleAddParticipant = (e) => {
    e.preventDefault();
    if (!newParticipant.name || !newParticipant.email) return;

    const created = {
      id: `P-${Date.now()}`,
      name: newParticipant.name,
      role: newParticipant.role || 'Board Member',
      email: newParticipant.email,
      seat: newParticipant.seat,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      meetingsAttended: 1,
      speakingPercentage: 10,
      status: 'Active'
    };

    setParticipants([created, ...participants]);
    setIsModalOpen(false);
    setNewParticipant({ name: '', role: '', email: '', seat: 'Seat 6 (Guest Desk)' });
  };

  const filteredParticipants = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Board Participants & Diarization Profiles"
        subtitle="Manage executive members, designated seating indices, and audio diarization profile attributes."
        breadcrumb="Board Governance"
        actions={
          <Button variant="glow" icon={Plus} onClick={() => setIsModalOpen(true)}>
            Add Participant
          </Button>
        }
      />

      {/* Search Input */}
      <div className="glass-panel p-4 rounded-2xl flex items-center justify-between gap-4">
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search participants by name, role, or email..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30 transition-all"
          />
        </div>
        <span className="text-xs font-semibold text-slate-500 hidden sm:block">
          {filteredParticipants.length} Registered Members
        </span>
      </div>

      {/* Participants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParticipants.map((p) => (
          <Card key={p.id} className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#2E5BFF]/30 shadow-md"
                />
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-200">
                  {p.status}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
              <p className="text-xs font-semibold text-[#2E5BFF] mb-1">{p.role}</p>
              <p className="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {p.email}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-2 mb-4">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    Seating Position:
                  </span>
                  <span className="font-semibold text-slate-900">{p.seat}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Meetings Attended:
                  </span>
                  <span className="font-bold text-slate-900">{p.meetingsAttended}</span>
                </div>
              </div>
            </div>

            {/* Speaking Frequency Meter */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1">
                  <Mic className="w-3.5 h-3.5 text-[#2E5BFF]" />
                  Speaking Activity:
                </span>
                <span className="font-bold text-[#2E5BFF]">{p.speakingPercentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#2E5BFF] to-[#00C2FF] rounded-full"
                  style={{ width: `${p.speakingPercentage * 2}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Participant Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Register Board Participant">
        <form onSubmit={handleAddParticipant} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={newParticipant.name}
              onChange={(e) => setNewParticipant({ ...newParticipant, name: e.target.value })}
              placeholder="e.g. Dr. Aris Thorne"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Role / Designation</label>
            <input
              type="text"
              value={newParticipant.role}
              onChange={(e) => setNewParticipant({ ...newParticipant, role: e.target.value })}
              placeholder="e.g. Director of AI Safety"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={newParticipant.email}
              onChange={(e) => setNewParticipant({ ...newParticipant, email: e.target.value })}
              placeholder="aris@sabha.ai"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Seating Position</label>
            <select
              value={newParticipant.seat}
              onChange={(e) => setNewParticipant({ ...newParticipant, seat: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5BFF]/30"
            >
              <option value="Seat 1 (Head of Table)">Seat 1 (Head of Table)</option>
              <option value="Seat 2 (East Desk)">Seat 2 (East Desk)</option>
              <option value="Seat 3 (West Desk)">Seat 3 (West Desk)</option>
              <option value="Seat 4 (North Desk)">Seat 4 (North Desk)</option>
              <option value="Seat 5 (South Desk)">Seat 5 (South Desk)</option>
              <option value="Seat 6 (Guest Desk)">Seat 6 (Guest Desk)</option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="glow">
              Register Participant
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
