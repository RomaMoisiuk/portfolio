'use client';

import { geistMono } from '@/ui/fonts';
import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar({ searchText }: { searchText: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set('s', search);
    } else {
      params.delete('s');
    }
    replace(pathname + '?' + params.toString());
  }, 300);

  return (
    <div
      className={`${geistMono.className} flex w-1/2 items-center gap-2 rounded-xl bg-[#142c46] pl-3`}
      role="search"
    >
      <label htmlFor="search-input" className="sr-only">
        {searchText}
      </label>
      <Search size={18} color="white" aria-hidden="true" />
      <input
        id="search-input"
        type="search"
        placeholder={searchText}
        defaultValue={searchParams.get('s') || ''}
        className={`${geistMono.className} w-full border-none bg-transparent px-2 py-2 text-white outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-[#142c46]`}
        onChange={(e) => handleSearch(e.target.value)}
        aria-label={searchText}
      />
    </div>
  );
}
