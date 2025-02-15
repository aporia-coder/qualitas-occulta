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

      {videos.map((video) => (
        <Suspense fallback={<Loader />} key={video.url}>
          <MediaItem title={video.title} url={video.url} />
        </Suspense>
      ))}
    </>
  )
}

export default VideoPage
