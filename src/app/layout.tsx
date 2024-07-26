import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { Cursor } from '@/components/Cursor'
import { TextScroller } from '@/components/TextScroller'

export const metadata: Metadata = {
  title: '∴aporia∴',
  description: 'KUNST-RELIGION',
}

const oldLondon = localFont({
  src: '../../public/OldLondon.ttf',
  variable: '--font-oldLondon',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={oldLondon.variable}>
        <Cursor />
        <main className="bg-zinc-900 text-gray-200 h-full">
          <TextScroller direction={1} />
          {children}
          <TextScroller direction={-1} className="bottom-0" />
        </main>
      </body>
    </html>
  )
}
