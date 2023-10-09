export type ProductBubbleProps = {
  id: number
  title: string
  price: number
  offerPrice: number
  tradeType: 2 | 4 | 8
  productImageUrl: string
  onClick?(productId: number): void
}
