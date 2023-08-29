import { format, parse } from 'date-fns'
import { getDailySummary, DailySummary } from '../../api/summary'
import SummaryView from './summary-view'
import NewSummaryView from './new-summary-view'
import { SummaryDatePicker } from './date-picker'
import { Suspense } from 'react'
import SummaryHeader from './summary-heaader'

type Props = {
  searchParams: {
    date?: string
  }
}

function parseDate(dateStr: string): Date {
  // return parse(dateStr, 'yyyyMMdd', new Date)
  return new Date(dateStr)
}

export const revalidate = 300;

function LoadingSummary() {
  return (
    <div className="flex justify-center items-center h-36 w-full">
      <p>Loading Temperatures</p>
    </div>
  )
}

export default function Summary({ searchParams }: Props) {
  const dateStr = searchParams.date;
  const date = dateStr ? parseDate(dateStr) : new Date();

  return (
    <article className="flex flex-col min-w-full justify-center items-center p-8">
      <section className="container max-w-xl flex flex-col justify-center">
        <div className="flex min-w-full justify-between flex-col sm:flex-row sm:items-center items-start">
          <SummaryHeader date={date} />

          <SummaryDatePicker date={date}/>
        </div>

        <div className="container flex justify-center">
          <Suspense fallback={<LoadingSummary />} key={dateStr}>
            <NewSummaryView date={date} />
          </Suspense>
        </div>
      </section>
    </article>
  )
}
