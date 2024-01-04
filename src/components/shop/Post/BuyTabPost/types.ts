import type { LikeTabPanelProps } from './likeTabPanel'
import type { OfferTabPanelProps } from './offerTabPanel'
import type { OfferSummary, PostSummary, TradeBuyActivityCodes } from '@types'

export type BuyTabPostProps = { className?: string } & (
  | LikeActivityProps
  | OfferActivityProps
)

export type LikeActivityProps = {
  activityType: Extract<TradeBuyActivityCodes, 'like'>
  onChangeProductLikeStatus: LikeTabPanelProps['onChangeLikeStatus']
} & PostSummary
export type OfferActivityProps = {
  activityType: Extract<TradeBuyActivityCodes, 'offer'>
  onClickWriteReview: OfferTabPanelProps['onClickWriteReview']
  onClickReadReview: OfferTabPanelProps['onClickReadReview']
} & OfferSummary
