import { Search, Settings } from 'lucide-react';
import { geistMono } from '@/ui/fonts';

export default function SkillsPage() {
  return (
    <>
      <div
        className={`${geistMono.className} flex w-1/2 items-center gap-2 rounded-xl bg-[#2a2a2a] pl-3`}
      >
        <Search size={18} color="white" />
        <input
          type="text"
          placeholder="Search for skills..."
          className={`${geistMono.className} w-full border-none bg-transparent px-2 py-2 text-white outline-none`}
        />
      </div>
      <div className="mt-10">
        <div className="mt-10">
          <p className="mb-5 text-2xl font-bold text-white">Skills</p>
          <div className="rounded-xl bg-[#2a2a2a] p-4 transition hover:bg-white/10">
            <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
              <Settings className="h-5 w-5 text-[#61AFEF]" />
              Automation Framework Setup
            </div>
            <p className="text-sm text-white/70">
              Building scalable UI, API, and mobile automation frameworks from
              scratch with modern tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
