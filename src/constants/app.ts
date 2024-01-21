/* Server */
export const SORT_OPTIONS = [
  { code: 'CREATED_DATE_DESC', name: '최신순' },
  {
    code: 'PRICE_DESC',
    name: '높은 가격순'
  },
  {
    code: 'PRICE_ASC',
    name: '낮은 가격순'
  }
] as const

export const SORT_TYPES = [
  { code: 'OFFER', name: '가격제안 정렬' },
  {
    code: 'POST',
    name: '게시글 정렬'
  }
] as const

export const TRADE_TYPES = [
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

export const MESSAGE_SORT_OPTIONS = [
  { code: 'ALL', name: '전체' },
  {
    code: 'BUY',
    name: '구매'
  },
  {
    code: 'SELL',
    name: '판매'
  }
]

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

export const PRODUCT_CONDITIONS = [
  {
    code: 'NEW',
    name: '새상품'
  },
  {
    code: 'SECONDHAND',
    name: '중고상품'
  }
] as const

/* Client */
export const TRADE_ACTIVITY_TYPES = {
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
