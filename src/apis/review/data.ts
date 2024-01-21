import type { TradeReviewActivityCodes } from '@types'

export type SelectReviewCounts = {
  [key in TradeReviewActivityCodes]: number
}

export const initialReviewsCounts = {
  all: 0,
  seller: 0,
  buyer: 0
}

export const initialReviews = {
  hasNext: false,
  reviews: []
}
