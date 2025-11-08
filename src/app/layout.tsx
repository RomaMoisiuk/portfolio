import NavLinks from '@/ui/nav-link';
import React from 'react';
import { getSiteUrl } from '@/lib/site-url';
import './globals.css';

const siteUrl = getSiteUrl();

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Roman Moisiuk',
  jobTitle: 'Senior Full Stack Engineer',
  description:
    'Senior Full Stack Engineer with 9+ years of experience building scalable web applications',
  url: siteUrl,
  image: `${siteUrl}/me.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/roman-m-914336b4/',
    'https://github.com/RomaMoisiuk',
  ],
  email: 'moisiuk.roman@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RO',
    addressLocality: 'Romania',
  },
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Roman Moisiuk - Senior Full Stack Engineer',
    template: '%s | Roman Moisiuk',
  },
  description:
    'Senior Full Stack Engineer with 9+ years of experience building scalable web applications. Specialized in Node.js, TypeScript, React, and cloud infrastructure.',
  keywords: [
    'Full Stack Engineer',
    'Senior Developer',
    'Node.js',
    'TypeScript',
    'Vue',
    'React',
    'Express.js',
    'NestJS',
    'Next.js',
    'Web Development',
    'Software Engineer',
    'Romania',
    'Portfolio',
  ],
  authors: [{ name: 'Roman Moisiuk' }],
  creator: 'Roman Moisiuk',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Roman Moisiuk - Portfolio',
    title: 'Roman Moisiuk - Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer with 9+ years of experience building scalable web applications. Specialized in Node.js, TypeScript, React, and cloud infrastructure.',
    images: [
      {
        url: '/me.jpg',
        width: 400,
        height: 400,
        alt: 'Roman Moisiuk - Senior Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roman Moisiuk - Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer with 9+ years of experience building scalable web applications.',
    images: ['/me.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#06b6d4] focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-[#0d1b2a]"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen">
          <aside
            className="fixed hidden h-screen w-64 flex-col bg-[#142c46] p-6 text-white md:flex"
            aria-label="Main navigation"
          >
            <nav aria-label="Primary navigation" className="flex flex-col gap-8">
              <NavLinks></NavLinks>
            </nav>
          </aside>

          <main
            id="main-content"
            className="flex-1 bg-[#0d1b2a] p-8 md:ml-64"
            role="main"
          >
            <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
