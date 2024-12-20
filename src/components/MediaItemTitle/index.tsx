export const MediaItemTitle = ({ children }: { children: string }) => {
  return (
    <h1 className="uppercase text-4xl md:text-6xl tracking-widest text-zinc-400">
      {children}
    </h1>
  )
}
