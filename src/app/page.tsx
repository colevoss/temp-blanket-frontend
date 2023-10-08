import Link from 'next/link'
import SummarySearch from '@/components/station/station-search'

export default function Home() {
  return (
    <article className="flex flex-col justify-center items-center w-full h-full space-8">
      <SummarySearch />
    </article>
  )
}
