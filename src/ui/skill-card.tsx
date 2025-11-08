'use client';

import { useSearchParams } from 'next/navigation';
import { hankenGrotesk } from './fonts';
import SvgIcon from './svg-icon';
import { ISkillCard } from './types';
import { tools } from './consts';


export default function SkillCards() {
  const searchValue = useSearchParams().get('s');
  let filteredTools: Array<ISkillCard> = tools;

  if (searchValue) {
    filteredTools = tools.filter((tool) =>
      tool.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (filteredTools.length === 0) {
    return (
      <div className="text-white">
        <p className="mb-2">No results by the given search parameters.</p>
      </div>
    );
  }

  return filteredTools.map((tool) => {
    return (
      <article
        key={tool.title}
        className={`${hankenGrotesk.className} flex flex-col items-center justify-between gap-4 rounded-xl bg-white/5 p-4 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-[#06b6d4] focus-within:ring-2 focus-within:ring-[#06b6d4] focus-within:ring-offset-2 focus-within:ring-offset-[#0d1b2a]`}
        tabIndex={0}
        aria-label={`${tool.title} technology`}
      >
        <SvgIcon
          title={tool.title}
          path={tool.iconPath}
          color={tool.color}
          needsWhiteBg={tool.needsWhiteBg}
        />
        <h3 className="text-white text-center">{tool.title}</h3>
      </article>
    );
  });
}
