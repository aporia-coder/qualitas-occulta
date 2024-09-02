import Markdown from 'react-markdown'
import { MediaItemTitle } from '../MediaItemTitle'
import { BlogItemProps } from './types'

export const BlogItem = ({ title, body }: BlogItemProps) => {
  return (
    <section className="flex flex-col gap-9">
      <MediaItemTitle>{title}</MediaItemTitle>
      <div className="text-zinc-300 text-2xl leading-10 tracking-wide whitespace-pre-wrap">
        <Markdown>{body}</Markdown>
      </div>
    </section>
  )
}
