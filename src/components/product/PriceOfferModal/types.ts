import type { ModalProps } from '@offer-ui/react'

export type OfferForm = {
  price?: number
  tradeMethod: number
  tradeLocation: {
    city: number
    country: number
    town: number
  }
}

export type PriceOfferModalProps = ModalProps & {
  handleClickOffer(offerForm: OfferForm): void
}
