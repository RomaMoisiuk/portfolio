'use client';

import { hankenGrotesk } from '@/ui/fonts';
import { X } from 'lucide-react';

interface ExperienceStory {
  problem: string;
  actions: Array<string>;
  results: Array<string>;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  period: string;
  company: string;
  story: ExperienceStory;
}

export default function ExperienceModal({
  isOpen,
  onClose,
  projectTitle,
  period,
  company,
  story,
}: ExperienceModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 [overscroll-behavior:contain]"
      onClick={onClose}
    >
      <div
        className={`${hankenGrotesk.className} animate-in fade-in zoom-in-95 relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-xl bg-[#142c46] pb-8 shadow-2xl duration-200 [overscroll-behavior-y:contain]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex-shrink-0 rounded-t-xl bg-[#142c46] p-8 pb-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 text-white/70 transition-colors hover:bg-[#06b6d4] hover:text-white"
          >
            <X size={24} />
          </button>

          <h2 className="mb-2 pr-12 text-3xl font-bold text-white">
            {projectTitle}
          </h2>
          <p className="text-sm text-white/70">
            {period} • {company}
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 [overscroll-behavior-y:contain]">
          <div className="mb-6">
            <h3 className="mb-3 text-xl font-semibold text-[#06b6d4]">
              🎯 The Challenge
            </h3>
            <p className="leading-relaxed text-white/70">{story.problem}</p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-xl font-semibold text-[#06b6d4]">
              ⚡ What I Did
            </h3>
            <ul className="space-y-2">
              {story.actions.map((action, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#06b6d4]"></span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-[#06b6d4]">
              ✨ Results & Impact
            </h3>
            <ul className="space-y-2">
              {story.results.map((result, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#06b6d4]"></span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
