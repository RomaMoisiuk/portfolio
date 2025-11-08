'use client';

import { geistMono } from '@/ui/fonts';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import '../globals.css';

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '';
  const tabBase = `${geistMono.className} rounded-lg px-3 py-2 text-white hover:bg-[#06b6d4] transition`;
  const isTools = pathname.includes('/stack/tools');
  const isSkills = pathname.includes('/stack/skills');

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <Link
          href="/stack/skills"
          className={clsx(tabBase, isSkills && 'bg-[#06b6d4] text-white')}
          aria-current={isSkills ? 'page' : undefined}
        >
          Skills
        </Link>
        <Link
          href="/stack/tools"
          className={clsx(tabBase, isTools && 'bg-[#06b6d4] text-white')}
          aria-current={isTools ? 'page' : undefined}
        >
          Tools
        </Link>
      </div>
      <div>{children}</div>
    </section>
  );
}
