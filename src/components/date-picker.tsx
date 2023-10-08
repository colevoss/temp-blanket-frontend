'use client'

import { DatePicker } from '@mui/x-date-pickers'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { formatDate, parseDate } from '@/utils/date'
import addDate from 'date-fns/add'
import isToday from 'date-fns/isToday'
import format from 'date-fns/format'
import Link from 'next/link';
import { ReactNode } from 'react';

export function SummaryDatePicker() {
  const router = useRouter();
  const params = useSearchParams()
  const dateStr = params.get('date')
  const path = usePathname()

  const date = parseDate(dateStr)
  const next = addDate(date, { days: 1 })
  const prev = addDate(date, { days: -1 })

  const nextDisabled = isToday(date)

  const nextStr = format(next, 'LL/dd')
  const prevStr = format(prev, 'LL/dd')

  return (
    <div className="w-full flex flex-row space-x-2 justify-between">
      <DateButton href={`${path}?date=${formatDate(prev)}`} disabled={false}>{prevStr}</DateButton>

      <DatePicker
        slotProps={{
          openPickerButton: {
            className: 'dark:text-white text-neutral-900'
          },
          textField: {
            className: 'bg-white dark:bg-neutral-700 rounded-lg',
            InputProps: {
              className: 'dark:text-white text-neutral-900',
            }
          },
        }}
        value={date}
        maxDate={new Date()}
        onAccept={(d) => {
          if (!d) {
            return
          }

          router.push(`${path}?date=${formatDate(d)}`)
        }}
      />

      <DateButton href={`${path}?date=${formatDate(next)}`} disabled={nextDisabled}>{nextStr}</DateButton>
    </div>
  );
}

function DateButton({ children, href, disabled }: { children: ReactNode, href: string, disabled: boolean }) {
  const cl = disabled ?
    'text-neutral-400 dark:text-neutral-500 dark:bg-neutral-800 border-neutral-300 bg-neutral-200 dark:border-0 cursor-not-allowed' :
    'text-neutral-900 dark:text-white dark:border-0 dark:bg-neutral-700 border-neutral-300';

  return (
    <Link href={href} className={'flex justify-center items-center rounded-lg border border-1 text-xs p-4 md:text-md' + ' ' + cl}>{children}</Link>
  )
}
