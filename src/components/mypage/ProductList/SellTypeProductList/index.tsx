import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { SellTypeProduct } from '../../Product'
import type { ArticlesElement, TradeStatus } from '@types'

export interface SellTypeProductListProps {
  products: ArticlesElement[]
  className?: string
  hasToken: boolean
  onChangeTradeStatus(productId: number, status: TradeStatus): void
}

export const SellTypeProductList = ({
  products,
  hasToken,
  onChangeTradeStatus,
  className
}: SellTypeProductListProps): ReactElement => {
  return (
    <ul className={className}>
      {products.map((product, index) => {
        return (
          <Fragment key={product.id}>
            <SellTypeProduct
              {...product}
              hasToken={hasToken}
              onChangeTradeStatus={onChangeTradeStatus}
            />
            {index !== products.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })}
    </ul>
  )
}
