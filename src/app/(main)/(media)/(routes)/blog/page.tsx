import { BlogItem } from '@/components/BlogItem'
import { MediaPageTitle } from '@/components/MediaPageTitle'
import { TitleLink } from '@/components/TitleLink'
import { getBlogPosts } from './actions'
import { Navbar } from '@/components/Navbar'

const BlogPage = async () => {
  const blogPosts = await getBlogPosts()

  return (
    <>
      <Navbar title="Blog" />
      <section className="flex flex-col justify-start gap-20">
        {blogPosts?.map((post) => {
          return (
            <BlogItem title={post.title} body={post.body} key={post.title} />
          )
        })}
      </section>
    </>
  )
}

export default BlogPage
