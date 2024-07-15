import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import '../globals.css'
import { ReactNode } from 'react'
import { cn } from '@/utils'

const font = DM_Sans({ subsets: ['latin'] })
// const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QUALITAS OCCULTA',
  description: 'KUNST-RELIGION',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="h-full bg-zinc-800 text-zinc-400">
          <section className="px-5 flex flex-col justify-center h-full">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
