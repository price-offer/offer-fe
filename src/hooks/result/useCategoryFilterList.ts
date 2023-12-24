import type { SelectOnChangeHandler } from '@offer-ui/react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useGetCategoriesQuery } from '@apis/post'
import { manipulateArray } from '@utils/result'
export type CheckItemType = {
  code: string
  name: string
  selected: boolean
}

type ReturnType = {
  selectedCategoryValue: string
  handleCategorySelectChange: SelectOnChangeHandler
  checkFilterList: CheckItemType[]
  onCheckItem(name: string): void
}

const useCategoryFilterList = (): ReturnType => {
  const { data: categories, isSuccess } = useGetCategoriesQuery()
  const [list, setList] = useState<CheckItemType[]>([
    {
      code: '',
      name: '',
      selected: false
    }
  ])

  const [selectedCategoryValue, setSelectedCategoryValue] =
    useState<string>('ALL')

  const searchParams = useSearchParams()
  const defaultCategory = searchParams.get('category')

  useEffect(() => {
    if (isSuccess) {
      const cateGoryList = manipulateArray(categories, defaultCategory)
      setList(cateGoryList)
      setSelectedCategoryValue(defaultCategory ? defaultCategory : 'ALL')
    }
  }, [categories, defaultCategory, isSuccess])

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
    code: string
    name: string
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

export default useCategoryFilterList
