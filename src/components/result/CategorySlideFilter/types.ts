export type CategorySlideFilterProps = {
  cateGoryList: {
    selected: boolean
    code: string
    name: string
  }[]
  onCategoryClick(name: string): void
}
export type CategoryItemProps = {
  selected: boolean
}

export type CateGoryItemWrapperProps = {
  moveDistanceFromArrow: number
}
