export type PriceRange = {
  min?: number
  max?: number
}

export type PriceDialogProps = {
  priceRange: PriceRange
  onClickApply?(priceRange: PriceRange): void
}
