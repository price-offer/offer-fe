import type { SelectOnChangeHandler } from '@offer-ui/react'
import type { ChangeEventHandler } from 'react'
import type { GetPostsRes } from '@apis'
import type { ApplyPriceType } from '@hooks'
import type { TradeTypes, SortOptionCodes, TradeTypeCodes } from '@types'

export type FilterSelectProps = {
  applyPrice: ApplyPriceType
  inputPrice: ApplyPriceType
  postData?: GetPostsRes[]
  categoryItems: {
    code: string
    name: string
    selected: boolean
  }[]
  tradePeriodItems: TradeTypes
  selectedCategoryValue: string
  selectedTradePeriodValue: TradeTypeCodes | ''
  selectedSortPriceValue: SortOptionCodes
  postSummariesLength: number
  handleSortPriceChange: SelectOnChangeHandler
  handleCategoryChange: SelectOnChangeHandler
  handleTradePeriodChange: SelectOnChangeHandler
  handlePriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}
