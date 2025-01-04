export const MediaItemTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="uppercase text-4xl md:text-6xl tracking-widest text-zinc-400">
      {title}
    </h1>
  )
}
