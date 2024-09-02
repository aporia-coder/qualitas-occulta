import { BlogItem } from '@/components/BlogItem'
import { MediaPageTitle } from '@/components/MediaPageTitle'
import { TitleLink } from '@/components/TitleLink'
import { getBlogPosts } from './_actions'

const BlogPage = async () => {
  const blogPosts = await getBlogPosts()
  console.log(blogPosts)

  return (
    <>
      <MediaPageTitle>Blog</MediaPageTitle>
      <div className="flex flex-col justify-start gap-20">
        {blogPosts.map((post) => {
          return (
            <BlogItem
              title={post.fields.title}
              body={post.fields.body}
              key={post.fields.title}
            />
          )
        })}
      </div>
    </>
  )
}

export default BlogPage
