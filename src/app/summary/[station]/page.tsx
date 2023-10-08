import { getDailySummary } from "@/api"
import StationSummary from '@/components/station/summary'
import { parseDate } from "@/utils/date"

type Props = {
  params: {
    network: string,
    station: string,
  },
  searchParams: {
    date?: string,
  }
}

export default async function StationPage({ params, searchParams }: Props) {
  const date = parseDate(searchParams.date)
  const { station, summary, data } = await getDailySummary(date, params.station)

  return (
    <StationSummary station={station} summary={summary} weather={data} />
  )
}
