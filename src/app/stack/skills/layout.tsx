import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Comprehensive overview of my technical skills including Backend Engineering, Frontend Development, Databases, Cloud & DevOps, Testing, and more.',
  openGraph: {
    title: 'Skills | Roman Moisiuk',
    description:
      'Explore my technical skills in Backend Engineering, Frontend Development, Databases, Cloud & DevOps, and more.',
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

