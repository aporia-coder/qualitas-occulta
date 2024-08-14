'use client'

import { MediaItem } from '@/components/MediaItem'
import { MediaPageTitle } from '@/components/MediaPageTitle'
import { musicData } from '@/utils'

export default function MusicPage() {
  return (
    <>
      <MediaPageTitle>Music</MediaPageTitle>
      <div className="flex flex-col justify-start gap-20">
        {musicData.map((item) => (
          <MediaItem title={item.title} url={item.url} />
        ))}
      </div>
    </>
  )
}
