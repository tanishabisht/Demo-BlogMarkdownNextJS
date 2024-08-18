'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  // Check if the current route starts with "/blog"
  const isBlogRoute = pathname.startsWith('/blog');

  return (
    <header>
      {isBlogRoute && (
        <Link href="/" legacyBehavior>
          <a className="btn-back">Go Back</a>
        </Link>
      )}
      <Link href="/" passHref legacyBehavior>
        <h2>Dev Blog</h2>
      </Link>
    </header>
  );
}

