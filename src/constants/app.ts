import type {
  KeyOf,
  ProductStatus,
  TradeMethod,
  TradeStatus,
  ValueOf
} from '@types'

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

export const TRADE_STATUS: TradeStatus[] = [
  {
    code: 2,
    name: '예약중'
  },
  {
    code: 4,
    name: '판매중'
  },
  {
    code: 8,
    name: '거래완료'
  }
]

export const TRADE_METHOD: TradeMethod[] = [
  {
    code: 2,
    name: '직거래'
  },
  {
    code: 4,
    name: '택배거래'
  },
  {
    code: 8,
    name: '직거래/택배거래'
  }
]

export const PRODUCT_STATUS: ProductStatus[] = [
  {
    code: 2,
    name: '새상품'
  },
  {
    code: 4,
    name: '중고상품'
  }
]

export const CATEGORIES = [
  {
    code: 1,
    name: '인기매물'
  },
  {
    code: 2,
    name: '디지털기기'
  },
  {
    code: 3,
    name: '생활가전'
  },
  {
    code: 4,
    name: '가구/인테리어'
  },
  {
    code: 5,
    name: '유아동'
  },
  {
    code: 6,
    name: '생활/가공식품'
  },
  {
    code: 7,
    name: '유아도서'
  },
  {
    code: 8,
    name: '스포츠/레저'
  },
  {
    code: 9,
    name: '여성잡화'
  },
  {
    code: 10,
    name: '여성의류'
  },
  {
    code: 11,
    name: '남성패션/잡화'
  },
  {
    code: 12,
    name: '게임/취미'
  },
  {
    code: 13,
    name: '뷰티/미용'
  },
  {
    code: 14,
    name: '반려동물용품'
  },
  {
    code: 15,
    name: '도서/티켓/음반'
  },
  {
    code: 16,
    name: '식물'
  },
  {
    code: 17,
    name: '식품'
  },
  {
    code: 18,
    name: '기타 중고물품'
  },
  {
    code: 19,
    name: '삽니다'
  }
] as const
