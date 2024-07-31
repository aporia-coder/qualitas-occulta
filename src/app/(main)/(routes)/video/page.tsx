'use client'

import { MediaItem } from '@/components/MediaItem'

const VideoPage = () => {
  return (
    <section className="flex items-center h-full px-8">
      <div className="flex-col justify-start">
        <MediaItem
          title="Aporia Resurrection"
          url="https://soundcloud.com/aporiatrauma/aporia-resurrection?si=35707d9a4f034e84b13798b431a4414b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
    </section>
  )
}

export default VideoPage
