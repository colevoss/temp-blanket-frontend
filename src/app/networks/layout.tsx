import { Suspense } from 'react'
import { SidebarContainer } from './sidebar'

export default function SummaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex md:flex-row flex-col grow">
      <SidebarContainer />
      <div className="md:w-3/4 flex">
        {children}
      </div>
    </div>
  )
}
