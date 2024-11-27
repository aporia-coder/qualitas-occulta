import { QuoteProps } from './types'

export const Quote = ({ author, body, work }: QuoteProps) => {
  return (
    <div className="border-l-zinc-500 italic">
      <p>{body}</p>
      <p>{`- ${author}${work ? `(${work})` : ''}`}</p>
    </div>
  )
}
