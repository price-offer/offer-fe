import type { LikeActivityProps } from '@components/shop/Post/BuyTabPost/types'
import type {
  OfferSummary,
  PostSummary,
  Review,
  TradeBuyActivityCodes
} from '@types'

export type BuyTabPostListProps = {
  className?: string
} & (LikePostListProps | OfferPostListProps)

export type LikePostListProps = {
  activityType: Extract<TradeBuyActivityCodes, 'like'>
  posts: PostSummary[]
  onChangeProductLikeStatus: LikeActivityProps['onChangeProductLikeStatus']
}

export type OfferPostListProps = {
  activityType: Extract<TradeBuyActivityCodes, 'offer'>
  posts: OfferSummary[]
  onClickWriteReview(offer: OfferSummary): void
  onClickReadReview(review: Review): void
}

export type PostType = OfferSummary | PostSummary
