import type { ChangeEventHandler } from 'react'
import type { ApplyPriceType } from '@hooks/result/useSelectBoxFilter'

export type PriceDialogProps = {
  minPriceValue: string
  maxPriceValue: string
  applyPrice: ApplyPriceType
  handleMinPriceInputChange: ChangeEventHandler
  handleMaxPriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}
