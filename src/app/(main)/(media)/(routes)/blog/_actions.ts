import { BlogItemProps } from '@/components/BlogItem/types'
import { api } from '@/services/api'

export const getBlogPosts = async () => {
  const response = await api.getEntries({
    content_type: 'blogPost',
  })

  return response.items
}
