import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Roman Moisiuk. Available for new opportunities, interesting projects, or discussions about software development. Connect via email, LinkedIn, or GitHub.',
  openGraph: {
    title: 'Contact | Roman Moisiuk',
    description:
      'Get in touch with Roman Moisiuk for new opportunities and interesting projects.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

