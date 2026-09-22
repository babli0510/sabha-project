const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Database for Instant Execution & State Management
let users = [
  { id: 'u-1', name: 'Dr. Elena Vance', email: 'elena@sabha.ai', role: 'Admin', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
  { id: 'u-2', name: 'Marcus Chen', email: 'marcus@sabha.ai', role: 'Member', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
  { id: 'u-3', name: 'Sophia Reynolds', email: 'sophia@sabha.ai', role: 'Member', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' },
  { id: 'u-4', name: 'Guest Executive', email: 'guest@sabha.ai', role: 'Guest', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' }
];

let meetings = [
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
  },
  {
    id: 'M-104',
    title: 'Autonomous Camera Drone Patrol Calibration',
    date: '2026-09-19',
    time: '09:30 - 10:30 PST',
    status: 'COMPLETED',
    attendees: ['Marcus Chen', 'Technical Operations Team'],
    durationMinutes: 60,
    summary: 'Tested 360-degree pan-tilt camera tracking, face recognition confidence levels, and optical zoom telemetry.',
    momGenerated: true,
    actionItemsCount: 2,
    tags: ['Hardware', 'Photo Bot', 'Vision'],
    location: 'Main Boardroom 1'
  }
];

let actionItems = [
  { id: 'ACT-1', task: 'Deploy SABHA-Whisper-V4 diarization pipeline to edge clusters', assignee: 'Marcus Chen', role: 'CTO', dueDate: '2026-09-25', priority: 'HIGH', status: 'IN_PROGRESS', meetingId: 'M-101' },
  { id: 'ACT-2', task: 'Finalize Q4 visual PDF export templates for board members', assignee: 'Sophia Reynolds', role: 'VP Product', dueDate: '2026-09-28', priority: 'MEDIUM', status: 'PENDING', meetingId: 'M-101' },
  { id: 'ACT-3', task: 'Conduct zero-trust security audit on meeting audio transcripts', assignee: 'Dr. Elena Vance', role: 'CEO', dueDate: '2026-10-02', priority: 'HIGH', status: 'COMPLETED', meetingId: 'M-101' },
  { id: 'ACT-4', task: 'Calibrate Autonomous Photography Bot optical zoom presets', assignee: 'Marcus Chen', role: 'CTO', dueDate: '2026-09-24', priority: 'MEDIUM', status: 'COMPLETED', meetingId: 'M-104' },
  { id: 'ACT-5', task: 'Refine glassmorphism card elevation CSS and glowing indicators', assignee: 'David Kim', role: 'Lead UX', dueDate: '2026-09-26', priority: 'HIGH', status: 'IN_PROGRESS', meetingId: 'M-102' }
];

// --- API ROUTES ---

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    app: 'SABHA Boardroom Intelligence Backend',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Authentication
app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;
  
  let user = users.find(u => u.email.toLowerCase() === (email || '').toLowerCase());
  if (!user) {
    user = {
      id: `u-${Date.now()}`,
      name: email ? email.split('@')[0].toUpperCase() : 'Executive User',
      email: email || 'user@sabha.ai',
      role: role || 'Member',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    };
    users.push(user);
  } else if (role) {
    user.role = role;
  }

  res.json({
    token: `sabha-jwt-token-${user.id}-${Date.now()}`,
    user: user
  });
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, role, password } = req.body;
  const newUser = {
    id: `u-${Date.now()}`,
    name: name || 'Board Member',
    email: email || `user${Date.now()}@sabha.ai`,
    role: role || 'Member',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  };
  users.push(newUser);
  res.status(201).json({ token: `sabha-jwt-token-${newUser.id}`, user: newUser });
});

// Dashboard Overview Stats
app.get('/api/dashboard/stats', (req, res) => {
  const totalMeetings = meetings.length;
  const activeMembers = users.length;
  const pendingActions = actionItems.filter(a => a.status !== 'COMPLETED').length;
  const completedTasks = actionItems.filter(a => a.status === 'COMPLETED').length;

  res.json({
    totalMeetings,
    activeMembers,
    pendingActions,
    completedTasks,
    aiAccuracyPct: 99.4,
    cameraBotStatus: 'ONLINE'
  });
});

// Meetings CRUD
app.get('/api/meetings', (req, res) => {
  res.json(meetings);
});

app.get('/api/meetings/:id', (req, res) => {
  const meeting = meetings.find(m => m.id === req.params.id);
  if (!meeting) return res.status(404).json({ error: 'Meeting not found' });
  res.json(meeting);
});

app.post('/api/meetings', (req, res) => {
  const { title, location, durationMinutes, tags } = req.body;
  const newMeeting = {
    id: `M-${Math.floor(100 + Math.random() * 900)}`,
    title: title || 'New Boardroom Session',
    date: new Date().toISOString().split('T')[0],
    time: '15:00 - 16:00 PST',
    status: 'LIVE',
    attendees: ['Dr. Elena Vance', 'Marcus Chen', 'Sophia Reynolds'],
    durationMinutes: durationMinutes || 60,
    summary: 'Live meeting initiated via SABHA Boardroom portal.',
    momGenerated: false,
    actionItemsCount: 0,
    tags: tags || ['Live Session'],
    location: location || 'SABHA Main Chamber'
  };
  meetings.unshift(newMeeting);
  res.status(201).json(newMeeting);
});

// Action Items API
app.get('/api/action-items', (req, res) => {
  res.json(actionItems);
});

app.patch('/api/action-items/:id', (req, res) => {
  const { status } = req.body;
  const item = actionItems.find(a => a.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Action item not found' });
  if (status) item.status = status;
  res.json(item);
});

app.post('/api/action-items', (req, res) => {
  const { task, assignee, role, dueDate, priority, meetingId } = req.body;
  const newItem = {
    id: `ACT-${Date.now()}`,
    task: task || 'Review boardroom action item',
    assignee: assignee || 'Marcus Chen',
    role: role || 'Member',
    dueDate: dueDate || '2026-09-30',
    priority: priority || 'MEDIUM',
    status: 'PENDING',
    meetingId: meetingId || 'M-101'
  };
  actionItems.unshift(newItem);
  res.status(201).json(newItem);
});

// Reports & Analytics API
app.get('/api/reports/analytics', (req, res) => {
  res.json({
    meetingTrends: [
      { month: 'May', count: 18, hours: 28 },
      { month: 'Jun', count: 24, hours: 36 },
      { month: 'Jul', count: 32, hours: 44 },
      { month: 'Aug', count: 29, hours: 40 },
      { month: 'Sep', count: 42, hours: 58 }
    ],
    participation: [
      { name: 'Dr. Elena Vance', talkTime: 38, meetingsAttended: 12 },
      { name: 'Marcus Chen', talkTime: 27, meetingsAttended: 14 },
      { name: 'Sophia Reynolds', talkTime: 22, meetingsAttended: 10 },
      { name: 'David Kim', talkTime: 13, meetingsAttended: 8 }
    ],
    taskCompletion: [
      { status: 'Completed', value: actionItems.filter(a => a.status === 'COMPLETED').length, fill: '#00C2FF' },
      { status: 'In Progress', value: actionItems.filter(a => a.status === 'IN_PROGRESS').length, fill: '#7B61FF' },
      { status: 'Pending', value: actionItems.filter(a => a.status === 'PENDING').length, fill: '#2E5BFF' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`SABHA Express Backend running at http://localhost:${PORT}`);
});
