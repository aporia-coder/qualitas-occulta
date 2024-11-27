import Markdown from 'react-markdown'
import { MediaItemTitle } from '../MediaItemTitle'
import { BlogItemProps } from './types'
import { Quote } from '../Quote'

export const BlogItem = ({ title, body, quote }: BlogItemProps) => {
  return (
    <section className="flex flex-col gap-9">
      <MediaItemTitle>{title}</MediaItemTitle>
      <div>{quote && <Quote {...quote} />}</div>
      <div className="text-zinc-300 text-2xl leading-10 tracking-wide whitespace-pre-wrap">
        <Markdown>{body}</Markdown>
      </div>
    </section>
  )
}
