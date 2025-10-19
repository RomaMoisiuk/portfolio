import SkillCards from '@/ui/skill-card';
import SearchBar from '@/ui/search';
import { hankenGrotesk } from '../../../ui/fonts';

export default function ToolsPage() {
  return (
    <>
      <SearchBar searchText="Search for tools..." />
      <div className={`${hankenGrotesk.className} mt-10`}>
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
