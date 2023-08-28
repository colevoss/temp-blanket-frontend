'use client';

import { format } from "date-fns";

export default function SummaryHeader({ date }: { date: Date }) {
  const displayDate = format(new Date(date), 'MMMM do yyyy');

  return (
    <h2 className="text-3xl 2xl:text-5xl font-bold text-slate-900 dark:text-slate-50 py-2">
      {displayDate}
    </h2>
  )
}
