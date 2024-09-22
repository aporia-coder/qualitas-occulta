'use client'

import { MediaItem } from '@/components/MediaItem'
import { MediaPageTitle } from '@/components/MediaPageTitle'
import { Navbar } from '@/components/Navbar'
import { musicData } from '@/utils'

export default function MusicPage() {
  return (
    <>
      <Navbar title="Music" />
      <section className="flex flex-col justify-start gap-20">
        {musicData.map((item) => (
          <MediaItem title={item.title} url={item.url} />
        ))}
      </section>
    </>
  )
}
