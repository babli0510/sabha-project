// SABHA - Mock Data Store for Frontend Demonstration

export const currentUser = {
  id: 'u-1',
  name: 'Dr. Elena Vance',
  email: 'elena.vance@sabha.ai',
  role: 'Executive Chair & AI Architect',
  department: 'Board of Directors / AI Engineering',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
  notificationsCount: 3
};

export const mockStats = {
  meetingsProcessed: 142,
  actionItemsCaptured: 388,
  decisionsRecorded: 215,
  activeBoardMembers: 18,
  cameraAccuracyRate: '99.4%'
};

export const mockMeetings = [
  {
    id: 'M-101',
    title: 'Q4 Enterprise AI Strategy & Board Alignment',
    date: '2026-09-22',
    time: '14:00 - 15:30 PST',
    status: 'COMPLETED',
    attendees: ['Dr. Elena Vance', 'Marcus Chen', 'Sophia Reynolds', 'David Kim'],
    durationMinutes: 90,
    summary: 'Strategic review of AI Photography Bot deployment across physical boardroom suites, multi-agent RAG engine memory architecture, and Q4 revenue benchmarks.',
    momGenerated: true,
    actionItemsCount: 4,
    tags: ['Boardroom', 'Strategy', 'AI Deploy'],
    location: 'Executive Digital Suite A',
    meetingType: 'Executive Strategy'
  },
  {
    id: 'M-102',
    title: 'Live Product Design & Glassmorphism UX Sprint',
    date: '2026-09-22',
    time: '16:00 - 17:00 PST',
    status: 'LIVE',
    attendees: ['Sophia Reynolds', 'David Kim', 'Marcus Chen'],
    durationMinutes: 60,
    summary: 'Evaluating real-time streaming audio visualizers, cyber cyan color accents, and autonomous camera framing presets.',
    momGenerated: false,
    actionItemsCount: 2,
    tags: ['Design', 'UX', 'Vite/React'],
    location: 'SABHA Virtual Room 3',
    meetingType: 'Technical Review'
  },
  {
    id: 'M-103',
    title: 'AI RAG Vector Index & Diarization Audit',
    date: '2026-09-21',
    time: '11:00 - 12:15 PST',
    status: 'COMPLETED',
    attendees: ['Marcus Chen', 'Dr. Elena Vance', 'Vikram Malhotra'],
    durationMinutes: 75,
    summary: 'Benchmarked speaker diarization precision and verified sub-50ms RAG vector query responses across 6 months of historical meeting archives.',
    momGenerated: true,
    actionItemsCount: 3,
    tags: ['AI Engine', 'RAG', 'Diarization'],
    location: 'AI Research Lab',
    meetingType: 'Engineering'
  },
  {
    id: 'M-104',
    title: 'Autonomous Camera Hardware & Servo Calibration',
    date: '2026-09-24',
    time: '10:00 - 11:30 PST',
    status: 'UPCOMING',
    attendees: ['Marcus Chen', 'Aisha Patel', 'David Kim'],
    durationMinutes: 90,
    summary: 'Testing ESP32 servo pan-tilt mechanisms and optical facial bounding boxes for live boardroom participant detection.',
    momGenerated: false,
    actionItemsCount: 0,
    tags: ['Hardware', 'ESP32', 'Camera Bot'],
    location: 'Hardware Prototyping Bay',
    meetingType: 'Hardware Sync'
  },
  {
    id: 'M-105',
    title: 'Global Governance & Multi-Agent Minutes Review',
    date: '2026-09-26',
    time: '15:00 - 16:00 PST',
    status: 'UPCOMING',
    attendees: ['Dr. Elena Vance', 'Sophia Reynolds', 'Vikram Malhotra'],
    durationMinutes: 60,
    summary: 'Finalizing automated PDF distribution of structured Minutes of Meeting (MoM) for institutional compliance.',
    momGenerated: false,
    actionItemsCount: 0,
    tags: ['Governance', 'Compliance', 'AI MoM'],
    location: 'Conference Room Beta',
    meetingType: 'Compliance'
  }
];

