import type { CheckItemType } from '@hooks/result/useCategoryFilterList'
import type { Categories, CategoryCodes } from '@types'

export const initializeCategoriesWithAll = (categories: Categories) => {
  const newArr: CheckItemType[] = categories.map(category => {
    const { ...rest } = category
    return { ...rest, selected: false }
  })

  newArr.unshift({ code: 'ALL', name: '전체', selected: false })

  return newArr
}

export const updateSelectionInCategories = (
  categories: CheckItemType[],
  searchParams: CategoryCodes | null
) => {
  if (searchParams === null) {
    return categories
  } else {
    return categories.map(item => {
      if (item.code === searchParams) {
        return { ...item, selected: true }
      } else {
        return { ...item, selected: false }
      }
    })
  }
}
