import type { ModalProps } from '@offer-ui/react'

export type TradeAreaKeys = 'city' | 'county' | 'town'

export type OfferForm = {
  price?: number
  tradeMethod?: number
  tradeArea?: {
    [key in TradeAreaKeys]?: number
  }
}

export type PriceOfferModalProps = Omit<ModalProps, 'children'> & {
  onClickOffer?(offerForm: OfferForm): void
}
