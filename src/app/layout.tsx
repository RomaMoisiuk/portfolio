import NavLinks from '@/ui/nav-link';
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Roman Moisiuk — Senior Full Stack Engineer',
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
        <div className="flex min-h-screen">
          <aside className="fixed hidden h-screen w-64 flex-col bg-[#2a2a2a] p-6 text-white md:flex">
            <nav className="flex flex-col gap-8">
              <NavLinks></NavLinks>
            </nav>
          </aside>

          <main className="flex-1 bg-[#212121] p-8 md:ml-64">
            <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
