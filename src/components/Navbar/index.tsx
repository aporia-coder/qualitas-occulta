'use client'

import { useRouter } from 'next/navigation'
import { IconButton } from '../IconButton'
import { MediaPageTitle } from '../MediaPageTitle'
import { NavbarProps } from './types'
import { useIsOnHomepage } from '@/hooks'
import { ArrowLeft } from 'lucide-react'

export const Navbar = ({ title }: NavbarProps) => {
  const router = useRouter()
  const isOnHomepage = useIsOnHomepage()

  const goBack = () => router.push('/')

  return (
    <nav className="flex items-center justify-between w-full mb-20">
      {!isOnHomepage && (
        <IconButton icon={ArrowLeft} onClick={goBack} className="w-10 h-10" />
      )}
      <MediaPageTitle>{title}</MediaPageTitle>
      <div />
    </nav>
  )
}
