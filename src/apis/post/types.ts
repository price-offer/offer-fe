import type {
  CommonCreation,
  OptionShape,
  PostDetail,
  PostSummaries,
  ProductConditionCodes,
  TradeStatusType,
  TradeTypeCodes
} from '@types'

export type GetPostRes = PostDetail

export type UpdatePostReq = {
  title: string
  category: string
  price: number
  location: string
  productCondition: ProductConditionCodes
  tradeStatus: TradeStatusType
  tradeType: TradeTypeCodes
  thumbnailImageUrl: string
  imageUrls: string[]
  description: string
}
export type UpdatePostRes = PostDetail

export type DeletePostReq = {
  postId: number
}
export type DeletePostRes = {
  // TODO: 정확한 타입 BE 확인 필요
}

// TODO: 정확한 타입 BE 확인 필요
export type UpdateTradeStatusReq = {
  postId: number
  request: TradeStatusType
}
export type UpdateTradeStatusRes = number

export type GetPostsReq = {
  sort?: string
  tradeType?: string
  category?: string | null
  sellerId?: number
  tradeStatus?: string
  minPrice?: number | null
  maxPrice?: number | null
  lastId?: number | null
  limit?: number
}
export type GetPostsRes = PostSummaries

export type CreatePostReq = {
  title: string
  category: string
  price: number
  location: string
  productCondition: ProductConditionCodes
  tradeType: TradeTypeCodes
  thumbnailImageUrl: string
  imageUrls: string[]
  description: string
}
export type CreatePostRes = CommonCreation

export type GetCategoriesRes = (OptionShape & { imageUrl: string })[]
