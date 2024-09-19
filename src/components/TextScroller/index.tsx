'use client'

import Ticker from 'framer-motion-ticker'
import { TextScrollerProps } from './types'
import { ScrollerItem } from '../ScrollerItem'
import { cn } from '@/utils'

export const TextScroller = ({
  duration = 4,
  direction,
  items = ['qualitas occulta', 'kunstreligion'],
  className,
}: TextScrollerProps) => {
  return (
    <div className={cn(className, 'fixed')}>
      <Ticker duration={duration} direction={direction}>
        {items.map((item) => {
          return <ScrollerItem item={item} key={item} />
        })}
      </Ticker>
    </div>
  )
}
