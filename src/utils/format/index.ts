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

export const toLocaleCurrency = (value: number): string => {
  return value.toLocaleString('kr')
}

export const toQueryString = (value: {
  [key: string]: string | number
}): string =>
  Object.entries(value)
    .reduce((query, [key, value]) => `${query}${key}=${value}&`, '?')
    .slice(0, -1)
