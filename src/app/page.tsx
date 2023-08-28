import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <article className="flex justify-center items-center min-w-full h-full">
      <Link href="/summary" className="rounded bg-cyan-700 text-slate-100 px-2 py-4 text-xl font-semibold">Go To Temps!</Link>
    </article>
  )
}
