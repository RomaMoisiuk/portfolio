import { hankenGrotesk } from '@/ui/fonts';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { socialLinksData } from '@/data/social-links-data';

export default function ContactPage() {
  const gitHubIconPath = socialLinksData[0].svgPath;
  const linkedInIconPath = socialLinksData[1].svgPath;
  const emailIconPath = socialLinksData[2].svgPath;

  const contactMethods = [
    {
      iconPath: emailIconPath,
      label: 'Email',
      value: 'polovynkoilya@gmail.com',
      href: 'mailto:polovynkoilya@gmail.com',
      description: 'Best way to reach me for opportunities',
    },
    {
      iconPath: linkedInIconPath,
      label: 'LinkedIn',
      value: 'Illia Polovynko',
      href: 'https://www.linkedin.com/in/illia-polovynko/',
      description: 'Connect with me professionally',
    },
    {
      iconPath: gitHubIconPath,
      label: 'GitHub',
      value: '@yoypolkin',
      href: 'https://github.com/yoypolkin',
      description: 'Check out my code and projects',
    },
  ];

  return (
    <div className={`${hankenGrotesk.className} p-8`}>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-white">Get In Touch</h1>
        <p className="mb-12 text-lg text-white/70">
          I’m always open to discussing new opportunities, interesting projects,
          or just having a chat about QA and automation.
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
                  <div className="rounded-lg bg-[#2783CF]/20 p-3">
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
                <p className="mb-2 font-mono text-sm text-white/90">
                  {method.value}
                </p>
                <p className="text-sm text-white/60">{method.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#2783CF] opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Connect</span>
                  <ExternalLink size={14} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* <div className="mt-16 rounded-xl bg-[#2783CF]/10 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">
            Let's Build Something Amazing
          </h2>
          <p className="mb-6 text-white/70">
            Whether you need automation expertise, QA leadership, or want to
            discuss testing strategies - I'd love to hear from you.
          </p>
          <Link
            href="mailto:polovynkoilya@gmail.com"
            className="inline-block rounded-lg bg-[#2783CF] px-6 py-3 font-semibold text-white transition-all hover:bg-[#2783CF]/80"
          >
            Download CV
          </Link>
        </div> */}
      </div>
    </div>
  );
}