export const mockParticipants = [
  {
    id: 'P-1',
    name: 'Dr. Elena Vance',
    role: 'Executive Chair & AI Lead',
    email: 'elena.vance@sabha.ai',
    seat: 'Seat 1 (Head of Table)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    meetingsAttended: 48,
    speakingPercentage: 34,
    status: 'Active'
  },
  {
    id: 'P-2',
    name: 'Marcus Chen',
    role: 'CTO & Computer Vision Lead',
    email: 'marcus.chen@sabha.ai',
    seat: 'Seat 2 (East Desk)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    meetingsAttended: 42,
    speakingPercentage: 28,
    status: 'Active'
  },
  {
    id: 'P-3',
    name: 'Sophia Reynolds',
    role: 'VP of Product & UX Design',
    email: 'sophia.reynolds@sabha.ai',
    seat: 'Seat 3 (West Desk)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    meetingsAttended: 39,
    speakingPercentage: 22,
    status: 'Active'
  },
  {
    id: 'P-4',
    name: 'David Kim',
    role: 'Lead Frontend Architect',
    email: 'david.kim@sabha.ai',
    seat: 'Seat 4 (North Desk)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    meetingsAttended: 31,
    speakingPercentage: 16,
    status: 'Active'
  },
  {
    id: 'P-5',
    name: 'Vikram Malhotra',
    role: 'Director of Enterprise RAG',
    email: 'vikram.m@sabha.ai',
    seat: 'Seat 5 (South Desk)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    meetingsAttended: 25,
    speakingPercentage: 12,
    status: 'Away'
  }
];

export const mockActionItems = [
  {
    id: 'ACT-101',
    task: 'Deploy SABHA-Diarization-V4 engine to production edge cluster',
    assignee: 'Marcus Chen',
    role: 'CTO',
    dueDate: '2026-09-25',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    meetingId: 'M-101',
    meetingTitle: 'Q4 Enterprise AI Strategy & Board Alignment'
  },
  {
    id: 'ACT-102',
    task: 'Finalize Q4 executive PDF export template with sign-off digital signatures',
    assignee: 'Sophia Reynolds',
    role: 'VP Product',
    dueDate: '2026-09-28',
    priority: 'MEDIUM',
    status: 'PENDING',
    meetingId: 'M-101',
    meetingTitle: 'Q4 Enterprise AI Strategy & Board Alignment'
  },
  {
    id: 'ACT-103',
    task: 'Conduct security & SOC2 audit on RAG vector database memory store',
    assignee: 'Dr. Elena Vance',
    role: 'Executive Chair',
    dueDate: '2026-10-02',
    priority: 'HIGH',
    status: 'COMPLETED',
    meetingId: 'M-101',
    meetingTitle: 'Q4 Enterprise AI Strategy & Board Alignment'
  },
  {
    id: 'ACT-104',
    task: 'Calibrate Autonomous Photography Bot optical zoom & servo tilt limits',
    assignee: 'Marcus Chen',
    role: 'CTO',
    dueDate: '2026-09-24',
    priority: 'MEDIUM',
    status: 'COMPLETED',
    meetingId: 'M-103',
    meetingTitle: 'AI RAG Vector Index & Diarization Audit'
  },
  {
    id: 'ACT-105',
    task: 'Implement live participant detection bounding boxes overlay in UI canvas',
    assignee: 'David Kim',
    role: 'Lead Frontend Architect',
    dueDate: '2026-09-26',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    meetingId: 'M-102',
    meetingTitle: 'Live Product Design & Glassmorphism UX Sprint'
  }
];

