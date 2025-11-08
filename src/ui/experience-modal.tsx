'use client';

import { hankenGrotesk } from '@/ui/fonts';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management and keyboard trap
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Focus the close button when modal opens
    closeButtonRef.current?.focus();

    // Trap focus within modal
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 [overscroll-behavior:contain]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        ref={modalRef}
        className={`${hankenGrotesk.className} animate-in fade-in zoom-in-95 relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-xl bg-[#142c46] pb-8 shadow-2xl duration-200 [overscroll-behavior-y:contain]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex-shrink-0 rounded-t-xl bg-[#142c46] p-8 pb-6">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 text-white/70 transition-colors hover:bg-[#06b6d4] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-[#142c46]"
            aria-label="Close modal"
          >
            <X size={24} aria-hidden="true" />
          </button>

          <h2 id="modal-title" className="mb-2 pr-12 text-3xl font-bold text-white">
            {projectTitle}
          </h2>
          <p id="modal-description" className="text-sm text-white/70">
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
