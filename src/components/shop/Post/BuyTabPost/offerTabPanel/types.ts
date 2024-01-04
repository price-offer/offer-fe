import type { OfferSummary } from '@types'

export type OfferTabPanelProps = OfferSummary & {
  className?: string
  onClickReadReview(): void
  onClickWriteReview(): void
}
