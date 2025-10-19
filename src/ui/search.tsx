'use client';

import { geistMono } from '@/ui/fonts';
import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar({ searchText }: { searchText: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  console.log(searchParams);

  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set('s', search);
    } else {
      params.delete('s');
    }
    console.log(pathname + '?' + params.toString());
    replace(pathname + '?' + params.toString());
  }, 300);

  return (
    <div
      className={`${geistMono.className} flex w-1/2 items-center gap-2 rounded-xl bg-[#2a2a2a] pl-3`}
    >
      <Search size={18} color="white" />
      <input
        type="text"
        placeholder={searchText}
        className={`${geistMono.className} w-full border-none bg-transparent px-2 py-2 text-white outline-none`}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
