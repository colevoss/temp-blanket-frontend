'use client';

import { useRouter } from 'next/navigation'
import { addDays, subDays, isToday } from 'date-fns'
import Link from 'next/link';

function BackAndForthButton({ children, href, disabled = false }: { children: React.ReactNode, href: string, disabled?: boolean }) {
  return (
    <Link href={disabled ? {} : href} disabled={disabled} className="text-slate-900 dark:text-slate-100 border-2 rounded py-2 px-4">
      {children}
    </Link>
  )
}

export function BackAndForth({ date }: { date: Date }) {
  const router = useRouter();

  const nextDate = addDays(date, 1);
  const prevDate = subDays(date, 1);

  const nextHref = `/summary?date=${nextDate.toISOString()}`;
  const prevHref = `/summary?date=${prevDate.toISOString()}`

  const today = isToday(date)

  return (
    <div className="flex justify-between text-slate-900 dark:text-slate-100">
      <BackAndForthButton href={prevHref}>{'< Prev'}</BackAndForthButton>
      {!today &&
        <BackAndForthButton href={nextHref} disabled={today}>{'Next >'}</BackAndForthButton>
      }
    </div>
  )
}
