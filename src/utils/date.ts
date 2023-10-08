import isValid from 'date-fns/isValid'
import set from 'date-fns/set'

export function formatDate(date: Date) {
  const reset = set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
  return reset.toISOString()
  // return date.toISOString()
}

export function parseDate(dateStr: string | null | undefined): Date {
  if (!dateStr) {
    return new Date()
  }

  const d = new Date(dateStr)

  if (!isValid(d)) {
    return new Date();
  }

  return d;
}
