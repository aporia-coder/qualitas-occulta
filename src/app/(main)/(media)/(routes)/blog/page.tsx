import { BlogItem } from '@/components/BlogItem'
import { Navbar } from '@/components/Navbar'
import { getBlogPosts } from './actions'

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
