import type { SelectOnChangeHandler } from '@offer-ui/react'
import type { ChangeEventHandler } from 'react'
import type { TRADE_TYPES } from '@constants/app'
import type { GetPostsRes } from '@apis'
import type { ApplyPriceType } from '@hooks'

export type FilterSelectProps = {
  applyPrice: ApplyPriceType
  postData?: GetPostsRes[]
  categoryItems: {
    code: string
    name: string
    selected: boolean
  }[]
  tradePeriodItems: typeof TRADE_TYPES
  sortPriceItems: {
    code: string
    name: string
  }[]
  selectedCategoryValue: string
  selectedTradePeriodValue: string
  selectedSortPriceValue: string
  minPriceValue: string
  maxPriceValue: string
  postSummaries: number
  handleSortPriceChange: SelectOnChangeHandler
  handleCategoryChange: SelectOnChangeHandler
  handleTradePeriodChange: SelectOnChangeHandler
  handleMinPriceInputChange: ChangeEventHandler
  handleMaxPriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}
