export type GetCategoriesRes = {
  code: string
  name: string
  imageUrl: string
}[]

export type PostReq = {
  sort?: string
  tradeType?:
    | 'TRADE_TYPE__ALL'
    | 'TRADE_TYPE__FACE_TO_FACE'
    | 'TRADE_TYPE__SHIPPING'
  category?: string
  minPrice?: number
  maxPrice?: number
  lastId?: number | null
  limit: number
}

export type PostDataInfoRes = {
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
