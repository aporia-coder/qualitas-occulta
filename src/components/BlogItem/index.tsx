import { MediaItemTitle } from '../MediaItemTitle'
import { BlogItemProps } from './types'

export const BlogItem = ({ title, body }: BlogItemProps) => {
  return (
    <section className="flex flex-col gap-9">
      <MediaItemTitle>{title}</MediaItemTitle>
      <p className="text-zinc-300 text-2xl leading-10 tracking-wide">{body}</p>
    </section>
  )
}
