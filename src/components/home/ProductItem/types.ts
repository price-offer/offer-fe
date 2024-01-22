export type ProductItemProps = {
  productItem: {
    id: number
    title: string
    price: number
    thumbnailImageUrl: string
    location: string
    createdAt: string
    liked: boolean
  }
  onClick?(): void
}
