import { BlogItem } from '@/components/BlogItem'
import { MediaPageTitle } from '@/components/MediaPageTitle'
import { TitleLink } from '@/components/TitleLink'
import { blogPosts } from '@/utils'

const BlogPage = () => {
  return (
    <>
      <MediaPageTitle>Blog</MediaPageTitle>
      <BlogItem title="The Death Drive" body={blogPosts[0].body} />
    </>
  )
}

export default BlogPage
