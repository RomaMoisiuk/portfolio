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
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className={`${hankenGrotesk.className} animate-in fade-in zoom-in-95 relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-[#2a2a2a] p-8 shadow-2xl duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h2 className="mb-2 text-3xl font-bold text-white">{projectTitle}</h2>
          <p className="text-sm text-white/50">
            {period} • {company}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-3 text-xl font-semibold text-[#2783CF]">
            🎯 The Challenge
          </h3>
          <p className="leading-relaxed text-white/80">{story.problem}</p>
        </div>

        <div className="mb-6">
          <h3 className="mb-3 text-xl font-semibold text-[#2783CF]">
            ⚡ What I Did
          </h3>
          <ul className="space-y-2">
            {story.actions.map((action, i) => (
              <li key={i} className="flex gap-3 leading-relaxed text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2783CF]"></span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#2783CF]">
            ✨ Results & Impact
          </h3>
          <ul className="space-y-2">
            {story.results.map((result, i) => (
              <li key={i} className="flex gap-3 leading-relaxed text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2783CF]"></span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
