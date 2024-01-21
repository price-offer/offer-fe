import type { SelectOnChangeHandler } from '@offer-ui/react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  initializeCategoriesWithAll,
  updateSelectionInCategories
} from '@utils/service/result'
import { CATEGORIES } from '@constants'
import type { CategoryCodes, CategoryNames } from '@types'
export type CheckItemType = {
  code: CategoryCodes | 'ALL'
  name: CategoryNames | '전체'
  selected: boolean
}

type ReturnType = {
  selectedCategoryValue: CategoryCodes | 'ALL'
  handleCategorySelectChange: SelectOnChangeHandler
  checkFilterList: CheckItemType[]
  onCheckItem(name: string): void
}

export const useCategoryFilterList = (): ReturnType => {
  const [list, setList] = useState<CheckItemType[]>([
    {
      code: 'ALL',
      name: '전체',
      selected: false
    }
  ])

  const [selectedCategoryValue, setSelectedCategoryValue] = useState<
    CategoryCodes | 'ALL'
  >('ALL')

  const searchParams = useSearchParams()
  const defaultCategory = searchParams.get('category') as CategoryCodes | null

  useEffect(() => {
    const transRateCategories = initializeCategoriesWithAll(CATEGORIES)

    const categoryList = updateSelectionInCategories(
      transRateCategories,
      defaultCategory
    )
    setList(categoryList)
    setSelectedCategoryValue(defaultCategory ? defaultCategory : 'ALL')
  }, [defaultCategory])

  const onCheckItem = (name: string): void => {
    setList(prevList =>
      prevList?.map(item => {
        if (name === item.name) {
          setSelectedCategoryValue(item.code)
          return {
            ...item,
            selected: true
          }
        } else {
          return {
            ...item,
            selected: false
          }
        }
      })
    )
  }
  const handleCategorySelectChange: SelectOnChangeHandler<{
    code: CategoryCodes | 'ALL'
    name: CategoryNames | '전체'
  }> = item => {
    onCheckItem(item.name)
    setSelectedCategoryValue(item.code)
  }

  return {
    onCheckItem,
    checkFilterList: list,
    selectedCategoryValue,
    handleCategorySelectChange
  }
}
