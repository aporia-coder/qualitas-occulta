'use client'

import Loader from '@/components/Loader'
import { Navbar } from '@/components/Navbar'
import { musicData } from '@/utils'
import { Suspense } from 'react'
import { MusicItem } from '@/components/MusicItem'

export default function MusicPage() {
  return (
    <>
      <Navbar title="Music" />
      {musicData.map((item) => (
        <Suspense fallback={<Loader />} key={item.url}>
          <MusicItem title={item.title} url={item.url} />
        </Suspense>
      ))}
    </>
  )
}
