'use client';

import Link from 'next/link';
import { Home, Wrench, FolderOpen, Mail } from 'lucide-react';
import { geistMono } from '@/ui/fonts';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const linkStyle = `${geistMono.className} flex items-center gap-4 rounded-lg px-3 py-2 text-white hover:bg-[#06b6d4] transition`;

const links = [
  {
    href: '/',
    text: 'Home',
    icon: Home,
  },
  {
    href: '/stack/skills',
    text: 'Stack',
    icon: Wrench,
  },
  {
    href: '/experience',
    text: 'Experience',
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
    <ul className="list-none">
      {links.map(({ href, text, icon }) => {
        const active = isActive(pathname, href);
        const Icon = icon;

        return (
          <li className="mb-2" key={text}>
            <Link
              href={href}
              aria-current={active ? 'page' : undefined}
              className={clsx(linkStyle, {
                'bg-[#06b6d4] font-medium text-white': active,
              })}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{text}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function isActive(pathname: string, href: string) {
  const getRoot = (s: string) => s.split('/')[1];
  const a = getRoot(pathname);
  const b = getRoot(href);
  return a === b;
}
