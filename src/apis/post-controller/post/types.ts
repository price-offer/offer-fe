export type PostReq = {
  sort?: string
  tradeType?:
    | 'TRADE_TYPE__ALL'
    | 'TRADE_TYPE__FACE_TO_FACE'
    | 'TRADE_TYPE__SHIPPING'
  category?:
    | ''
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
  minPrice?: number
  maxPrice?: number
  lastId?: number | null
  limit: number
}

export type PostRes = {
  code: number
  message: string
  data: PostDataInfo
}

export type PostDataInfo = {
  posts: Post[]
  hasNext: boolean
}

export type Post = {
  id: number
  title: string
  price: number
  thumnail: string
  location: string
  createdAt: string
  liked: boolean
}
