import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import '../styles/globals.css'
import Link from 'next/link'
import Header from '@/components/component/header'
import { draftMode } from 'next/headers'
import { getPages } from '@/lib/contentful/api'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'CN As Meigas',
  },
  description: 'Club de Natación As Meigas'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = draftMode();
  const pages = await getPages(isEnabled);
  return (
    <html lang="gl">
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