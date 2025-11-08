import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'Technologies and tools I work with: JavaScript, TypeScript, Node.js, React, Next.js, MongoDB, PostgreSQL, AWS, GCP, Docker, and more.',
  openGraph: {
    title: 'Tools | Roman Moisiuk',
    description:
      'Technologies and tools I work with including JavaScript, TypeScript, Node.js, React, and cloud platforms.',
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

