export default function Home() {
  const mainLinks = [
    {
      title: 'music',
      link: '',
    },
    {
      title: 'video',
      link: '',
    },
    {
      title: 'software',
      link: '',
    },
    {
      title: 'blog',
      link: '',
    },
  ]
  return (
    <ul>
      {mainLinks.map(({ title }) => (
        <h1>{title}</h1>
      ))}
    </ul>
  )
}
