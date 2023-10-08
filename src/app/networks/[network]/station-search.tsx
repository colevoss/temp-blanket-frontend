'use client';

import { Station } from "@/api"
import { StationCard } from "../station-card"
import { useState } from "react";
import { LoadingStationCard } from "./loading-station-card";

type Props = {
  stations: Station[]
}

export function StationSearch({ stations }: Props) {
  const [search, setSearch] = useState('')

  const filteredStations = filterStations(stations, search)

  return (
    <div className="w-full p-6 space-y-2">
      <h1 className="md:text-4xl font-light text-2xl md:text-right text-neutral-700 dark:text-neutral-200">Stations</h1>
      <label htmlFor="station-search" className="dark:text-neutral-300 text-neutral-700 text-sm font-light">Search for station by ID, Name, or County</label>
      <input
        id="station-search"
        className="bg-white
        dark:bg-neutral-900
        p-2
        placeholder-neutral-500
        border
        border-1
        border-neutral-300
        dark:border-neutral-500
        dark:text-white
        w-full
        rounded-lg"
        value={search}
        placeholder="Search for station"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 w-full">
        {filteredStations.map((s) => (
          <StationCard station={s} key={s.id} />
        ))}
      </div>
    </div>
  )
}

function filterStations(stations: Station[], filter: string): Station[] {
  const lowercase = filter.toLowerCase();

  return stations.filter((s) => {
    return s.name.toLowerCase().includes(lowercase) || s.id.toLowerCase().includes(lowercase) || s.county.toLowerCase().includes(lowercase)
  })
}
