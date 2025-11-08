import Link from 'next/link';

export default function SocialLink({
  href,
  title,
  svgPath,
}: {
  href: string;
  title: string;
  svgPath: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-[#0d1b2a] focus:rounded"
      aria-label={`Visit my ${title} profile (opens in new tab)`}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <title>{title}</title>
        <path d={svgPath} />
      </svg>
    </Link>
  );
}
