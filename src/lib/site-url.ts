/**
 * Get the site URL from environment variables
 * Supports Vercel's VERCEL_URL and custom SITE_URL/NEXT_PUBLIC_SITE_URL
 * Falls back to localhost for development
 */
export function getSiteUrl(): string {
  // Check for custom SITE_URL first (most common for Vercel)
  if (process.env.SITE_URL) {
    return process.env.SITE_URL;
  }

  // Check for NEXT_PUBLIC_SITE_URL (if needed client-side)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Use Vercel's VERCEL_URL (automatically provided)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Fallback to localhost for development
  return process.env.NODE_ENV === 'production'
    ? 'https://roman-moisiuk.com' // Fallback if nothing is set
    : 'http://localhost:3000';
}

