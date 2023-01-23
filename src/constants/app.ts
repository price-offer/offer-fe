import type { KeyOf, TradeStatus, ValueOf } from '@types'

/** 나의 거래 활동 */
export type TradeActivityType = KeyOf<typeof TRADE_ACTIVITY_TYPE>
export type TradeActivityName = '판매' | '구매' | '후기'

/** 나의 거래 활동 - 판매 */
export type ProductTradeStatusType = KeyOf<typeof TRADE_ACTIVITY_TYPE['sell']>
export type ProductTradeStatusName = ValueOf<typeof TRADE_ACTIVITY_TYPE['sell']>

/** 나의 거래 활동 - 구매 */
export type TradeBuyActivityType = KeyOf<typeof TRADE_ACTIVITY_TYPE['buy']>
export type TradeBuyActivityName = ValueOf<typeof TRADE_ACTIVITY_TYPE['buy']>

/** 나의 거래 활동 - 리뷰 */
export type TradeReviewActivityType = KeyOf<
  typeof TRADE_ACTIVITY_TYPE['review']
>
export type TradeReviewActivityName = ValueOf<
  typeof TRADE_ACTIVITY_TYPE['review']
>

export const TRADE_ACTIVITY_TYPE = {
  sell: {
    sell: '판매중',
    soldOut: '거래완료'
  },
  buy: {
    like: '관심상품',
    offer: '가격제안'
  },
  review: {
    all: '전체후기',
    buyer: '구매자 후기',
    seller: '판매자 후기'
  }
} as const

export const TRADE_STATUS_OPTIONS: TradeStatus[] = [
  {
    code: 4,
    name: '판매중'
  },
  {
    code: 8,
    name: '거래완료'
  }
]
