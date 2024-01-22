import type { Category, SortOptionCodes, TradeTypeCodes } from '@types'

export type SearchOptionsState = {
  sort: SortOptionCodes
  category?: string
  tradeType?: TradeTypeCodes
  priceRange: {
    min?: number
    max?: number
  }
}
export type OnChangeSearchOptions = (
  name: KeyOf<SearchOptionsState>,
  value: ValueOf<SearchOptionsState>
) => void

export type SearchOptionsProps = {
  categories: Pick<Category, 'code' | 'name'>[]
  postsCount?: number
  searchOptions: SearchOptionsState
  onChangeSearchOption: OnChangeSearchOptions
}
