import { useState } from 'react'
import { useModal } from '@hooks/useModal'
import {
  useGetMyOffersQuery,
  useGetReviewsCountsQuery,
  useReviewsMutation
} from '@apis'
import type { ReviewState } from '@components'
import { OfferTabPostList, ReviewModal } from '@components'
import { SCORE } from '@constants'
import { useAuth } from '@hooks'
import type { OfferSummary, Review, SortOptionCodes } from '@types'

type OfferPanelViewProps = {
  sortOptionCode: SortOptionCodes
}
export const OfferPanelView = ({ sortOptionCode }: OfferPanelViewProps) => {
  const { user } = useAuth()
  const offers = useGetMyOffersQuery({ sort: sortOptionCode })
  const reviewsCounts = useGetReviewsCountsQuery(user.id)
  const reviewsMutation = useReviewsMutation()

  const readReviewModal = useModal()
  const writeReviewModal = useModal()

  const [readReviewProps, setReadReviewProps] = useState({} as Review)
  const [writeReviewProps, setWriteReviewProps] = useState({} as OfferSummary)

  const handleOpenReadReview = (review: Review) => {
    setReadReviewProps(review)
    readReviewModal.openModal()
  }
  const handleOpenWriteReview = (offer: OfferSummary) => {
    setWriteReviewProps(offer)
    writeReviewModal.openModal()
  }
  const handleConfirmWriteReview = async (reviewState: ReviewState) => {
    if (!reviewState.reviewScore) {
      return
    }

    await reviewsMutation.mutateAsync({
      targetMemberId: writeReviewProps.seller.id,
      postId: writeReviewProps.postId,
      score: SCORE[reviewState.reviewScore],
      content: reviewState.reviewText
    })
    await offers.refetch()
    await reviewsCounts.refetch()
    writeReviewModal.closeModal()
  }

  return (
    <>
      <OfferTabPostList
        posts={offers.data?.offers || []}
        onClickReadReview={handleOpenReadReview}
        onClickWriteReview={handleOpenWriteReview}
      />
      <ReviewModal.Read
        {...readReviewProps}
        isOpen={readReviewModal.isOpen}
        onClose={readReviewModal.closeModal}
        onConfirm={readReviewModal.closeModal}
      />
      <ReviewModal.Write
        isOpen={writeReviewModal.isOpen}
        nickname={writeReviewProps.seller?.nickname}
        productName={writeReviewProps.title}
        onClose={writeReviewModal.closeModal}
        onConfirm={handleConfirmWriteReview}
      />
    </>
  )
}
