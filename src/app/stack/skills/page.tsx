import { Suspense } from 'react';
import SkillSectionClient from './skills-client';

export default function SkillsPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading skills...</div>}>
      <SkillSectionClient />
    </Suspense>
  );
}
