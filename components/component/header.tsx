"use client"

import { useState } from "react"
import Link from "next/link"

export interface HeaderProps {
  items: { slug: string, menuTitle: string }[]
}

export default function Header(props: HeaderProps) {
  const { items } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground fixed top-0 left-0 right-0 z-50">
      <button className="flex items-center justify-center hidden max-xs:block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <WavesIcon className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      <nav
        className={`ml-auto flex gap-5 text-primary-foreground absolute z-50 ${isMenuOpen ? "block" : "max-xs:hidden"
          } block static flex-row bg-transparent right-0 p-4 max-xs:bg-primary max-xs:flex-col max-xs:top-14 max-xs:left-0`}
      >
        {items?.map((page) => (
          <Link key={page.slug} href={page.slug} prefetch={false} className="text-sm font-medium hover:underline underline-offset-4">
            {page.menuTitle}
          </Link>
        ))}
      </nav>
    </header>
  )
}

function WavesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  )
}