import { ISkillSection } from "./types";

export const skillSections: Array<ISkillSection> = [
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
