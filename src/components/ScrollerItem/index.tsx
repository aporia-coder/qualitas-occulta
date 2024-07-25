export const ScrollerItem = ({ item }: { item: string }) => {
  return (
    <>
      <span>{' - '}</span>
      <h1 className="ticker text-md uppercase">{item}</h1>
    </>
  )
}
