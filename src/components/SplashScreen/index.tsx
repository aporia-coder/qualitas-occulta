'use client'

import { cn } from '@/utils'
import { motion, useAnimation } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const SplashScreen = ({ children }: { children: ReactNode }) => {
  const [visibility, setVisibility] = useState('invisible')
  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
    }
    if (!inView) {
      ctrls.start('hidden')
    }
  }, [ctrls, inView])

  const splashScreenAnim = {
    hidden: {
      width: 0,
    },
    visible: {
      width: 0,
      transition: {
        duration: 2,
      },
    },
  }

  return (
    <motion.div
      className="h-screen bg-white"
      ref={ref}
      animate={ctrls}
      variants={splashScreenAnim}
      onAnimationComplete={() => setVisibility('visible')}
    >
      <div className={visibility}>{children}</div>
    </motion.div>
  )
}
