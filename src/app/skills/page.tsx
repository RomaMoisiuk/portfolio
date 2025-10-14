import { Search } from 'lucide-react';
import SkillCards from '@/ui/skill-card';
import { geistMono } from '@/ui/fonts';

export default function Page() {
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
          <p className="mb-5 text-2xl font-bold text-white">Tools</p>
          <div className="flex flex-wrap gap-8">
            <SkillCards />
          </div>
        </div>
      </div>
    </>
  );
}
