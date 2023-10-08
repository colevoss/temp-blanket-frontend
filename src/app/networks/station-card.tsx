import { Station } from "@/api"
import Link from "next/link"

type Props = {
  station: Station
}

export function StationCard({ station }: Props) {
  return (
    <Link
      href={`/networks/${station.network}/${station.id}`}
      className="
        bg-white
        dark:bg-neutral-800
        border
        border-1
        border-neutral-300
        dark:border-none
        row-span-1
        col-span-1
        rounded
        space-1
        flex
        flex-col
        drop-shadow-sm
        hover:drop-shadow-lg
        hover:bg-cyan-50
        dark:hover:bg-cyan-950
        overflow-hidden
        group
      "
    >
      <div className="flex flex-row justify-between items-center flex-wrap py-2 px-4 dark:bg-neutral-700 bg-neutral-100 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-800">
        <p key={station.id} className="md:text-sm lg:text-md font-light text-neutral-700 dark:text-neutral-50 py-1">
          {station.name}
        </p>

        <div className="group-hover:bg-cyan-200 rounded-lg bg-neutral-200 dark:bg-neutral-900 dark:group-hover:bg-cyan-900 dark:text-white px-2 py-1 font-semibold text-xs">
          {station.id}
        </div>
      </div>

      <div className="p-4 space-y-1">
        <div className="text-sm flex space-x-2">
          <span className="font-bold text-neutral-700 dark:text-neutral-300">{station.county ? 'County' : 'Country'}</span>
          <span className="text-neutral-700 dark:text-neutral-200">{station.county ? station.county : station.country}</span>
        </div>

        <div className="text-sm flex space-x-2">
          <span className="font-bold text-neutral-700 dark:text-neutral-300">Timezone</span>
          <span className="text-neutral-700 dark:text-neutral-200">{station.tzname}</span>
        </div>

        <div className="text-sm flex space-x-2">
          <span className="font-bold text-neutral-700 dark:text-neutral-300">Lat</span>
          <span className="text-neutral-700 dark:text-neutral-200">{station.latitude}</span>
        </div>

        <div className="text-sm flex space-x-2">
          <span className="font-bold text-neutral-700 dark:text-neutral-300">Lon</span>
          <span className="text-neutral-700 dark:text-neutral-200">{station.longitude}</span>
        </div>
      </div>
    </Link>
  )
}
