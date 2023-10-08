import { Station } from "@/api"
import Link from "next/link"
import { SubHeader } from "../design/sub-header"
import { ReactNode } from "react"

type Props = {
  station: Station
}
export default function StationHeader({ station }: Props) {
  return (
    <div className="rounded-xl dark:border-0 border-1 border dark:border-neutral-500 p-6 space-y-4 dark:bg-neutral-800">
      <div className="flex flex-row justify-between items-end border-1 border-b dark:border-neutral-500 pb-4">
        <div className="flex flex-row">
          <h1 className="xl:text-6xl md:text-3xl sm:text-xl font-light">{station.name}</h1>

          <div className="font-thin mx-1 dark:text-neutral-400 sm:text-xs lg:text-sm">
            {station.state}
          </div>
        </div>

        <Link href={`/summary/${station.id}`}>
          <div className="rounded-md bg-gray-100 dark:bg-neutral-700 dark:text-white p-2 font-bold">
            <h3 className="lg:text-2xl md:text-xl sm:text-sm font-thin">{station.id}</h3>
          </div>
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 xs:grid-cols-1 xs:space-y-2 pt-2 sm:divide-x divide-neutral-300 dark:divide-neutral-500 xs:divide-x-0 gap-1">
        {station.county ?
          (
            <DataSection>
              <SubHeader>County</SubHeader>

              <div className="font-light text-sm">
                {station.county}
              </div>
            </DataSection>
          ) : (
            <DataSection>
              <SubHeader>Country</SubHeader>

              <div className="font-light text-sm">
                {station.country}
              </div>
            </DataSection>
          )
        }


        <DataSection>
          <SubHeader>Timezone</SubHeader>

          <div className="font-light text-sm">
            {station.tzname}
          </div>
        </DataSection>

        <DataSection>
          <SubHeader>Lat / Lon</SubHeader>

          <div className="font-light text-sm">
            <Link target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${station.latitude},${station.longitude}`} className="dark:text-blue-200 text-blue-700">
              {station.latitude} / {station.longitude}
            </Link>
          </div>
        </DataSection>
      </div>
    </div>
  )
}

function DataSection({ children }: { children: ReactNode }) {
  return (
    <div className="flex sm:flex-col xs:flex-row sm:items-center justify-between">
      {children}
    </div>
  )
}
