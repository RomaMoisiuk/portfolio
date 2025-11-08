import { socialLinksData } from '@/data/social-links-data';
import { geistMono, hankenGrotesk } from '@/ui/fonts';
import SocialLink from '@/ui/social-link';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Senior Full Stack Engineer with 9+ years of experience building scalable web applications. Specialized in Node.js, TypeScript, React, and cloud infrastructure.',
  openGraph: {
    title: 'Roman Moisiuk - Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer with 9+ years of experience building scalable web applications.',
  },
};

const fontFamily = hankenGrotesk.className;

export default function Page() {
  return (
    <>
      <div className="relative aspect-[4/1] w-full rounded-xl">
        <Image
          src="/main-bg.jpeg"
          alt="Digital technology background representing software engineering and web development"
          fill
          priority
          className="rounded-xl object-cover"
        />
        <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full border-8 border-[#0d1b2a] sm:h-32 sm:w-32 md:left-20 md:h-48 md:w-48 md:-translate-x-0">
          <Image
            src="/me.jpg"
            alt="Roman Moisiuk - Senior Full Stack Engineer"
            width={400}
            height={400}
            className="z-10 rounded-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="mt-18 flex w-full flex-col rounded-xl p-6 sm:mt-16 md:mt-20 md:p-8">
        <h1
          className={`${fontFamily} text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl`}
        >
          Roman Moisiuk
        </h1>
        <h2
          className={`${fontFamily} text-xl font-medium text-white/70 md:text-2xl`}
        >
          Senior Full Stack Engineer
        </h2>
        <p
          className={`${fontFamily} mt-6 max-w-xl text-base text-white md:mt-10 md:text-lg`}
        >
          Hi 👋, my name is Roman. I’m a Senior Full Stack Engineer.
        </p>
        <p
          className={`${fontFamily} mt-2 max-w-xl text-base text-white md:text-lg`}
        >
          I have 9 years of hands-on experience in building and scaling web applications using modern technologies. 💻
        </p>
        <p
          className={`${fontFamily} mt-2 max-w-xl text-base text-white/80 md:text-lg`}
        >
          📍 Romania 🇷🇴
        </p>
      </div>
      <nav aria-label="Primary actions" className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className={`${geistMono} rounded-lg bg-[#06b6d4] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#06b6d4]/50 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-[#0d1b2a]`}
        >
          Contact Me
        </Link>
        <Link
          href="/experience"
          className={`${geistMono} rounded-lg border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d1b2a]`}
        >
          View Projects
        </Link>
      </nav>
      <nav aria-label="Social media links" className="mt-10 flex items-center gap-4 text-2xl text-white/70">
        {socialLinksData.map((link) => (
          <SocialLink
            key={link.title}
            href={link.href}
            title={link.title}
            svgPath={link.svgPath}
          ></SocialLink>
        ))}
      </nav>
    </>
  );
}
