'use client';

import Link from 'next/link';
import { Home, Wrench, FolderOpen, Mail } from 'lucide-react';
import { geistMono } from '@/ui/fonts';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const linkStyle = `${geistMono.className} flex items-center gap-4 rounded-lg px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 transition`;

const links = [
  {
    href: '/',
    text: 'Home',
    icon: Home,
  },
  {
    href: '/skills',
    text: 'Skills',
    icon: Wrench,
  },
  {
    href: '/experience',
    text: 'Experience Overview',
    icon: FolderOpen,
  },
  {
    href: '/contact',
    text: 'Contact',
    icon: Mail,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.text}
            href={link.href}
            className={clsx(linkStyle, {
              'bg-white/5 font-medium text-white/100': pathname === link.href,
            })}
          >
            <Icon size={18} />
            <p>{link.text}</p>
          </Link>
        );
      })}
    </>
  );
}
