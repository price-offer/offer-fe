import type { ChangeEventHandler } from 'react'
import type { ApplyPriceType } from '@hooks/result/useSelectBoxFilter'

export type PriceDialogProps = {
  inputPrice: ApplyPriceType
  applyPrice: ApplyPriceType
  handlePriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}
