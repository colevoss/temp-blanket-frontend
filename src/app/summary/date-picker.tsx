'use client'

import { DatePicker } from '@mui/x-date-pickers'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'

type Props = {
  date: Date
}

function formatDate(date: Date) {
  return format(date, 'yyyyMMdd')
}

export function SummaryDatePicker({ date }: Props) {
  const router = useRouter();

  return (
    <DatePicker
      slotProps={{
        textField: {
          className: 'bg-slate-100',
        }
      }}
      value={date}
      onChange={(d) => {
        if (!d) {
          return
        }

        router.push(`/summary?date=${formatDate(d)}`)
      }} />
  );
}
