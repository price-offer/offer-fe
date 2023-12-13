import type { KeyOf, ValueOf } from '@types'

/** 나의 거래 활동 */
export type TradeActivityType = KeyOf<typeof TRADE_ACTIVITY_TYPE>
export type TradeActivityName = '판매' | '구매' | '후기'

/** 나의 거래 활동 - 판매 */
export type TradeSaleActivityType = KeyOf<typeof TRADE_ACTIVITY_TYPE['sale']>
export type TradeSaleActivityName = ValueOf<typeof TRADE_ACTIVITY_TYPE['sale']>

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
  sale: {
    sale: '판매중',
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

export const TRADE_STATUS = [
  {
    code: 'SELLING',
    name: '판매중'
  },
  {
    code: 'SOLD',
    name: '거래완료'
  }
] as const

export const SORT_TYPE = [
  { name: 'RECENT_CREATED', exposureTitle: '최신순' },
  {
    name: 'LOW_PRICE',
    exposureTitle: '낮은 가격순'
  }
] as const

export const TRADE_TYPE = [
  {
    code: 'FACE_TO_FACE',
    name: '직거래'
  },
  {
    code: 'SHIPPING',
    name: '택배거래'
  },
  {
    code: 'ALL',
    name: '직거래/택배거래'
  }
] as const

export const PRODUCT_CONDITION = [
  {
    code: 'NEW',
    name: '새상품'
  },
  {
    code: 'SECONDHAND',
    name: '중고상품'
  }
] as const

export const CATEGORIES = [
  {
    code: 'MEN_FASHION',
    name: '남성패션/잡화'
  },
  {
    code: 'WOMEN_FASHION',
    name: '여성패션/잡화'
  },
  {
    code: 'GAME',
    name: '게임'
  },
  {
    code: 'SPORTS',
    name: '스포츠/레저'
  },
  {
    code: 'TOY',
    name: '장난감/취미'
  },
  {
    code: 'DIGITAL',
    name: '디지털기기'
  },
  {
    code: 'CAR',
    name: '자동차/공구'
  },
  {
    code: 'APPLIANCE',
    name: '생활가전'
  },
  {
    code: 'FURNITURE',
    name: '가구/인테리어'
  },
  {
    code: 'BOOKS',
    name: '도서/티켓/음반'
  },
  {
    code: 'PET',
    name: '반려동물용품'
  },
  {
    code: 'OTHER',
    name: '기타 중고물품'
  }
] as const
