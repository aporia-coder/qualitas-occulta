import { createClient } from 'contentful'

export const api = createClient({
  accessToken: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_SPACE_ID!,
})
