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
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-sm items-start">
              <div className="grid gap-1">
                <h3 className="font-semibold">Contacto</h3>
                <Link href="mailto:info@asmeigas.es" target="_blank" prefetch={false}>
                  info@asmeigas.es
                </Link>
                {/* <Link href="tel:+34123456789" target="_blank" prefetch={false}>
                  +34 123 456 789
                </Link> */}
              </div>
              <div className="grid gap-1">
                <h3 className="font-semibold">Redes</h3>
                <Link href="https://www.instagram.com/natacionasmeigas" target="_blank" prefetch={false}>Instagram</Link>
              </div>
              <div className="grid gap-1">
                <div className='font-semibold flex gap-2'>
                  <span className='text-2xl'>&copy;</span> Club Natación As Meigas
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}