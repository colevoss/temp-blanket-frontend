import { getDailySummary, DailySummary } from '../../api/summary'
import SummaryItem from './summary-item'

export default async function NewSummaryView({ date }: { date: Date }) {
  const summary = await getDailySummary(date);

  return (
    <div className="flex flex-col py-3 w-full space-y-2">
      <SummaryItem value={`${Math.ceil(summary.average)}°`} label="Average" emoji="&#128526;" />
      <SummaryItem value={`${Math.ceil(summary.high)}°`} label="High" emoji="&#x2600;" />
      <SummaryItem value={`${Math.ceil(summary.low)}°`} label="Low" emoji="&#10052;" />
    </div>
  )
}
