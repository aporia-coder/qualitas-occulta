'use client'

import Loader from '@/components/Loader'
import { MediaItem } from '@/components/MediaItem'
import { Navbar } from '@/components/Navbar'
import { musicData } from '@/utils'
import { Suspense } from 'react'

export default function MusicPage() {
  return (
    <>
      <Navbar title="Music" />
      {musicData.map((item) => (
        <Suspense fallback={<Loader />} key={item.url}>
          <MediaItem title={item.title} url={item.url} />
        </Suspense>
      ))}
    </>
  )
}
