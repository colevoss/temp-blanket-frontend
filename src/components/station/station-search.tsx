'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SummaryPage() {
  const router = useRouter()
  const [station, setStation] = useState('')

  return (
    <form
      className="flex flex-row justify-center items-end p-6 space-x-6 w-full"
      id="summary-search"
      onSubmit={(e) => {
        e.preventDefault()
        if (station === '') {
          return
        }

        router.push(`/summary/${station}`)
      }}
    >
      <div className="w-1/2 flex flex-col space-y-1">
        <label htmlFor="station-search" className="dark:text-neutral-300 text-neutral-700 text-md font-light">
          Station ID  (e.g. LNK, OMA)
        </label>

        <input
          id="station-search"
          className="
            bg-white
            flex-1
            dark:bg-neutral-900
            p-2
            placeholder-neutral-500
            border
            border-1
            border-neutral-300
            dark:border-neutral-500
            dark:text-white
            w-full
            rounded-lg
          "
          value={station}
          placeholder="Station ID"
          onChange={(e) => setStation(e.target.value.toUpperCase())}
        />
      </div>

      <button
        className="
          text-neutral-900
          dark:text-white
          dark:border-0
          dark:bg-neutral-700
          border-neutral-300
          rounded-lg
          py-2
          px-4
          border
          border-1
          disabled:text-neutral-400
          disabled:bg-neutral-200
          disabled:dark:bg-neutral-800
          disabled:dark:text-neutral-500
        "
        disabled={station === ''}
        type="submit"
      >
        Go
      </button>
    </form>
  )
}
