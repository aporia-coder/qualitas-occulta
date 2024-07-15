import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ReactNode } from 'react'
import { cn } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <main className="h-full bg-zinc-800 text-zinc-400">
          <section className="px-5 flex flex-col justify-center h-full">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
