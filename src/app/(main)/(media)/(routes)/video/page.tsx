'use client'

import Loader from '@/components/Loader'
import { MediaItem } from '@/components/MediaItem'
import { Navbar } from '@/components/Navbar'
import { videos } from '@/utils'
import { Suspense } from 'react'

const VideoPage = () => {
  return (
    <>
      <Navbar title="Video" />
      <section className="flex flex-col justify-start gap-20">
        {videos.map((video) => (
          <Suspense fallback={<Loader />}>
            <MediaItem title={video.title} url={video.url} key={video.url} />
          </Suspense>
        ))}
      </section>
    </>
  )
}

export default VideoPage
