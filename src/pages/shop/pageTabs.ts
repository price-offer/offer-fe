import type { ReactElement } from 'react'
import { ShopPageBuyPanel } from './panel/buy'
import type { ShopPageReviewPanelProps } from './panel/review'
import { ShopPageReviewPanel } from './panel/review'
import type { ShopPageSalePanelProps } from './panel/sale'
import { ShopPageSalePanel } from './panel/sale'
import type { TradeActivityNames, TradeActivityCodes } from '@types'

type PageTab = {
  tab: {
    code: TradeActivityCodes
    name: TradeActivityNames
  }
  panel(props: unknown): ReactElement
}

export const tabList = ['sale', 'buy', 'review']

export const pageTabs: PageTab[] = [
  {
    tab: {
      code: 'sale',
      name: '판매'
    },
    panel: (props: ShopPageSalePanelProps) => ShopPageSalePanel(props)
  },
  {
    tab: {
      code: 'buy',
      name: '구매'
    },
    panel: ShopPageBuyPanel
  },
  {
    tab: {
      code: 'review',
      name: '후기'
    },
    panel: (props: ShopPageReviewPanelProps) => ShopPageReviewPanel(props)
  }
]
