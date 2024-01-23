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

export type SearchOptionsStateKeys = KeyOf<SearchOptionsState>

export type OnChangeSearchOptions = (
  name: SearchOptionsStateKeys,
  value: ValueOf<SearchOptionsState>
) => void

export type SearchOptionsProps = {
  postsCount?: number
  categories: Pick<Category, 'code' | 'name'>[]
  searchOptions: SearchOptionsState
  onChangeSearchOption: OnChangeSearchOptions
}
