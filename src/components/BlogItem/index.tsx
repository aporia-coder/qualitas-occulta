import Markdown from 'react-markdown'
import { MediaItemTitle } from '../MediaItemTitle'
import { Tables } from '../../../database.types'

export const BlogItem = ({ title, body }: Partial<Tables<'BlogPost'>>) => {
  return (
    <section className="flex flex-col gap-9">
      <MediaItemTitle title={title ?? ''} />
      {/* <div>{quote && <Quote {...quote} />}</div> */}
      <div className="text-zinc-300 text-2xl leading-10 tracking-wide whitespace-pre-wrap">
        <Markdown>{body}</Markdown>
      </div>
    </section>
  )
}
