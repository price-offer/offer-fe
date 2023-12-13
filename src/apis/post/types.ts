import type { ProductConditionCodes, TradeTypeCodes } from '@types'

export type GetPostDetailRes = {
  id: number
  title: string
  description: string
  imageUrls: string[]
  price: number
  location: string
  tradeType: TradeTypeCodes
  productCondition: ProductConditionCodes
  createdAt: string
}

export type GetCategoriesRes = {
  code: string
  name: string
}[]
