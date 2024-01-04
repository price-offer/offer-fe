import type { OfferSummary } from '@types'

export type OfferTabPostProps = OfferSummary & {
  className?: string
  onClickReadReview(): void
  onClickWriteReview(): void
}
