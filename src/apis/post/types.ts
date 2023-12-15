import type {
  ProductConditionCodes,
  TradeStatusCodes,
  TradeTypeCodes
} from '@types'

export type GetPostDetailRes = {
  id: number
  title: string
  description: string
  imageUrls: string[]
  price: number
  location: string
  tradeType: TradeTypeCodes
  tradeStatus: TradeStatusCodes
  productCondition: ProductConditionCodes
  createdAt: string
}

export type GetCategoriesRes = {
  code: string
  name: string
}[]
