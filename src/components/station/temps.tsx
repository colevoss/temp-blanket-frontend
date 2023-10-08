import { DailySummary } from "@/api"
import { SubHeader } from "../design/sub-header"

type Props = {
  summary: DailySummary,
}

export function StationTemps({ summary }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 my-8">
      <div className="flex flex-col items-center">
        <SubHeader>High</SubHeader>

        <div className="font-light text-4xl">
          {Math.round(summary.high)}°
        </div>
      </div>

      <div className="flex flex-col items-center">
        <SubHeader>Low</SubHeader>

        <div className="font-light text-4xl">
          {Math.round(summary.low)}°
        </div>
      </div>

      <div className="flex flex-col items-center">
        <SubHeader>Average</SubHeader>

        <div className="font-light text-4xl">
          {Math.round(summary.average)}°
        </div>
      </div>
    </div>
  )
}
