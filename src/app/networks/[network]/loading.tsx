import { LoadingStationCard } from "./loading-station-card";

export default function Loading() {
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
        placeholder="Search for station"
        disabled
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 w-full">
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        <LoadingStationCard />
        {/* {filteredStations.map((s) => ( */}
        {/*   <StationCard station={s} key={s.id} /> */}
        {/* ))} */}
      </div>
    </div>
  )
}
