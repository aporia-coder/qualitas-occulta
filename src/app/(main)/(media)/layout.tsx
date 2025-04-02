'use client'

import { pageOut } from '@/animations'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function MediaLayout({ children }: { children: ReactNode }) {
  return (
    <div className="py-20 px-4 md:px-20">
      <motion.div
        variants={pageOut}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex flex-col justify-start gap-20"
      >
        {children}
      </motion.div>
    </div>
  )
}
