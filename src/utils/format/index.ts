import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

const DATE_FORMAT = {
  'YYYY년 M월 D일 dddd': 'YYYY년 M월 D일 dddd',
  'A H:mm': 'A H:mm'
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

export const toQueryString = (object: {
  [key: string]: string | number
}): URLSearchParams => {
  const searchParams = new URLSearchParams()

  Object.entries(object).forEach(([key, value]) => {
    searchParams.set(String(key), String(value))
  })

  return searchParams
}

export const localeCurrencyToNumber = (value: string) =>
  Number(value.replaceAll(',', ''))

export const removeNullish = (obj: {
  [key: string]: any
}): { [key: string]: any } =>
  Object.keys(obj).reduce((acc, key) => {
    if (obj[key] !== undefined && obj[key] !== null) {
      acc[key] = obj[key]
    }
    return acc
  }, {} as { [key: string]: any })
