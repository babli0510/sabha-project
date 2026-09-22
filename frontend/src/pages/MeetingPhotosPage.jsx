import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { mockPhotos } from '../data/mockData';
import { Camera, Tag, Clock, Users, Maximize2, Sparkles, Filter } from 'lucide-react';

export const MeetingPhotosPage = () => {
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [activePhoto, setActivePhoto] = useState(null);

  const tags = ['ALL', 'Speaker', 'Discussion', 'Presentation', 'Group Interaction', 'Decision'];

  const filteredPhotos = mockPhotos.filter(
    (photo) => selectedTag === 'ALL' || photo.eventTag === selectedTag
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Autonomous Photography Bot Gallery"
        subtitle="Intelligent visual capture logs triggered by participant gesture detection, key speaker turns, and boardroom votes."
        breadcrumb="Visual Intelligence"
        badge="Autonomous CV"
      />

      {/* Filter Tabs */}
      <div className="glass-panel p-4 rounded-2xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedTag === tag
                  ? 'bg-[#2E5BFF] text-white shadow-md shadow-[#2E5BFF]/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tag === 'ALL' ? 'All Captured Moments' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <Card
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            className="p-4 overflow-hidden flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="relative rounded-xl overflow-hidden aspect-video mb-4 bg-slate-900 border border-slate-200">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  {photo.eventTag}
                </div>
                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span className="font-mono text-[#2E5BFF] font-semibold">{photo.timestamp}</span>
                <span>{photo.cameraAngle}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">{photo.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-1">{photo.meetingName}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="text-slate-500 font-medium flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#2E5BFF]" />
                {photo.participants.join(', ')}
              </span>
              <span className="font-semibold text-emerald-600">
                {(photo.confidenceScore * 100).toFixed(0)}% Match
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <Modal isOpen={!!activePhoto} onClose={() => setActivePhoto(null)} title={activePhoto.title} maxWidth="max-w-4xl">
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-800">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
              <div className="hud-scanner" />
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-400">
                SERVO: {activePhoto.cameraAngle} | CONFIDENCE: {(activePhoto.confidenceScore * 100).toFixed(1)}%
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">EVENT TAG</span>
                <span className="font-bold text-slate-900">{activePhoto.eventTag}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">TIMESTAMP</span>
                <span className="font-mono font-bold text-slate-900">{activePhoto.timestamp}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">PARTICIPANTS</span>
                <span className="font-bold text-[#2E5BFF]">{activePhoto.participants.join(', ')}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">MEETING SESSION</span>
                <span className="font-bold text-slate-900 truncate block">{activePhoto.meetingName}</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
