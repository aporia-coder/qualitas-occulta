import ReactPlayer from 'react-player'
import { MediaItemProps } from './types'
import { MediaItemTitle } from '../MediaItemTitle'

export const MediaItem = ({ url, title }: MediaItemProps) => {
  return (
    <div className="flex flex-col gap-6">
      <MediaItemTitle title={title} />
      <div>
        <ReactPlayer
          url={url}
          style={{ maxWidth: '100%', minWidth: 'fit-content' }}
        />
      </div>
    </div>
  )
}
