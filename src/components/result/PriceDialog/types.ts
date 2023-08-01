import type { ChangeEventHandler } from 'react'

export type PriceDialogProps = {
  minPriceValue: string
  maxPriceValue: string
  handleMinPriceInputChange: ChangeEventHandler
  handleMaxPriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}
