'use client';

import { hankenGrotesk } from '@/ui/fonts';
import SearchBar from '@/ui/search';
import { ArrowDown } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface ISkillSection {
  id: string;
  title: string;
  skills: Array<ISkills>;
}

interface ISkills {
  title: string;
  description: string;
}

const skillSections: Array<ISkillSection> = [
  {
    id: 'backend-engineering',
    title: '⚙️ Backend Engineering',
    skills: [
      {
        title: 'Node.js & TypeScript',
        description:
          'Design and build production services with Express/NestJS/Koa/Fastify, strong typing, clean modular structure, and performance-minded code.'
      },
      {
        title: 'Service Development',
        description:
          'Implement REST APIs, business logic, background jobs, schedulers, and secure integrations (payments, data imports, third-party APIs).'
      },
      {
        title: 'Microservices',
        description:
          'Split monoliths, define service boundaries/contracts, handle inter-service communication, and manage rollouts safely.'
      }
    ]
  },
  {
    id: 'frontend-engineering',
    title: '🎨 Frontend Engineering',
    skills: [
      {
        title: 'React / Vue / Next.js',
        description:
          'Build robust UIs with modern patterns, state management, and component-driven development for scalable frontends.'
      },
      {
        title: 'Styling & UX',
        description:
          'Tailwind CSS, SCSS/LESS, responsive layouts, accessibility-minded implementation, and performance optimization.'
      }
    ]
  },
  {
    id: 'databases-storage',
    title: '🗄️ Databases & Storage',
    skills: [
      {
        title: 'SQL & NoSQL',
        description:
          'MongoDB, PostgreSQL, MySQL/MariaDB, DynamoDB — schema design, indexing, migrations, and query optimization.'
      },
      {
        title: 'Caching & State',
        description:
          'Redis for caching, rate limiting, queues, and ephemeral state to improve throughput and latency.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: '☁️ Cloud & DevOps',
    skills: [
      {
        title: 'Cloud Platforms',
        description:
          'GCP and AWS for app hosting, storage, and managed services; collaborate closely with DevOps on infra needs.'
      },
      {
        title: 'Containers & IaC',
        description:
          'Docker for local/dev reproducibility; Terraform familiarity for provisioning; CI/CD with Jenkins and GitHub Actions.'
      }
    ]
  },
  {
    id: 'observability-reliability',
    title: '📈 Observability & Reliability',
    skills: [
      {
        title: 'Monitoring & Alerting',
        description:
          'Set up and maintain service monitoring/alerting dashboards, define SLO-oriented signals, and own on-call rotations.'
      },
      {
        title: 'Performance & Stability',
        description:
          'Identify bottlenecks, optimize hot paths, add tests/health checks, and harden services for high availability.'
      }
    ]
  },
  {
    id: 'testing-quality',
    title: '🧪 Testing & Quality',
    skills: [
      {
        title: 'Automated Testing',
        description:
          'Jest, React Testing Library, Mocha, PHPUnit; pragmatic TDD/coverage for unit, integration, and contract tests.'
      },
      {
        title: 'Quality Practices',
        description:
          'Code reviews, linting/formatting, CI gates, and specs that align engineering work with product intent.'
      }
    ]
  },
  {
    id: 'architecture-design',
    title: '🏗️ Architecture & System Design',
    skills: [
      {
        title: 'System Decomposition',
        description:
          'Translate product requirements into services, data models, and workflows; document trade-offs and interfaces.'
      },
      {
        title: 'Scalability & Patterns',
        description:
          'Apply patterns like event-driven flows, queues, idempotency, etc. to keep systems resilient.'
      }
    ]
  },
  {
    id: 'collaboration-leadership',
    title: '🤝 Collaboration & Leadership',
    skills: [
      {
        title: 'Cross-Team Delivery',
        description:
          'Work closely with PM, Design, QA, DevOps, and peer teams; clarify specs, plan milestones, and align timelines.'
      },
      {
        title: 'Mentoring & Onboarding',
        description:
          'Onboard new teammates, share context and standards, run reviews, and support estimations and task splitting.'
      },
      {
        title: 'Technical Interviews',
        description:
          'Conduct technical interviews, provide feedback to hiring managers, and help with candidate selection.'
      }
    ]
  },
  {
    id: 'tooling-workflow',
    title: '🧰 Tooling & Workflow',
    skills: [
      {
        title: 'Developer Experience',
        description:
          'Monorepos with Turborepo, efficient local setups, scripts, and docs that speed up day-to-day development.'
      },
      {
        title: 'Mapping & Specialized Tools',
        description:
          'Mapbox GL and related libraries for geospatial visualizations when projects require spatial data.'
      }
    ]
  }
];

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
                      className={`transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all ${
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
