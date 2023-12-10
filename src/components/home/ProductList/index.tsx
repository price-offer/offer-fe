import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Styled } from './styled'
import type { ProductListProps } from './types'
import { ProductItem } from '../ProductItem'

const ProductList = ({
  postData,
  hasNextPage,
  fetchNextPage
}: ProductListProps): ReactElement => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(false)

  const { ref: isLastPrdRef, inView } = useInView({
    threshold: 1
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      if (!isFirstRender) {
        setIsFirstRender(true)
        return
      }
      fetchNextPage && fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <>
      <Styled.NewProductTitle>새로운 상품</Styled.NewProductTitle>
      <Styled.ProductListWrapper>
        {postData?.pages?.map(page =>
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
