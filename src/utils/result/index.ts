import type { GetCategoriesRes } from '@apis/post'
import type { CheckItemType } from '@hooks/result/useCategoryFilterList'

export const manipulateArray = (
  categories: GetCategoriesRes,
  searchParams: string | null
) => {
  const newArr: CheckItemType[] = categories.map(category => {
    const { ...rest } = category
    return { ...rest, selected: false }
  })

  newArr.unshift({ code: 'ALL', name: '전체', selected: false })

  if (searchParams === null) {
    newArr[0].selected = true
  } else {
    const updatedArr = newArr.map(item => {
      if (item.code === searchParams) {
        return { ...item, selected: true }
      } else {
        return item
      }
    })
    return updatedArr
  }

  return newArr
}
