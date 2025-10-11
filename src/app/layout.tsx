import React from 'react';
import './globals.css';
import { hankenGrotesk, geistMono } from '@/ui/fonts';
import { Home, Wrench, FolderOpen, Mail } from 'lucide-react';
import Link from 'next/link';

const linkStyle = `${geistMono.className} gap-4 flex items-center font-semibold transition-colors hover:opacity-80 hover:text-[#CBEEF3]`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <aside className="fixed flex h-screen w-64 flex-col bg-[#2a2a2a] p-6 text-white">
            <div
              className={`${hankenGrotesk.className} mb-8 p-10 text-2xl font-bold`}
            >
              Illia Polovynko
            </div>
            <nav className="flex flex-col gap-8">
              <Link href="/" className={linkStyle}>
                <Home size={18} />
                Home
              </Link>
              <Link href="/skills" className={linkStyle}>
                <Wrench size={18} />
                Skills
              </Link>
              <Link href="/experience" className={linkStyle}>
                <FolderOpen size={18} />
                Experience overview
              </Link>
              <Link href="/contact" className={linkStyle}>
                <Mail size={18} />
                Contact
              </Link>
            </nav>
            <div className="mt-auto text-sm text-gray-600">
              © {new Date().getFullYear()}
            </div>
          </aside>
          <main className="ml-64 flex-1 bg-[#212121] p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
