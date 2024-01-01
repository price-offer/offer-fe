import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

const DATE_FORMAT = {
  'YYYY년 M월 D일 dddd': 'YYYY년 M월 D일 dddd',
  'A H:m': 'A H:m'
}

export const formatDate = (
  date: string | Date,
  format: keyof typeof DATE_FORMAT
) => dayjs(date).format(format)

export const getTimeDiffText = (date: string | Date) => {
  const currentDate = dayjs()
  const targetDate = dayjs(date)

  const diffMinutes = currentDate.diff(targetDate, 'minute')
  const diffHours = currentDate.diff(targetDate, 'hour')
  const diffDays = currentDate.diff(targetDate, 'day')
  const diffMonths = currentDate.diff(targetDate, 'month')
  const diffYears = currentDate.diff(targetDate, 'year')

  if (diffMinutes <= 10) {
    return '방금 전'
  }
  if (diffHours < 1) {
    return `${diffMinutes}분 전`
  }
  if (diffHours < 2) {
    return '한 시간 전'
  }
  if (diffHours < 24) {
    return `${diffHours}시간 전`
  }
  if (diffDays < 2) {
    return '하루 전'
  }
  if (diffMonths < 1) {
    return `${diffDays}일 전`
  }
  if (diffYears < 1) {
    return `${diffMonths}달 전`
  }

  return `${diffYears}년 전`
}

export const toLocaleCurrency = (value: number): string => {
  return value.toLocaleString('kr')
}

export const toQueryString = (value: {
  [key: string]: string | number
}): string =>
  Object.entries(value)
    .reduce((query, [key, value]) => `${query}${key}=${value}&`, '?')
    .slice(0, -1)

export const localeCurrencyToNumber = (value: string) =>
  Number(value.replaceAll(',', ''))