export const mockPhotos = [
  {
    id: 'PH-1',
    title: 'Dr. Vance presenting AI Diarization roadmap',
    timestamp: '14:18:22 PST',
    meetingName: 'Q4 Enterprise AI Strategy & Board Alignment',
    eventTag: 'Speaker',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    participants: ['Dr. Elena Vance'],
    cameraAngle: '45° Pan / 12° Tilt',
    confidenceScore: 0.98
  },
  {
    id: 'PH-2',
    title: 'Boardroom active debate on RAG architecture',
    timestamp: '14:42:05 PST',
    meetingName: 'Q4 Enterprise AI Strategy & Board Alignment',
    eventTag: 'Discussion',
    imageUrl: 'https://images.unsplash.com/photo-1542744836-561432865532?auto=format&fit=crop&w=800&q=80',
    participants: ['Marcus Chen', 'Sophia Reynolds', 'Dr. Elena Vance'],
    cameraAngle: '90° Pan / 0° Tilt',
    confidenceScore: 0.95
  },
  {
    id: 'PH-3',
    title: 'Unanimous vote on Q4 budget allocation',
    timestamp: '15:15:10 PST',
    meetingName: 'Q4 Enterprise AI Strategy & Board Alignment',
    eventTag: 'Decision',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    participants: ['All Board Members'],
    cameraAngle: '0° Center Overview',
    confidenceScore: 0.99
  },
  {
    id: 'PH-4',
    title: 'Hardware camera servo test preview',
    timestamp: '11:10:44 PST',
    meetingName: 'AI RAG Vector Index & Diarization Audit',
    eventTag: 'Presentation',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    participants: ['Marcus Chen', 'Vikram Malhotra'],
    cameraAngle: '120° Wide Angle',
    confidenceScore: 0.94
  },
  {
    id: 'PH-5',
    title: 'Interactive whiteboard UX breakdown',
    timestamp: '16:25:30 PST',
    meetingName: 'Live Product Design & Glassmorphism UX Sprint',
    eventTag: 'Group Interaction',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    participants: ['Sophia Reynolds', 'David Kim'],
    cameraAngle: '30° Zoom Preset',
    confidenceScore: 0.97
  }
];

export const mockRagQueries = [
  {
    id: 'RAG-1',
    query: 'What decisions were made about the AI Photography Bot in Q4?',
    answer: 'The executive board approved the deployment of the SABHA Autonomous Photography Bot across all physical executive suites. Key decisions included setting the servo detection mode to active participant tracking and establishing a 99.4% confidence threshold before triggering image capture.',
    sourceMeeting: 'Q4 Enterprise AI Strategy & Board Alignment',
    sourceDate: '2026-09-22',
    confidence: '98.5% Match',
    contextSnippet: '...Dr. Elena Vance moved to approve the budget for 12 ESP32 camera units with dual-axis servo mounts. Motion carried unanimously.'
  },
  {
    id: 'RAG-2',
    query: 'Who was assigned the documentation task for the Q4 strategy?',
    answer: 'Sophia Reynolds (VP of Product) was assigned the responsibility of finalizing the Q4 executive PDF export template and MoM distribution system by September 28, 2026.',
    sourceMeeting: 'Q4 Enterprise AI Strategy & Board Alignment',
    sourceDate: '2026-09-22',
    confidence: '99.1% Match',
    contextSnippet: '...Action Item ACT-102 assigned to Sophia Reynolds: Finalize Q4 executive PDF export template with sign-off digital signatures.'
  },
  {
    id: 'RAG-3',
    query: 'What did we discuss regarding speaker diarization latency?',
    answer: 'During the AI RAG audit, Marcus Chen confirmed that speaker diarization latency has been reduced to under 50ms per utterance using the SABHA-Whisper-V4 edge engine, ensuring real-time attribution without cloud delays.',
    sourceMeeting: 'AI RAG Vector Index & Diarization Audit',
    sourceDate: '2026-09-21',
    confidence: '96.8% Match',
    contextSnippet: '...Marcus Chen: We achieved sub-50ms diarization windowing. Speaker attribution transitions seamlessly in live boardroom feeds.'
  }
];

