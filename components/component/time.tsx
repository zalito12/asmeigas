'use client'

import TimeAgo from 'react-timeago'
import strings from 'react-timeago/lib/language-strings/gl'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

export interface TimeProps {
  datetime: string
  dayTreshold?: number
}

const formatter = buildFormatter(strings)

export function Time(props: TimeProps) {
  const { datetime,  dayTreshold = 60 } = props
  const date = new Date(datetime)
  const now = new Date()
  const diffDays = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  const formattedDate = date.toLocaleDateString('gl-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <>
      {diffDays > dayTreshold ? <span>{formattedDate}</span> : <TimeAgo date={date} formatter={formatter} />}
    </>
  )
}

