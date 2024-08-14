'use client'

import { fadeOut } from '@/animations'
import { KanizsaTriangle } from '@/components/KanizsaTriangle'
import { TextScroller } from '@/components/TextScroller'
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState<boolean>(false)

  return (
    <>
      <TextScroller direction={1} />
      {loaded ? (
        children
      ) : (
        <motion.div
          initial="visible"
          animate="hidden"
          variants={fadeOut(1)}
          onAnimationComplete={() => setLoaded(true)}
          className="h-screen overflow-y-hidden flex justify-center items-center"
        >
          <KanizsaTriangle />
        </motion.div>
      )}
      <TextScroller direction={-1} className="bottom-0" />
    </>
  )
}
