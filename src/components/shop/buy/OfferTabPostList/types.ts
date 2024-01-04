import type { OfferSummary, Review } from '@types'

export type OfferPostListProps = {
  className?: string
  posts: OfferSummary[]
  onClickWriteReview(offer: OfferSummary): void
  onClickReadReview(review: Review): void
}
