import { ReactNode } from "react";

export function LoadingStationCard() {
  return (
    <div
      className="
        bg-white
        dark:bg-neutral-800
        border
        border-1
        border-gray-300
        dark:border-none
        row-span-1
        col-span-1
        rounded
        space-1
        flex
        flex-col
        drop-shadow-sm
        overflow-hidden
      "
    >
      <div className="flex flex-row justify-between items-center flex-wrap py-2 px-4 dark:bg-neutral-800 bg-neutral-100 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-800">
        <p className="md:text-sm lg:text-md font-light text-neutral-100 dark:text-neutral-800 py-1">
          L
        </p>

        <div className="group-hover:bg-cyan-200 rounded-lg bg-neutral-200 text-neutral-200 dark:bg-neutral-900 dark:group-hover:bg-cyan-900 dark:text-neutral-900 px-2 py-1 font-semibold text-xs">
          ID
        </div>
      </div>

      <div className="p-4 space-y-1">
        <LoadingDataPlaceholder />
        <LoadingDataPlaceholder />
        <LoadingDataPlaceholder />
        <LoadingDataPlaceholder />
      </div>
    </div>
  )
}

function LoadingDataPlaceholder() {
  return (
    <div className="text-sm flex space-x-2 dark:bg-neutral-800">
      <span className="font-bold dark:text-neutral-800 text-white">Lon</span>
      <span className="dark:text-neutral-800 text-white">loading</span>
    </div>
  )
}
