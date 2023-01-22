import type { ReactElement } from 'react'
import { BuyOfProduct } from './BuyOfProduct'
import { SellOfProduct } from './SellOfProduct'
import type { ArticlesElement, TradeType, TradeStatus, Review } from '@types'

// Articles Element에 빠져있는 것: 좋아요 갯수(likeCount), 리뷰 (review)
export interface ProductItemProps extends ArticlesElement {
  likeCount: number
  review: Review | null
  className?: string
  onChangeTradeStatus(productId: number, status: TradeStatus): void
}

export const TRADE_STATUS_OPTIONS: TradeStatus[] = [
  {
    name: '판매중',
    code: 4
  },
  {
    name: '거래완료',
    code: 8
  }
]

export interface Product2Props extends ProductItemProps {
  tradeType: TradeType
}
export const Product2 = ({
  tradeType,
  className,
  onChangeTradeStatus,
  ...articleProps
}: Product2Props): ReactElement => {
  const ProductItem = tradeType === 'sell' ? SellOfProduct : BuyOfProduct

  return (
    <>
      <ProductItem
        className={className}
        onChangeTradeStatus={onChangeTradeStatus}
        {...articleProps}
      />
    </>
  )
}
