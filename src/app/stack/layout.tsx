'use client';

import React from 'react';
import '../globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { geistMono } from '@/ui/fonts';
import clsx from 'clsx';

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '';
  console.log(pathname);
  const tabBase = `${geistMono.className} rounded-lg px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 transition`;
  const isTools = pathname.includes('/stack/tools');
  const isSkills = pathname.includes('/stack/skills');

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <Link
          href="/stack/skills"
          className={clsx(tabBase, isSkills && 'bg-white/5 text-white')}
          aria-current={isSkills ? 'page' : undefined}
        >
          Skills
        </Link>
        <Link
          href="/stack/tools"
          className={clsx(tabBase, isTools && 'bg-white/5 text-white')}
          aria-current={isTools ? 'page' : undefined}
        >
          Tools
        </Link>
      </div>
      <div>{children}</div>
    </section>
  );
}
