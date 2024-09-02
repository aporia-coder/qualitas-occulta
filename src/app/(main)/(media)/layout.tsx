import { ReactNode } from 'react'

export default function MediaLayout({ children }: { children: ReactNode }) {
  return <div className="py-20 px-4 md:px-20">{children}</div>
}
