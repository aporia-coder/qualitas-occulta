'use client'

import { useCursor } from '@/hooks'

export const Cursor = () => {
  const cursorRef = useCursor()
  return (
    <div
      ref={cursorRef}
      className="overflow-hidden hidden md:block pointer-events-none fixed h-4 w-4 rounded-full bg-white z-50 mix-blend-difference"
    />
  )
}
