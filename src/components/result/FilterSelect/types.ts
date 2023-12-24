import type { SelectOnChangeHandler } from '@offer-ui/react'
import type { ChangeEventHandler } from 'react'
import type { GetPostsRes } from '@apis/post'
import type { ApplyPriceType } from '@hooks/result/useSelectBoxFilter'

export type FilterSelectProps = {
  applyPrice: ApplyPriceType
  postData?: GetPostsRes[]
  categoryItems: {
    code: string
    name: string
    selected: boolean
  }[]
  tradePeriodItems: {
    code: string
    name: string
  }[]
  sortPriceItems: {
    code: string
    name: string
  }[]
  selectedCategoryValue: string
  selectedTradePeriodValue: string
  selectedSortPriceValue: string
  minPriceValue: string
  maxPriceValue: string
  handleSortPriceChange: SelectOnChangeHandler
  handleCategoryChange: SelectOnChangeHandler
  handleTradePeriodChange: SelectOnChangeHandler
  handleMinPriceInputChange: ChangeEventHandler
  handleMaxPriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}
