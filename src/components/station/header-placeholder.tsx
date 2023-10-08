import { SubHeader } from "../design/sub-header";

export function StationHeaderPlaceholder() {
  return (
    <div className="rounded-xl dark:border-0 border-1 border dark:border-neutral-500 p-6 space-y-4 dark:bg-neutral-800">
      <div className="flex flex-row justify-between items-end border-1 border-b dark:border-neutral-500 pb-4">
        <div className="flex flex-row">
          <h1 className="xl:text-6xl md:text-3xl sm:text-xl font-light text-neutral-200 bg-neutral-200 dark:text-neutral-600 dark:bg-neutral-600 rounded-xl">XXXXXXX</h1>
        </div>

        <div className="rounded-md bg-neutral-100 dark:bg-neutral-700 dark:text-white p-2 font-bold">
          <h3 className="lg:text-2xl md:text-xl sm:text-sm font-thin text-neutral-100 dark:text-neutral-700">LOAD</h3>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 sm:divide-x-0 sm:divide-y-1 sm:space-x-0  xs:divide-x xs:divide-y-0 xs:grid-cols-1 xs:space-x-2 pt-2 divide-neutral-500">
        <div className="flex flex-col items-center">
          <SubHeader>County</SubHeader>

          <div className="font-light text-sm text-neutral-200 bg-neutral-200 dark:text-neutral-600 dark:bg-neutral-600">
            loading
          </div>
        </div>

        <div className="flex flex-col items-center">
          <SubHeader>Timezone</SubHeader>

          <div className="font-light text-sm text-neutral-200 bg-neutral-200 dark:text-neutral-600 dark:bg-neutral-600">
            loading
          </div>
        </div>

        <div className="flex flex-col items-center">
          <SubHeader>Lat / Lon</SubHeader>

          <div className="font-light text-sm text-neutral-200 bg-neutral-200 dark:text-neutral-600 dark:bg-neutral-600">
            loading
          </div>
        </div>
      </div>
    </div>
  )
}
