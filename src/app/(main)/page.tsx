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
        <li>
          <h1 className="uppercase text-3xl font-semibold" key={title}>
            {title}
          </h1>
        </li>
      ))}
    </ul>
  )
}
