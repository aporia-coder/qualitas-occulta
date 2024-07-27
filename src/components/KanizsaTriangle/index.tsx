'use client'

import { useEffect, useRef } from 'react'
import styles from './styles.module.css'

export const KanizsaTriangle = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef?.current.querySelectorAll(
        `.${styles.kanizsa} > *`
      )

      elements.forEach((element) => {
        // @ts-ignore
        element.style.transform = 'rotate(180deg)'
      })
    }
  }, [])
  return (
    <div className={styles.kanizsa} ref={containerRef}>
      <div className={styles.top}></div>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.leftcircle}></div>
      <div className={styles.rightcircle}></div>
      <div className={styles.bottomcircle}></div>
    </div>
  )
}
