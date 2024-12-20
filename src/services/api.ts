import { createClient } from 'contentful'

export const api = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.CONTENTFUL_SPACE_ID!,
})
