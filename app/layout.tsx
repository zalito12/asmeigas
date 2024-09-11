import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Link from 'next/link'
import Header from '@/components/component/header'
import { draftMode } from 'next/headers'
import { getPages } from '@/lib/contentful/api'

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '700'],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = draftMode();
  const pages = await getPages(isEnabled);
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <div className="flex flex-col min-h-[100dvh]">
          <Header items={pages} />
          <main className="flex-1 mt-14">
            {children}
          </main>
          <footer className="flex flex-col gap-2 bg-muted p-6 md:py-12 w-full">
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
              <div className="grid gap-1">
                <h3 className="font-semibold">Company</h3>
                <Link href="#" prefetch={false}>
                  About Us
                </Link>
                <Link href="#" prefetch={false}>
                  Our Team
                </Link>
                <Link href="#" prefetch={false}>
                  Careers
                </Link>
                <Link href="#" prefetch={false}>
                  News
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="font-semibold">Products</h3>
                <Link href="#" prefetch={false}>
                  Men
                </Link>
                <Link href="#" prefetch={false}>
                  Women
                </Link>
                <Link href="#" prefetch={false}>
                  Kids
                </Link>
                <Link href="#" prefetch={false}>
                  Accessories
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="font-semibold">Resources</h3>
                <Link href="#" prefetch={false}>
                  Blog
                </Link>
                <Link href="#" prefetch={false}>
                  Community
                </Link>
                <Link href="#" prefetch={false}>
                  Support
                </Link>
                <Link href="#" prefetch={false}>
                  FAQs
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="font-semibold">Legal</h3>
                <Link href="#" prefetch={false}>
                  Privacy Policy
                </Link>
                <Link href="#" prefetch={false}>
                  Terms of Service
                </Link>
                <Link href="#" prefetch={false}>
                  Cookie Policy
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="font-semibold">Contact</h3>
                <Link href="#" prefetch={false}>
                  Support
                </Link>
                <Link href="#" prefetch={false}>
                  Sales
                </Link>
                <Link href="#" prefetch={false}>
                  Press
                </Link>
                <Link href="#" prefetch={false}>
                  Partnerships
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
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