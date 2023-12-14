import type { ReactElement } from 'react'
import { BuyPageContent, ReviewPageContent, SalePageContent } from '@components'
import type { TradeActivityName, TradeActivityType } from '@constants'

type PageTab = {
  tab: {
    code: TradeActivityType
    name: TradeActivityName
  }
  panel(): ReactElement
}

export const pageTabs: PageTab[] = [
  {
    tab: {
      code: 'sale',
      name: '판매'
    },
    panel: SalePageContent
  },
  {
    tab: {
      code: 'buy',
      name: '구매'
    },
    panel: BuyPageContent
  },
  {
    tab: {
      code: 'review',
      name: '후기'
    },
    panel: ReviewPageContent
  }
]