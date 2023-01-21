import styled from '@emotion/styled'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { ProductProps } from '../Product'
import { Product } from '../Product'
import type { ProductStatusKeys } from '@constants'

type ProductItem = Omit<ProductProps, 'onChangeStatus' | 'status'>
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
      {products.map(product => (
        <Fragment key={product.id}>
          <Product
            {...product}
            status={status}
            onChangeStatus={onChangeProductStatus}
          />
          <StyledDivider />
        </Fragment>
      ))}
    </ul>
  )
}

const StyledDivider = styled.div`
  ${({ theme }): string => `
    display: none;

    ${theme.mediaQuery.tablet} {
      display: block;
      height: 8px;
      background: ${theme.colors.bgGray02};
    }
  `}
`
