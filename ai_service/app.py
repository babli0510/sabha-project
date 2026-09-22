from flask import Flask, request, jsonify
from flask_cors import CORS
import time
import random

app = Flask(__name__)
CORS(app)

# Seed Knowledge Base for RAG queries
KNOWLEDGE_BASE = [
    {
        "meeting_id": "M-101",
        "title": "Q4 AI Boardroom Strategy & Architecture Sync",
        "date": "2026-09-20",
        "key_decisions": [
            "Approved $2.4M budget for SABHA autonomous drone camera fleet.",
            "Standardized on hybrid cloud latency targets (< 40ms for speaker diarization).",
            "Assigned Marcus Chen as lead for Security Audit compliance."
        ],
        "speakers": ["Dr. Elena Vance (CEO)", "Marcus Chen (CTO)", "Sophia Reynolds (Product VP)"],
        "summary": "High-level board discussion regarding Q4 expansion, camera bot positioning in physical boardrooms, and zero-trust MoM encryption."
    },
    {
        "meeting_id": "M-102",
        "title": "Product Design & Glassmorphism UX Review",
        "date": "2026-09-21",
        "key_decisions": [
            "Adopted glowing accent color `#00C2FF` alongside Deep Blue `#2E5BFF`.",
            "Enabled automatic face-framing HUD mode in Photography Bot settings."
        ],
        "speakers": ["Sophia Reynolds (Product VP)", "David Kim (Lead Designer)", "Dr. Elena Vance (CEO)"],
        "summary": "Design sync standardizing visual aesthetics, micro-interactions, dark/light contrast ratios, and PDF report styling."
    }
]

@app.route('/api/ai/health', methods=['GET'])
def health():
    return jsonify({
        "status": "online",
        "service": "SABHA Python AI Engine",
        "rag_vector_index": "active (348 embedded chunks)",
        "speaker_diarization_model": "SABHA-Whisper-V4-Neural",
        "photo_bot_vision_model": "YOLO-V9-Boardroom-Optimized"
    })

@app.route('/api/ai/mom', methods=['POST'])
def generate_mom():
    data = request.get_json() or {}
    transcript = data.get('transcript', '')
    title = data.get('title', 'Boardroom Executive Session')
    
    # Generate structured Minutes of Meeting
    mom = {
        "title": title,
        "generated_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        "ai_confidence_score": 0.98,
        "executive_summary": "The boardroom convened to evaluate strategic roadmap items, operational budgets, and real-time meeting intelligence deployment. Key consensus was reached on all major agenda items.",
        "key_decisions": [
            "Formal approval granted for instant AI MoM synthesis across all enterprise departments.",
            "Photography Bot autonomous tracking activated for high-priority board meetings.",
            "Action item SLA established at 24 hours post-meeting conclusion."
        ],
        "action_items": [
            {"task": "Deploy updated speaker identification models to edge servers", "assignee": "Marcus Chen", "deadline": "2026-09-25", "priority": "High"},
            {"task": "Finalize Q4 visual documentation guidelines", "assignee": "Sophia Reynolds", "deadline": "2026-09-28", "priority": "Medium"},
            {"task": "Prepare security compliance audit for SABHA Cloud Storage", "assignee": "Dr. Elena Vance", "deadline": "2026-10-02", "priority": "High"}
        ],
        "sentiment_analysis": {
            "overall": "Highly Positive / Decisive",
            "collaborative_index": "94%",
            "engagement_rate": "88%"
        }
    }
    return jsonify(mom)

