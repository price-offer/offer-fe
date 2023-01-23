import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { BuyTypeProduct } from '../../Product'
import type { TradeBuyActivityType } from '@constants'
import type { ArticlesElement } from '@types'

export interface BuyTypeProductListProps {
  activityType: TradeBuyActivityType
  products: ArticlesElement[]
  className?: string
}

export const BuyTypeProductList = ({
  activityType,
  products,
  className
}: BuyTypeProductListProps): ReactElement => {
  return (
    <ul className={className}>
      {products.map((product, index) => {
        return (
          <Fragment key={product.id}>
            <BuyTypeProduct activityType={activityType} {...product} />
            {index !== products.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })}
    </ul>
  )
}
