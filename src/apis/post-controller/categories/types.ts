export type CategoryRes = {
  code: number
  message: string
  data: Category[]
}

export type Category = {
  name:
    | 'MEN_FASHION'
    | 'WOMEN_FASHION'
    | 'GAME'
    | 'SPORTS'
    | 'TOY'
    | 'DIGITAL'
    | 'CAR'
    | 'APPLIANCE'
    | 'FURNITURE'
    | 'BOOKS'
    | 'PET'
    | 'OTHER'
  exposureTitle:
    | '남성패션/잡화'
    | '여성패션/잡화'
    | '게임'
    | '스포츠/레저'
    | '장난감/취미'
    | '디지털기기'
    | '자동차/공구'
    | '생활가전'
    | '가구/인테리어'
    | '도서/티켓/음반'
    | '반려동물용품'
    | '기타 중고물품'
}

export type CategorySelectRes = Category & {
  imageUrl: string
}
