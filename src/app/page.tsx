import Image from 'next/image';
import { hankenGrotesk, geistMono } from '@/ui/fonts';
import Link from 'next/link';
import SocialLink from '@/ui/social-link';
import { socialLinksData } from '@/data/social-links-data';

const fontFamily = hankenGrotesk.className;

export default function Page() {
  return (
    <>
      <div className="relative aspect-[4/1] w-full rounded-xl">
        <Image
          src="/main-bg.png"
          alt="Background with code"
          fill
          priority
          className="rounded-xl object-cover"
        />
        <div className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full border-8 border-[#212121] sm:h-28 sm:w-28 md:left-20 md:h-40 md:w-40 md:-translate-x-0">
          <Image
            src="/me.png"
            alt="Background with code"
            width={400}
            height={400}
            className="z-10 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="mt-14 flex w-full flex-col rounded-xl p-6 sm:mt-16 md:mt-20 md:p-8">
        <h1
          className={`${fontFamily} text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl`}
        >
          Illia Polovynko
        </h1>
        <h2
          className={`${fontFamily} text-xl font-medium text-white/50 md:text-2xl`}
        >
          Senior Automation QA Engineer | SDET
        </h2>
        <p
          className={`${fontFamily} mt-6 max-w-xl text-base text-white md:mt-10 md:text-lg`}
        >
          Hi 👋, my name is Illia. I’m a Software Development Engineer in Test.
        </p>
        <p
          className={`${fontFamily} mt-2 max-w-xl text-base text-white md:text-lg`}
        >
          I’m passionate about building scalable test frameworks, reliable
          automation infrastructure, and solving real problems. 🤖
        </p>
        <p
          className={`${fontFamily} mt-2 max-w-xl text-base text-white/70 md:text-lg`}
        >
          📍 Kharkiv, Ukraine 🇺🇦 · Poznań, Poland 🇵🇱
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className={`${geistMono} rounded-lg bg-[#2783CF] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2783CF]/50`}
        >
          Contact Me
        </Link>
        <Link
          href="/experience"
          className={`${geistMono} rounded-lg border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10`}
        >
          View Projects
        </Link>
      </div>
      <div className="mt-10 flex items-center gap-4 text-2xl text-white/60">
        {socialLinksData.map((link) => (
          <SocialLink
            key={link.title}
            href={link.href}
            title={link.title}
            svgPath={link.svgPath}
          ></SocialLink>
        ))}
      </div>
    </>
  );
}
