import type { ReactElement } from 'react'
import { ShopPageBuyView } from './panel/buy'
import type { ShopPageReviewViewProps } from './panel/review'
import { ShopPageReviewView } from './panel/review'
import type { ShopPageSaleViewProps } from './panel/sale'
import { ShopPageSaleView } from './panel/sale'
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
    panel: ShopPageBuyView
  },
  {
    tab: {
      code: 'review',
      name: '후기'
    },
    panel: (props: ShopPageReviewViewProps) => ShopPageReviewView(props)
  }
]
