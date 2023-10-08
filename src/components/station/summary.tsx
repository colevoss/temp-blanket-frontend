import { DailySummary, Station, WeatherData } from "@/api"
import StationHeader from "./header"
import { StationTemps } from "./temps"
import { SummaryDatePicker } from "../date-picker"
import Link from "next/link"
import { StationHeaderPlaceholder } from "./header-placeholder"

type Props = {
  station: Station,
  summary: DailySummary,
  weather: WeatherData[]
}

export default function StationSummary({ station, summary }: Props) {
  return (
    <section className="w-full dark:text-white p-6">
      <StationHeader station={station}/>
      <StationTemps summary={summary} />

      <div className="w-full">
        <SummaryDatePicker />
      </div>
    </section>
  )
}
