import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default'
import { MediaItemProps } from './types'
import { MediaItemTitle } from '../MediaItemTitle'

export const VideoItem = ({ url, title }: MediaItemProps) => {
  return (
    <div className="flex flex-col gap-6">
      <MediaItemTitle title={title} />
      <div>
        <MediaPlayer title={title} src={url}>
          <MediaProvider />
          <DefaultVideoLayout
            thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
            icons={defaultLayoutIcons}
          />
        </MediaPlayer>
      </div>
    </div>
  )
}
