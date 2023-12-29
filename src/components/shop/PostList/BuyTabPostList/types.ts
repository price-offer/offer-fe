import type { LikeActivityProps } from '@components/shop/Post/BuyTabPost/types'
import type { OfferSummary, PostSummary, TradeBuyActivityCodes } from '@types'

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
}

export type PostType = OfferSummary | PostSummary
