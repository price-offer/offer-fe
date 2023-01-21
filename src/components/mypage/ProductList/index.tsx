import styled from '@emotion/styled'
import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { ProductProps } from '../Product'
import { Product } from '../Product'
import type { ProductStatusKeys } from '@constants'

export type ProductItem = Omit<ProductProps, 'onChangeStatus'>
export interface ProductListProps {
  className?: string
  products: ProductItem[]
  status: ProductStatusKeys
  onChangeProductStatus(id: number, status: ProductStatusKeys): void
}

export const ProductList = ({
  products = [],
  status,
  onChangeProductStatus,
  className
}: ProductListProps): ReactElement => {
  return (
    <ul className={className}>
      {products.map((product, index) => (
        <Fragment key={product.id}>
          <Product
            {...product}
            status={status}
            onChangeStatus={onChangeProductStatus}
          />
          {index !== products.length - 1 && <StyledDivider size="bold" />}
        </Fragment>
      ))}
    </ul>
  )
}

const StyledDivider = styled(Divider)`
  ${({ theme }): string => `
    display: none;

    ${theme.mediaQuery.tablet} {
      display: block;
    }
  `}
`
