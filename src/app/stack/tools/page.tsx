import SkillCards from '@/ui/skill-card';
import SearchBar from '@/ui/search';
import { hankenGrotesk } from '@/ui/fonts';
import { Suspense } from 'react';

export default function ToolsPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading tools...</div>}>
      <SearchBar searchText="Search for tools..." />
      <div className={`${hankenGrotesk.className} mt-10`}>
        <div className="mt-10">
          <p className="mb-5 text-2xl font-bold text-white">Tools</p>
          <div className="flex flex-wrap gap-8">
            <SkillCards />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
