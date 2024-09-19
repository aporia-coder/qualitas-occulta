import { BlogItem } from '@/components/BlogItem'
import { MediaPageTitle } from '@/components/MediaPageTitle'
import { TitleLink } from '@/components/TitleLink'
import { getBlogPosts } from './actions'

const BlogPage = async () => {
  const blogPosts = await getBlogPosts()

  return (
    <>
      <MediaPageTitle>Blog</MediaPageTitle>
      <div className="flex flex-col justify-start gap-20">
        {blogPosts?.map((post) => {
          return (
            <BlogItem title={post.title} body={post.body} key={post.title} />
          )
        })}
      </div>
    </>
  )
}

export default BlogPage
