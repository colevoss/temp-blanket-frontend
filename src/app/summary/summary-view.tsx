import { DatePicker } from '@mui/x-date-pickers'
import { format } from 'date-fns'
import { DailySummary } from '../../api/summary'
import SummaryItem from './summary-item'
import { SummaryDatePicker } from './date-picker'
import Link from 'next/link'

type Props = {
  summary: DailySummary
}

export default function SummaryView({ summary }: Props) {
  console.log(summary)
  return (
    <div className="container max-w-lg space-y-2">
      <div className="flex flex-row justify-between py-4 items-center space-x-1">
        <h1 className="md:text-2xl text-lg font-bold">{format(new Date(summary.date), 'MMMM do yyyy')}</h1>
        <SummaryDatePicker date={new Date(summary.date)} />
      </div>

      <div className="flex flex-col space-y-2 py-2">
        <SummaryItem value={`${Math.ceil(summary.average)}°`} label="Average" emoji="&#128526;" />
        <SummaryItem value={`${Math.ceil(summary.high)}°`} label="High" emoji="&#x2600;" />
        <SummaryItem value={`${Math.ceil(summary.low)}°`} label="Low" emoji="&#10052;" />
      </div>

      <div className="flex">
        <Link className="rounded-md p-4 bg-blue-200 text-blue-950" href="/summary">Today</Link>
      </div>
    </div>
  )
}
