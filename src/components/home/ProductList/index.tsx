import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Styled } from './styled'
import type { ProductListProps } from './types'
import { ProductItem } from '../ProductItem'
import { useUpdateLikeStatusMutation } from '@apis/like'

const ProductList = ({
  postList,
  hasNextPage,
  fetchNextPage
}: ProductListProps): ReactElement => {
  const router = useRouter()

  const updateLikeStatusMutation = useUpdateLikeStatusMutation()

  const { ref: isLastPostRef, inView } = useInView({
    threshold: 1
  })

  const shouldFetchNextPage = inView && hasNextPage

  const handleClickLike = (postId: number) => () => {
    updateLikeStatusMutation.mutateAsync(postId)
  }

  useEffect(() => {
    fetchNextPage?.()
  }, [fetchNextPage, shouldFetchNextPage])

  return (
    <>
      <Styled.ProductListWrapper>
        {postList?.map(page =>
          page?.posts?.map(post => (
            <ProductItem
              key={post.id}
              productItem={post}
              onClickLike={handleClickLike(post.id)}
              onClickProduct={() => router.push(`/post/${post.id}`)}
            />
          ))
        )}
      </Styled.ProductListWrapper>
      <Styled.LastFooter ref={isLastPostRef} />
    </>
  )
}
export { ProductList, ProductListProps }
