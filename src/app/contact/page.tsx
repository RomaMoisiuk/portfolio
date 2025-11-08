import { socialLinksData } from '@/data/social-links-data';
import { hankenGrotesk } from '@/ui/fonts';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const gitHubIconPath = socialLinksData[0].svgPath;
  const linkedInIconPath = socialLinksData[1].svgPath;
  const emailIconPath = socialLinksData[2].svgPath;

  const contactMethods = [
    {
      iconPath: emailIconPath,
      label: 'Email',
      value: 'moisiuk.roman@gmail.com',
      href: 'mailto:moisiuk.roman@gmail.com',
      description: 'Use it if you prefer email communication',
    },
    {
      iconPath: linkedInIconPath,
      label: 'LinkedIn',
      value: 'Roman Moisiuk',
      href: 'https://www.linkedin.com/in/roman-m-914336b4/',
      description: 'Connect with me on LinkedIn',
    },
    {
      iconPath: gitHubIconPath,
      label: 'GitHub',
      value: '@RomaMoisiuk',
      href: 'https://github.com/RomaMoisiuk',
      description: 'Check out my GitHub',
    },
  ];

  return (
    <div className={`${hankenGrotesk.className} p-8`}>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-white">Let&apos;s Connect</h1>
        <p className="mb-12 text-lg text-white/70">
          Feel free to reach out to discuss new opportunities, interesting projects,
          or just have a chat about software development.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method) => {
            return (
              <Link
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                className="group rounded-xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-[#06b6d4]/20 p-3">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="white"
                    >
                      <title>{method.label}</title>
                      <path d={method.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {method.label}
                  </h3>
                </div>
                <p className="mb-2 font-mono text-sm text-white/70">
                  {method.value}
                </p>
                <p className="text-sm text-white/70">{method.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#06b6d4] opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Connect</span>
                  <ExternalLink size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
