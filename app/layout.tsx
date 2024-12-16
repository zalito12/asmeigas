import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import '../styles/globals.css'
import Link from 'next/link'
import Header from '@/components/component/header'
import { draftMode } from 'next/headers'
import { getPages } from '@/lib/contentful/api'
import { Metadata } from 'next'
import Footer from '@/components/component/footer'

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
          <Footer />
        </div>
      </body>
    </html>
  )
}