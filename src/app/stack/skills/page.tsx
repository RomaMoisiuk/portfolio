'use client';

import { Search, ArrowDown } from 'lucide-react';
import { geistMono } from '@/ui/fonts';
import { useState } from 'react';

export default function SkillsPage() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const skillSections = [
    {
      id: 'automation',
      title: '🧭 Automation & Engineering',
      skills: [
        {
          title: 'Automation Framework Setup',
          description:
            'Building scalable UI, API, and mobile automation frameworks from scratch with modern tools.',
        },
        {
          title: 'Test Architecture Design',
          description:
            'Structuring robust, maintainable automation solutions with clean code principles.',
        },
        {
          title: 'Regression & Smoke Testing',
          description:
            'Implementing fast, stable test suites for continuous delivery.',
        },
        {
          title: 'Cross-functional Collaboration',
          description:
            'Working closely with dev and product teams to align testing with real business needs.',
        },
      ],
    },
    {
      id: 'infra',
      title: '🧰 Infrastructure & CI/CD',
      skills: [
        {
          title: 'CI/CD Integration',
          description:
            'Connecting automation with pipelines (Jenkins, GitHub Actions) for smooth delivery.',
        },
        {
          title: 'Containerized Test Environments',
          description:
            'Using Docker and cloud infrastructure to run tests at scale.',
        },
        {
          title: 'Custom Reporting & Metrics',
          description:
            'Creating dashboards and reports for visibility into test health and coverage.',
        },
        {
          title: 'Cloud Integration',
          description:
            'Running distributed test suites on GCP and other environments.',
        },
      ],
    },
    {
      id: 'qa',
      title: '🧪 Quality & Test',
      skills: [
        {
          title: 'Test Strategy & Planning',
          description: 'Designing test approaches that scale with the product.',
        },
        {
          title: 'Test Estimation & Risk Analysis',
          description:
            'Identifying risks early and ensuring realistic delivery timelines.',
        },
        {
          title: 'Documentation & Process Setup',
          description:
            'Creating clear processes and knowledge bases for teams.',
        },
        {
          title: 'Mentorship & Leadership',
          description:
            'Supporting team growth through guidance, reviews, and shared best practices.',
        },
      ],
    },
    {
      id: 'tech',
      title: '🧑‍💻 Technical Proficiency',
      skills: [
        {
          title: 'JavaScript / TypeScript',
          description: 'Main languages for automation and tooling.',
        },
        {
          title: 'Automation Tools',
          description:
            'Nightwatch, Cypress, Selenium, Appium, WebdriverIO, Mocha.',
        },
        {
          title: 'Version Control',
          description: 'Git, GitHub, Jira for collaboration and tracking.',
        },
        {
          title: 'API Testing',
          description:
            'Postman and custom frameworks for REST API verification.',
        },
      ],
    },
    {
      id: 'soft_skills',
      title: '🧭 Soft Skills & Domain Experience',
      skills: [
        {
          title: 'Problem Solving',
          description:
            'Identifying bottlenecks and engineering effective solutions.',
        },
        {
          title: 'Client Communication',
          description:
            'Translating technical details into clear business value.',
        },
        {
          title: 'Knowledge Sharing',
          description: 'Conducting training and QA process onboarding.',
        },
        {
          title: 'Domain Expertise',
          description:
            'SaaS and healthcare projects, long-term product delivery.',
        },
      ],
    },
  ];

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
          <div className="space-y-4">
            {skillSections.map((section) => {
              const isOpen = openSections.includes(section.id);
              return (
                <div
                  key={section.id}
                  className="rounded-xl bg-[#2a2a2a] p-4 transition hover:bg-white/10"
                >
                  <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() => toggleSection(section.id)}
                  >
                    <p className="text-xl font-bold text-white">
                      {section.title}
                    </p>
                    <ArrowDown
                      color="white"
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'mt-5 max-h-[1000px] opacity-100'
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
