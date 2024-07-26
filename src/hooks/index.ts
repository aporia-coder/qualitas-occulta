import { useEffect, useRef } from 'react'

export const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e

      const mouseX = clientX
      const mouseY = clientY

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    })

    return () => {}
  }, [])

  return cursorRef
}
