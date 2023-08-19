export type OfferForm = {
  price?: number
  tradeMethod: number
  tradeLocation: {
    city: number
    country: number
    town: number
  }
}

export type PriceOfferModalProps = {
  handleClickOffer(offerForm: OfferForm): void
}
