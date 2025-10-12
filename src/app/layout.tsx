import React from 'react';
import './globals.css';
import NavLinks from '@/ui/nav-link';
import Link from 'next/link';
import { geistMono } from '@/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <aside className="fixed hidden h-screen w-64 flex-col bg-[#2a2a2a] p-6 text-white md:flex">
            <nav className="flex flex-col gap-8">
              <NavLinks></NavLinks>
            </nav>
            <button
              className={`${geistMono} mt-auto rounded-lg bg-[#2783CF] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2783CF]/50`}
            >
              Download CV
            </button>
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
