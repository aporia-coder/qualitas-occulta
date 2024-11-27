'use client'

import { MediaItem } from '@/components/MediaItem'
import { Navbar } from '@/components/Navbar'
import { videos } from '@/utils'

const VideoPage = () => {
  return (
    <>
      <Navbar title="Video" />
      <section className="flex flex-col justify-start gap-20">
        {videos.map((video) => (
          <MediaItem title={video.title} url={video.url} key={video.url} />
        ))}
      </section>
    </>
  )
}

export default VideoPage
