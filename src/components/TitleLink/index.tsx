import { motion, stagger, useAnimation, Variants } from 'framer-motion'
import Link from 'next/link'
import { TitleLinkProps } from './types'

export const TitleLink = ({
  label,
  href,
  wordAnimation,
  characterAnimation,
}: TitleLinkProps) => {
  return (
    <Link href={href}>
      <motion.h1
        className="text-6xl font-extralight font-oldLondon text-zinc-300 hover:text-white transition flex justify-center"
        role="heading"
        aria-label={label}
        variants={wordAnimation}
        animate="visible"
        initial="hidden"
      >
        {label.split('').map((char, idx) => (
          <motion.span
            key={`id_${char}-${idx}`}
            variants={characterAnimation}
            aria-hidden="true"
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </Link>
  )
}
