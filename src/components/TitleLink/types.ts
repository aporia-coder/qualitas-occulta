import { AnchorTarget } from '@/globals/types'
import { Variants } from 'framer-motion'

export interface TitleLinkProps {
  label: string
  href: string
  wordAnimation: Variants
  characterAnimation: Variants
  target?: AnchorTarget
}
