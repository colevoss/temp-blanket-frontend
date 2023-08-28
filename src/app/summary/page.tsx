import { parse } from 'date-fns'
import { getDailySummary, DailySummary } from '../../api/summary'
import SummaryView from './summary-view'

type Props = {
  searchParams: {
    date?: string
  }
}

function parseDate(dateStr: string): Date {
  return parse(dateStr, 'yyyyMMdd', new Date)
}

export const revalidate = 300;

export default async function Summary({ searchParams }: Props) {
  const dateStr = searchParams.date;
  const date = dateStr ? parseDate(dateStr) : new Date();
  console.log(date)

  const summary = await getDailySummary(date);

  return (
    <SummaryView summary={summary} />
  )
}