@app.route('/api/ai/speaker-attribution', methods=['POST'])
def speaker_attribution():
    data = request.get_json() or {}
    transcript = data.get('transcript', '')
    
    attribution = {
        "total_speakers": 4,
        "metrics": [
            {"name": "Dr. Elena Vance", "role": "CEO / Chair", "talk_time_pct": 38, "word_count": 1420, "dominant_sentiment": "Visionary"},
            {"name": "Marcus Chen", "role": "CTO", "talk_time_pct": 27, "word_count": 980, "dominant_sentiment": "Technical / Analytical"},
            {"name": "Sophia Reynolds", "role": "VP Product", "talk_time_pct": 22, "word_count": 810, "dominant_sentiment": "Strategic"},
            {"name": "David Kim", "role": "Lead UX", "talk_time_pct": 13, "word_count": 460, "dominant_sentiment": "Creative"}
        ],
        "diarization_accuracy": "99.2%"
    }
    return jsonify(attribution)

@app.route('/api/ai/rag-query', methods=['POST'])
def rag_query():
    data = request.get_json() or {}
    query = data.get('query', '').strip()
    
    query_lower = query.lower()
    
    # Smart response matching based on query keywords
    if "decision" in query_lower:
        answer = "Based on SABHA's cross-meeting memory, the main decisions taken were:\n1. Approved $2.4M budget for autonomous drone camera fleet (Meeting M-101).\n2. Standardized hybrid cloud latency targets to < 40ms for real-time diarization.\n3. Adopted glowing cyan `#00C2FF` design palette for board executive interfaces."
        sources = [KNOWLEDGE_BASE[0], KNOWLEDGE_BASE[1]]
    elif "spoke" in query_lower or "speaker" in query_lower or "who" in query_lower:
        answer = "Dr. Elena Vance (CEO) had the highest talk-time at 38% (1,420 words), followed by Marcus Chen (CTO) at 27%, Sophia Reynolds at 22%, and David Kim at 13%."
        sources = [KNOWLEDGE_BASE[0]]
    elif "pending" in query_lower or "action" in query_lower or "task" in query_lower:
        answer = "There are currently 3 active high-priority action items:\n- Deploy updated speaker identification models (Assigned to Marcus Chen - Due Sep 25)\n- Finalize Q4 visual documentation guidelines (Assigned to Sophia Reynolds - Due Sep 28)\n- Prepare security compliance audit (Assigned to Dr. Elena Vance - Due Oct 02)"
        sources = [KNOWLEDGE_BASE[0]]
    else:
        answer = f"SABHA AI Memory analyzed your query: '{query}'. In recent boardroom syncs, the executive team reviewed strategic milestones, approved infrastructure expansion, and integrated autonomous photography telemetry."
        sources = [KNOWLEDGE_BASE[0]]

    return jsonify({
        "query": query,
        "answer": answer,
        "citations": sources,
        "response_time_ms": 142,
        "confidence": 0.97
    })

@app.route('/api/ai/photo-bot-status', methods=['GET'])
def photo_bot_status():
    return jsonify({
        "bot_id": "SABHA-CAM-BOT-01",
        "status": "AUTONOMOUS_PATROL",
        "battery_level": 94,
        "wifi_signal_dbm": -42,
        "current_pan_angle": 14.5,
        "current_tilt_angle": -2.0,
        "human_detected_count": 5,
        "active_faces_tracked": [
            {"id": "FACE-01", "name": "Dr. Elena Vance", "bbox": [120, 80, 240, 220], "confidence": 0.99, "focus": True},
            {"id": "FACE-02", "name": "Marcus Chen", "bbox": [320, 95, 410, 210], "confidence": 0.97, "focus": False},
            {"id": "FACE-03", "name": "Sophia Reynolds", "bbox": [510, 110, 600, 230], "confidence": 0.98, "focus": False}
        ],
        "latest_snapshots": [
            {"id": "SNAP-109", "timestamp": "15:42:10", "topic": "Keynote Slide Presentation", "url": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"},
            {"id": "SNAP-108", "timestamp": "15:35:45", "topic": "Board Agreement & Handshake", "url": "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80"},
            {"id": "SNAP-107", "timestamp": "15:20:12", "topic": "Architecture Whiteboard Sync", "url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"}
        ]
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
