import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Styled } from './styled'
import type { ProductListProps } from './types'
import { ProductItem } from '../ProductItem'
import { useGetPostListQuery } from '@apis/post-controller/post/query'

const ProductList = ({ filterOption }: ProductListProps): ReactElement => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(false)

  const { data, fetchNextPage, hasNextPage } = useGetPostListQuery({
    sort: filterOption?.sort,
    category: filterOption?.category,
    lastId: null,
    limit: 8,
    minPrice: filterOption?.minPrice,
    maxPrice: filterOption?.maxPrice
  })

  const { ref: isLastPrdRef, inView } = useInView({
    threshold: 1
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      if (!isFirstRender) {
        setIsFirstRender(true)
        return
      }
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <>
      <Styled.NewProductTitle>새로운 상품</Styled.NewProductTitle>
      <Styled.ProductListWrapper>
        {data?.pages?.map(page =>
          page?.posts?.map(item => (
            <ProductItem key={item.id} productItem={item} />
          ))
        )}
      </Styled.ProductListWrapper>
      <Styled.LastFooter ref={isLastPrdRef} />
    </>
  )
}
export { ProductList, ProductListProps }
