export type PostProductReq = {
  title: string
  category: string
  price: number
  location: string
  productCondition: string
  tradeType: string
  thumbnailImageUrl: string
  imageUrls: string[]
  description: string
}

export type PostProductRes = {
  id: number
  createdAt: string
}
