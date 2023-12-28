import type { TradeTypeCodes } from '@types'

export type UserProfileProps = {
  image?: string
  nickName: string
  location: string
  type: 'offer' | 'basic'
  level: number
  date?: string
  tradeType?: TradeTypeCodes
}
