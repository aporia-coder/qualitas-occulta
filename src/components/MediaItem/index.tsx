import ReactPlayer from 'react-player'
import { MediaItemProps } from './types'

export const MediaItem = ({ url, title }: MediaItemProps) => {
  return (
    <div>
      <h1 className="text-3xl py-3">{title}</h1>
      <ReactPlayer url={url} />
    </div>
  )
}
