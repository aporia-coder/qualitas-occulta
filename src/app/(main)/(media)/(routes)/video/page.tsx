'use client'

import { MediaItem } from '@/components/MediaItem'
import { MediaPageTitle } from '@/components/MediaPageTitle'
import { videos } from '@/utils'

const VideoPage = () => {
  return (
    <>
      <MediaPageTitle>Video</MediaPageTitle>
      <section className="flex items-center h-full px-8">
        <div className="flex flex-col justify-start gap-20">
          {videos.map((video) => (
            <MediaItem title={video.title} url={video.url} />
          ))}
        </div>
      </section>
    </>
  )
}

export default VideoPage
