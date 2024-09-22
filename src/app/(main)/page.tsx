'use client'

import { characterAnimation, reveal, wordAnim } from '@/animations'
import { CanvasWrapper } from '@/components/CanvasWrapper'
import { Navbar } from '@/components/Navbar'
import { SaintTeresa } from '@/components/SaintTeresa'
import { TextScroller } from '@/components/TextScroller'
import { TitleLink } from '@/components/TitleLink'

export default function Home() {
  const mainLinks = [
    {
      title: 'music',
      link: '/music',
    },
    {
      title: 'video',
      link: '/video',
    },
    {
      title: 'software',
      link: '',
    },
    {
      title: 'blog',
      link: '/blog',
    },
    {
      title: 'contact',
      link: '',
    },
  ]

  return (
    <div className="h-screen overflow-y-hidden">
      <div className="flex justify-between items-center px-8 h-full">
        <ul>
          {mainLinks.map(({ title, link }) => (
            <li>
              <TitleLink
                href={link}
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
