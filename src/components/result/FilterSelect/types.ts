import type { Category, SortOptionCodes, TradeTypeCodes } from '@types'

export type Filters = {
  sort: SortOptionCodes
  category?: string
  tradeType?: TradeTypeCodes
  priceRange: {
    min: number
    max?: number
  }
}
export type HandleChangeFilter = (
  name: KeyOf<Filters>,
  value: ValueOf<Filters>
) => void

export type FilterSelectProps = {
  categories: Pick<Category, 'code' | 'name'>[]
  postCount?: number
  filters: Filters
  handleChangeFilters: HandleChangeFilter
}
