import { BlogItemProps } from '@/components/BlogItem/types'
import { api } from '@/services/api'
import { BlogPostEntry, BlogPostSkeleton } from './types'

const parseBlogPost = (blogPostEntry?: BlogPostEntry): BlogItemProps | null => {
  if (!blogPostEntry) return null

  return {
    title: blogPostEntry.fields.title ?? '',
    body: blogPostEntry.fields.body ?? '',
  }
}

export const getBlogPosts = async (): Promise<BlogItemProps[]> => {
  const response = await api.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
  })

  return response.items.map((item) => parseBlogPost(item) as BlogItemProps)
}
