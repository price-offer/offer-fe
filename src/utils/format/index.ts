import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

const DATE_FORMAT = {
  'YYYY년 M월 D일 dddd요일': 'YYYY년 M월 D일 dddd요일',
  'A H:m': 'A H:m'
}

export const formatDate = (
  date: string | Date,
  format: keyof typeof DATE_FORMAT
) => dayjs(date).format(format)

export const toLocaleCurrency = (value: number): string => {
  return value.toLocaleString('kr')
}
