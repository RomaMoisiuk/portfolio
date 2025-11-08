import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Explore my professional experience as a Senior Full Stack Engineer. View detailed project stories, challenges solved, and impact delivered across various companies.',
  openGraph: {
    title: 'Experience | Roman Moisiuk',
    description:
      'Explore my professional experience as a Senior Full Stack Engineer with detailed project stories and achievements.',
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

