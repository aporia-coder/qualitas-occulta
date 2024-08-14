import ReactPlayer from 'react-player'
import { MediaItemProps } from './types'
import { MediaItemTitle } from '../MediaItemTitle'

export const MediaItem = ({ url, title }: MediaItemProps) => {
  return (
    <div className="flex flex-col gap-6">
      <MediaItemTitle>{title}</MediaItemTitle>
      <ReactPlayer url={url} />
    </div>
  )
}
