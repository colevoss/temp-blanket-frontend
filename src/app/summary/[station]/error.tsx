'use client'

import Link from "next/link"

export default function StationError({ error } : { error: Error }) {
  return (
    <section className="w-full p-6 flex flex-col justify-center items-center space-y-6">
      <h2 className="font-bold text-lg text-neutral-700 dark:text-neutral-200">
        {error.message}
      </h2>

      <Link href="/summary" className="border border-1 border-neutral-700 dark:border-neutral-200 text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-md">Back</Link>
    </section>
  )
}
