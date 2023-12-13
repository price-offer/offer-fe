export const TRANSACTION_TYPE = {
  all: '직거래/택배거래',
  direct: '직거래',
  parcel: '택배거래'
} as const

type TransactionType = keyof typeof TRANSACTION_TYPE
export type UserProfileProps = {
  image?: string
  nickName: string
  location: string
  type: 'offer' | 'basic'
  level: number
  date?: string
  transactionType?: TransactionType
}
