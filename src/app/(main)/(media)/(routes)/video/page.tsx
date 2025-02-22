import Loader from '@/components/Loader'
import { VideoItem } from '@/components/VideoItem'
import { Navbar } from '@/components/Navbar'
import { supabase } from '@/lib/supabaseApi'
import { Suspense } from 'react'

const VideoPage = async () => {
  const { data: videos } = await supabase.from('Video').select('*')

  return (
    <>
      <Navbar title="Video" />
      {videos?.map((video) => (
        <Suspense fallback={<Loader />} key={video.url}>
          <VideoItem title={video.title} url={video.url} />
        </Suspense>
      ))}
    </>
  )
}

export default VideoPage
