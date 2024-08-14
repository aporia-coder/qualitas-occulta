import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { Cursor } from '@/components/Cursor'

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
        <main className="bg-zinc-900 text-gray-200 min-h-full">{children}</main>
      </body>
    </html>
  )
}
