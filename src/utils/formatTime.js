// path: next-src/utils/formatTime.js

import { format, getTime, formatDistanceToNow, isValid } from 'date-fns'

// ----------------------------------------------------------------------

export function fDate (date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy'

  if (date && isValid(new Date(date))) {
    return format(new Date(date), fm)
  } else {
    return ''
  }
}

export function fDateTime (date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy p'

  if (date && isValid(new Date(date))) {
    return format(new Date(date), fm)
  } else {
    return ''
  }
}

export function fTimestamp (date) {
  if (date && isValid(new Date(date))) {
    return getTime(new Date(date))
  } else {
    return ''
  }
}

export function fToNow (date) {
  if (date && isValid(new Date(date))) {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true
    })
  } else {
    return ''
  }
}
