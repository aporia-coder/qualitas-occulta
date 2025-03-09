'use client'

import { characterAnimation, reveal, wordAnim } from '@/animations'
import { CanvasWrapper } from '@/components/CanvasWrapper'
import { SaintTeresa } from '@/components/SaintTeresa'
import { TitleLink } from '@/components/TitleLink'
import { AnchorTarget } from '@/globals/types'

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
      link: 'https://github.com/aporia-coder',
      target: AnchorTarget.BLANK,
    },
    {
      title: 'art',
      link: 'https://www.instagram.com/soul_qua_catacli',
      target: AnchorTarget.BLANK,
    },
    {
      title: 'blog',
      link: '/blog',
    },
    {
      title: 'contact',
      link: 'http://www.termina11y.online/',
      target: AnchorTarget.BLANK,
    },
  ]

  return (
    <div className="h-screen overflow-y-hidden">
      <div className="flex justify-between items-center px-8 h-full">
        <ul>
          {mainLinks.map(({ title, link, target }) => (
            <li key={title}>
              <TitleLink
                href={link}
                label={title}
                characterAnimation={characterAnimation}
                wordAnimation={wordAnim}
                target={target}
              />
            </li>
          ))}
        </ul>
        <CanvasWrapper animation={reveal} model={<SaintTeresa />} />
      </div>
    </div>
  )
}
