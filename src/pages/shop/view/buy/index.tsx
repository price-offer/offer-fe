import { SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import { useModal } from '@hooks/useModal'
import {
  useGetMyOffersQuery,
  useGetLikedPostsQuery,
  useUpdateLikeStatusMutation,
  useReviewsMutation
} from '@apis'
import type { ReviewState } from '@components'
import { Tabs, BuyTabPostList, ReviewModal } from '@components'
import { TRADE_ACTIVITY_TYPES, SORT_OPTIONS } from '@constants'
import type {
  OfferSummary,
  Review,
  SortOption,
  SortOptionCodes,
  TradeBuyActivityCodes,
  TradeBuyActivityNames
} from '@types'
import { isNumber } from '@utils'

const tradeBuyActivityList = Object.entries<
  TradeBuyActivityCodes,
  TradeBuyActivityNames
>(TRADE_ACTIVITY_TYPES.buy)

export const ShopPageBuyView = (): ReactElement => {
  const [sortOptionCode, setSortOptionCode] =
    useState<SortOptionCodes>('CREATED_DATE_DESC')
  const [activityType, setActivityType] =
    useState<TradeBuyActivityCodes>('like')
  const [readReviewContent, setReadReviewContent] = useState<Review>(
    {} as Review
  )
  const [writeReviewContent, setWriteReviewContent] = useState<OfferSummary>(
    {} as OfferSummary
  )

  const readReviewModal = useModal()
  const writeReviewModal = useModal()

  const offers = useGetMyOffersQuery({ sort: sortOptionCode })
  const likedPosts = useGetLikedPostsQuery({ sort: sortOptionCode })
  const likeStatusMutation = useUpdateLikeStatusMutation()
  const reviewsMutation = useReviewsMutation()

  const handleChangeSortOption = (newSortOption: SortOption) => {
    setSortOptionCode(newSortOption.code)
  }
  const handleChangeActivityType =
    (newActivityType: TradeBuyActivityCodes) => (): void =>
      setActivityType(newActivityType)

  const handleChangeProductLikeStatus = async (postId: number) => {
    await likeStatusMutation.mutateAsync({ postId })
    likedPosts.refetch()
  }

  const handleOpenReadReview = (review: Review) => {
    setReadReviewContent(review)
    readReviewModal.openModal()
  }
  const handleOpenWriteReview = (offer: OfferSummary) => {
    setWriteReviewContent(offer)
    writeReviewModal.openModal()
  }
  const handleConfirmWriteReview = async (reviewState: ReviewState) => {
    if (!isNumber(reviewState.reviewScore)) {
      return
    }

    await reviewsMutation.mutateAsync({
      targetMemberId: writeReviewContent.seller.id,
      postId: writeReviewContent.postId,
      score: reviewState.reviewScore,
      content: reviewState.reviewText
    })
    await offers.refetch()
    writeReviewModal.closeModal()
  }

  return (
    <div>
      <Styled.Divider size="bold" />
      <Styled.UserProductsWrapper>
        <Tabs>
          <Styled.SearchOptionsWrapper>
            <Styled.TabsList>
              {tradeBuyActivityList.map(([code, name]) => {
                const isCurrent = code === activityType

                return (
                  <Styled.Tab
                    key={`${code}-tab`}
                    onClick={handleChangeActivityType(code)}>
                    <Styled.StatusButtonLabel>
                      <Styled.Circle isCurrent={isCurrent} />
                      <Styled.StatusButton isCurrent={isCurrent} type="button">
                        <Styled.Text isCurrent={isCurrent}>{name}</Styled.Text>
                      </Styled.StatusButton>
                      <Styled.Text color="grayScale50">
                        {code === 'like'
                          ? likedPosts.data?.posts.length
                          : offers.data?.offers.length}
                      </Styled.Text>
                    </Styled.StatusButtonLabel>
                  </Styled.Tab>
                )
              })}
            </Styled.TabsList>
            <SelectBox
              colorType="none"
              items={SORT_OPTIONS}
              value={sortOptionCode}
              onChange={handleChangeSortOption}
            />
          </Styled.SearchOptionsWrapper>
          <Styled.ProductListPanels>
            <Tabs.Panel>
              <BuyTabPostList
                activityType="like"
                posts={likedPosts.data?.posts || []}
                onChangeProductLikeStatus={handleChangeProductLikeStatus}
              />
            </Tabs.Panel>
            <Tabs.Panel>
              <BuyTabPostList
                activityType="offer"
                posts={offers.data?.offers || []}
                onClickReadReview={handleOpenReadReview}
                onClickWriteReview={handleOpenWriteReview}
              />
            </Tabs.Panel>
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
      <ReviewModal.Read
        {...readReviewContent}
        isOpen={readReviewModal.isOpen}
        onClose={readReviewModal.closeModal}
        onConfirm={readReviewModal.closeModal}
      />
      <ReviewModal.Write
        isOpen={writeReviewModal.isOpen}
        nickname={writeReviewContent.seller?.nickname}
        productName={writeReviewContent.title}
        onClose={writeReviewModal.closeModal}
        onConfirm={handleConfirmWriteReview}
      />
    </div>
  )
}
