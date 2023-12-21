import type { ReactElement } from 'react'
import type { ShopPageBuyViewProps } from './view/buy'
import { ShopPageBuyView } from './view/buy'
import type { ShopPageReviewViewProps } from './view/review'
import { ShopPageReviewView } from './view/review'
import type { ShopPageSaleViewProps } from './view/sale'
import { ShopPageSaleView } from './view/sale'
import type { TradeActivityNames, TradeActivityCodes } from '@types'

type PageTab = {
  tab: {
    code: TradeActivityCodes
    name: TradeActivityNames
  }
  panel(props: unknown): ReactElement
}

export const pageTabs: PageTab[] = [
  {
    tab: {
      code: 'sale',
      name: '판매'
    },
    panel: (props: ShopPageSaleViewProps) => ShopPageSaleView(props)
  },
  {
    tab: {
      code: 'buy',
      name: '구매'
    },
    panel: (props: ShopPageBuyViewProps) => ShopPageBuyView(props)
  },
  {
    tab: {
      code: 'review',
      name: '후기'
    },
    panel: (props: ShopPageReviewViewProps) => ShopPageReviewView(props)
  }
]
