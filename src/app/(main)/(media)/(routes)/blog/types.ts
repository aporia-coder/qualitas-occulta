import { BlogItemProps } from '@/components/BlogItem/types'
import { Entry, EntrySkeletonType } from 'contentful'

export type BlogPostSkeleton = EntrySkeletonType<BlogItemProps, 'blogPost'>
export type BlogPostEntry = Entry<BlogPostSkeleton, undefined, string>
