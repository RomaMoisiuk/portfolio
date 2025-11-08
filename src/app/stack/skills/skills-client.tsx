'use client';

import { hankenGrotesk } from '@/ui/fonts';
import SearchBar from '@/ui/search';
import { ArrowDown } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { skillSections } from './consts';
import { ISkills, ISkillSection } from './types';


export default function SkillSectionClient() {
  const [openSection, setOpenSection] = useState<string | null>();
  const searchValue = useSearchParams().get('s')?.toLowerCase();

  const filteredSkills = searchValue
    ? skillSections
        .map((skillSection: ISkillSection) => {
          return {
            ...skillSection,
            skills: skillSection.skills.filter((skill: ISkills) => {
              return (
                skill.title.toLowerCase().includes(searchValue) ||
                skill.description.toLowerCase().includes(searchValue)
              );
            }),
          };
        })
        .filter((section: ISkillSection) => {
          return (
            section.skills.length > 0 ||
            section.title.toLowerCase().includes(searchValue)
          );
        })
    : skillSections;

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  if (filteredSkills.length === 0) {
    return (
      <>
        <SearchBar searchText="Search for skills..." />
        <div className={`${hankenGrotesk.className} mt-10`}>
          <div className="mt-10">
            <p className="mb-5 text-2xl font-bold text-white">Skills</p>
            <div className="text-white">
              <p className="mb-2">No results by the given search parameters.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SearchBar searchText="Search for skills..." />
      <div className={`${hankenGrotesk.className} mt-10`}>
        <div className="mt-10">
          <p className="mb-5 text-2xl font-bold text-white">Skills</p>
          <div className="space-y-4">
            {filteredSkills.map((section) => {
              const isOpen = openSection === section.id;
              return (
                <div
                  key={section.id}
                  className={`rounded-xl transition hover:bg-white/10 ${isOpen ? 'bg-white/10' : 'bg-[#142c46]'}`}
                >
                  <button
                    type="button"
                    className="flex w-full p-4 cursor-pointer items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-[#142c46]"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isOpen}
                    aria-controls={`section-${section.id}`}
                  >
                    <span id={`section-title-${section.id}`} className="text-xl font-bold text-white">
                      {section.title}
                    </span>
                    <ArrowDown
                      color="white"
                      aria-hidden="true"
                      className={`transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`section-${section.id}`}
                    role="region"
                    aria-labelledby={`section-title-${section.id}`}
                    className={`overflow-hidden transition-all ${
                      isOpen
                        ? 'py-5 max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-10">
                      {section.skills.map((skill, index) => (
                        <div
                          key={index}
                          className={
                            index !== section.skills.length - 1 ? 'mb-5' : ''
                          }
                        >
                          <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
                            {skill.title}
                          </div>
                          <p className="text-sm text-white/70">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
