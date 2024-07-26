'use client'

import { characterAnimation, reveal, wordAnim } from '@/animations'
import { CanvasWrapper } from '@/components/CanvasWrapper'
import { SaintTeresa } from '@/components/SaintTeresa'
import { TextScroller } from '@/components/TextScroller'
import { TitleLink } from '@/components/TitleLink'

export default function Home() {
  const mainLinks = [
    {
      title: 'music',
      link: '',
    },
    {
      title: 'video',
      link: '',
    },
    {
      title: 'software',
      link: '',
    },
    {
      title: 'blog',
      link: '',
    },
    {
      title: 'contact',
      link: '',
    },
  ]

  return (
    <div className="h-full overflow-y-hidden">
      <div className="flex justify-between items-center px-8 h-full">
        <ul>
          {mainLinks.map(({ title }) => (
            <li>
              <TitleLink
                href=""
                label={title}
                characterAnimation={characterAnimation}
                wordAnimation={wordAnim}
              />
            </li>
          ))}
        </ul>
        <CanvasWrapper animation={reveal} model={<SaintTeresa />} />
      </div>
    </div>
  )
}
