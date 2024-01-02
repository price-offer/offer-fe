import type { ModalProps } from '@offer-ui/react'
import type { TradeTypeCodes } from '@types'

export type TradeAreaKeys = 'city' | 'county' | 'town'

export type OfferForm = {
  price?: string
  tradeType?: TradeTypeCodes
  tradeArea?: {
    [key in TradeAreaKeys]?: number
  }
}

export type PriceOfferModalProps = Omit<ModalProps, 'children'> & {
  onClickOffer?(offerForm: OfferForm): void
}
