import Link from "next/link";
import { ReactNode } from "react";

export default function Nav() {
  return (
    <nav className="sticky bg-white dark:bg-neutral-900 flex justify-between items-center min-w-screen p-4 md:p-6 border-neutral-300 dark:border-neutral-500 border-1 border-b border-solid md:flex-row xs:flex-col">
      <Link href="/">
        <h1 className="text-neutral-800 dark:text-neutral-50 text-md md:text-lg font-light">
          Temperature Blanket
        </h1>
      </Link>

      <div className="divide-x">
        <HeaderLink href="/summary">
          Summary
        </HeaderLink>

        <HeaderLink href="/networks">
          Networks
        </HeaderLink>
      </div>
    </nav>
  )
}

function HeaderLink({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link href={href} className="py-1 px-2 dark:text-neutral-200 text-neutral-600 md:py-2 md:px-4 md:text-lg sm:text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700">
      {children}
    </Link>
  )
}
