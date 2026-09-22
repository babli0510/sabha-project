import React, { createContext, useContext, useState, useEffect } from 'react';

const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const [meetings, setMeetings] = useState([
    {
      id: 'M-101',
      title: 'Q4 Enterprise Strategy & Board Alignment',
      date: '2026-09-22',
      time: '14:00 - 15:30 PST',
      status: 'COMPLETED',
      attendees: ['Dr. Elena Vance', 'Marcus Chen', 'Sophia Reynolds', 'David Kim'],
      durationMinutes: 90,
      summary: 'Executive board alignment on product expansion, AI photography bot deployment in physical boardroom suites, and Q4 revenue targets.',
      momGenerated: true,
      actionItemsCount: 4,
      tags: ['Boardroom', 'Strategy', 'AI Deploy'],
      location: 'Executive Digital Suite A'
    },
    {
      id: 'M-102',
      title: 'Live Product Design & Glassmorphism UX Sprint',
      date: '2026-09-22',
      time: '16:00 - 17:00 PST',
      status: 'LIVE',
      attendees: ['Sophia Reynolds', 'David Kim', 'Marcus Chen'],
      durationMinutes: 60,
      summary: 'Reviewing real-time streaming audio visualizers, cyber cyan color accents, and autonomous camera framing presets.',
      momGenerated: false,
      actionItemsCount: 2,
      tags: ['Design', 'UX', 'Vite/React'],
      location: 'SABHA Virtual Room 3'
    },
    {
      id: 'M-103',
      title: 'AI RAG Vector Index & Speaker Attribution Audit',
      date: '2026-09-21',
      time: '11:00 - 12:15 PST',
      status: 'COMPLETED',
      attendees: ['Marcus Chen', 'Dr. Elena Vance'],
      durationMinutes: 75,
      summary: 'Benchmarked speaker diarization precision and verified low-latency RAG vector query responses.',
      momGenerated: true,
      actionItemsCount: 3,
      tags: ['AI Engine', 'RAG', 'Diarization'],
      location: 'AI Research Lab'
    }
  ]);

  const [actionItems, setActionItems] = useState([
    { id: 'ACT-1', task: 'Deploy SABHA-Whisper-V4 diarization pipeline to edge clusters', assignee: 'Marcus Chen', role: 'CTO', dueDate: '2026-09-25', priority: 'HIGH', status: 'IN_PROGRESS', meetingId: 'M-101' },
    { id: 'ACT-2', task: 'Finalize Q4 visual PDF export templates for board members', assignee: 'Sophia Reynolds', role: 'VP Product', dueDate: '2026-09-28', priority: 'MEDIUM', status: 'PENDING', meetingId: 'M-101' },
    { id: 'ACT-3', task: 'Conduct zero-trust security audit on meeting audio transcripts', assignee: 'Dr. Elena Vance', role: 'CEO', dueDate: '2026-10-02', priority: 'HIGH', status: 'COMPLETED', meetingId: 'M-101' },
    { id: 'ACT-4', task: 'Calibrate Autonomous Photography Bot optical zoom presets', assignee: 'Marcus Chen', role: 'CTO', dueDate: '2026-09-24', priority: 'MEDIUM', status: 'COMPLETED', meetingId: 'M-104' },
    { id: 'ACT-5', task: 'Refine glassmorphism card elevation CSS and glowing indicators', assignee: 'David Kim', role: 'Lead UX', dueDate: '2026-09-26', priority: 'HIGH', status: 'IN_PROGRESS', meetingId: 'M-102' }
  ]);

  const toggleActionItemStatus = (id) => {
    setActionItems(prev => prev.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'COMPLETED' ? 'PENDING' : 'COMPLETED';
        return { ...item, status: nextStatus };
      }
      return item;
    }));
  };

  const addActionItem = (newItem) => {
    setActionItems(prev => [newItem, ...prev]);
  };

  const addMeeting = (newMeeting) => {
    setMeetings(prev => [newMeeting, ...prev]);
  };

  return (
    <MeetingContext.Provider value={{
      meetings,
      actionItems,
      toggleActionItemStatus,
      addActionItem,
      addMeeting
    }}>
      {children}
    </MeetingContext.Provider>
  );
};

export const useMeeting = () => useContext(MeetingContext);