export const mockMomDetail = {
  meetingId: 'M-101',
  title: 'Q4 Enterprise AI Strategy & Board Alignment',
  date: 'September 22, 2026',
  time: '14:00 - 15:30 PST',
  location: 'Executive Digital Suite A',
  chairperson: 'Dr. Elena Vance',
  scribe: 'SABHA AI Autonomous Scribe',
  overview: 'The executive board convened to align on Q4 strategic directives, review real-time computer vision hardware deployment in physical boardrooms, and audit the multi-agent Minutes of Meeting (MoM) engine performance.',
  attendees: [
    { name: 'Dr. Elena Vance', role: 'Executive Chair & AI Lead', present: true },
    { name: 'Marcus Chen', role: 'CTO & Computer Vision Lead', present: true },
    { name: 'Sophia Reynolds', role: 'VP of Product & UX Design', present: true },
    { name: 'David Kim', role: 'Lead Frontend Architect', present: true }
  ],
  discussionSummary: [
    {
      topic: '1. Autonomous Boardroom Photography Bot Deployment',
      summary: 'Marcus Chen demonstrated the ESP32 camera setup equipped with dual-axis servos. Rather than taking continuous random photos, the camera triggers strictly when participant detection signals active gestures or high-confidence speaker turns.'
    },
    {
      topic: '2. Multi-Agent RAG & Meeting Memory Store',
      summary: 'Dr. Vance detailed how meeting transcripts and photo tags are indexed into the organizational vector memory store, allowing executive team members to query past boardroom decisions instantly.'
    },
    {
      topic: '3. Q4 Budget & Export Workflow',
      summary: 'Sophia Reynolds presented mockups for automated Minutes of Meeting distribution. The board reviewed and agreed on security controls for PDF exports.'
    }
  ],
  whoSpoke: [
    { speaker: 'Dr. Elena Vance', timeSpent: '30 min 45 sec', percentage: 34, keyTopic: 'RAG Architecture & Board Alignment' },
    { speaker: 'Marcus Chen', timeSpent: '25 min 10 sec', percentage: 28, keyTopic: 'Computer Vision & Servo Hardware' },
    { speaker: 'Sophia Reynolds', timeSpent: '19 min 50 sec', percentage: 22, keyTopic: 'Product Roadmap & PDF Export UI' },
    { speaker: 'David Kim', timeSpent: '14 min 15 sec', percentage: 16, keyTopic: 'Frontend Performance & Glassmorphism design' }
  ],
  keyDecisions: [
    'Approved immediate hardware acquisition for 12 ESP32 Camera Bot units across all enterprise suites.',
    'Adopted sub-50ms speaker diarization as the baseline benchmark for all live meetings.',
    'Mandated automatic PDF generation and encrypted archival after every executive meeting.'
  ],
  actionItems: [
    { id: 'ACT-101', task: 'Deploy SABHA-Diarization-V4 engine to production edge cluster', assignee: 'Marcus Chen', deadline: '2026-09-25', status: 'In Progress' },
    { id: 'ACT-102', task: 'Finalize Q4 executive PDF export template with sign-off digital signatures', assignee: 'Sophia Reynolds', deadline: '2026-09-28', status: 'Pending' },
    { id: 'ACT-103', task: 'Conduct security & SOC2 audit on RAG vector database memory store', assignee: 'Dr. Elena Vance', deadline: '2026-10-02', status: 'Completed' }
  ],
  visualEvents: [
    { timestamp: '14:18:22', description: 'Dr. Vance standing at head of table pointing to RAG architecture slide.', tag: 'Presentation' },
    { timestamp: '14:42:05', description: 'Group discussion around camera servo pan angle calibration.', tag: 'Discussion' },
    { timestamp: '15:15:10', description: 'Board members raising hands for formal vote on Q4 budget allocation.', tag: 'Decision' }
  ],
  aiSummary: 'This meeting successfully established consensus on SABHA’s edge AI hardware roll-out, validated sub-50ms diarization targets, and authorized automated PDF Minutes of Meeting generation for institutional governance.'
};

export const mockAnalytics = {
  meetingsOverTime: [
    { month: 'May', meetings: 18, actionItems: 42, decisions: 24 },
    { month: 'Jun', meetings: 24, actionItems: 58, decisions: 31 },
    { month: 'Jul', meetings: 29, actionItems: 72, decisions: 40 },
    { month: 'Aug', meetings: 35, actionItems: 91, decisions: 52 },
    { month: 'Sep', meetings: 42, actionItems: 110, decisions: 68 }
  ],
  speakingDistribution: [
    { name: 'Dr. Elena Vance', value: 34, color: '#2E5BFF' },
    { name: 'Marcus Chen', value: 28, color: '#7B61FF' },
    { name: 'Sophia Reynolds', value: 22, color: '#00C2FF' },
    { name: 'David Kim', value: 16, color: '#10B981' }
  ],
  actionItemVelocity: [
    { week: 'Week 1', completed: 12, pending: 8 },
    { week: 'Week 2', completed: 18, pending: 11 },
    { week: 'Week 3', completed: 25, pending: 9 },
    { week: 'Week 4', completed: 31, pending: 14 }
  ]
};
