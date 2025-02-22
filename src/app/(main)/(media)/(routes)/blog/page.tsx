import { BlogItem } from '@/components/BlogItem'
import { Navbar } from '@/components/Navbar'
import { supabase } from '../../../../../lib/supabaseApi'

const BlogPage = async () => {
  const { data: blogPosts } = await supabase
    .from('BlogPost')
    .select('*')
    .order('sorting_id')

  return (
    <>
      <Navbar title="Blog" />
      {blogPosts?.map((post) => {
        return <BlogItem title={post.title} body={post.body} key={post.id} />
      })}
    </>
  )
}

export default BlogPage
