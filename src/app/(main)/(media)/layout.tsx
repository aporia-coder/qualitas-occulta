import { ReactNode } from 'react'

export default function MediaLayout({ children }: { children: ReactNode }) {
  return <div className="py-20 px-20">{children}</div>
}
