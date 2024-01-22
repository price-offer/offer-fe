import type { Category as DefaultCategory } from '@types'

export type CategorySlideFilterProps = {
  categories: Pick<DefaultCategory, 'code' | 'name'>[]
  selectedCategory?: string
  onClickCategory(code: string): void
}
export type CategoryItemProps = {
  selected: boolean
}

export type CateGoryItemWrapperProps = {
  moveDistanceFromArrow: number
}
