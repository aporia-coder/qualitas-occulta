import ReactPlayer from 'react-player'
import { MediaItemTitle } from '../MediaItemTitle'
import { MusicItemProps } from './types'

export const MusicItem = ({ url, title }: MusicItemProps) => {
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
