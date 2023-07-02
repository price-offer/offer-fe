import type { SelectOnChangeHandler } from '@offer-ui/react'
import { useState } from 'react'

interface SelectItemsType {
  code: string
  name: string
}

interface ReturnType {
  tradePeriodItems: SelectItemsType[]
  sortPriceItems: SelectItemsType[]
  selectedTradePeriodValue: string
  selectedSortPriceValue: string
  handleChangeTradePeriodSelect: SelectOnChangeHandler
  handleChangeSortPriceSelect: SelectOnChangeHandler
}

const tradePeriodItems = [
  {
    code: '직거래/택배거래',
    name: '직거래/택배거래'
  },
  {
    code: '직거래',
    name: '직거래'
  },
  {
    code: '택배거래',
    name: '택배거래'
  }
]

const sortPriceItems = [
  {
    code: '높은 가격순',
    name: '높은 가격순'
  },
  {
    code: '낮은 가격순',
    name: '낮은 가격순'
  },
  {
    code: '최신순',
    name: '최신순'
  }
]

const useSelectBoxFilter = (): ReturnType => {
  const [selectedTradePeriodValue, setSelectedTradePeriodValue] =
    useState<string>('')

  const [selectedSortPriceValue, setSelectedSortPriceValue] =
    useState<string>('')

  const handleChangeTradePeriodSelect: SelectOnChangeHandler<{
    code: string
    name: string
  }> = item => {
    setSelectedTradePeriodValue(item.code)
  }

  const handleChangeSortPriceSelect: SelectOnChangeHandler<{
    code: string
    name: string
  }> = item => {
    setSelectedSortPriceValue(item.code)
  }

  return {
    tradePeriodItems,
    sortPriceItems,
    selectedTradePeriodValue,
    selectedSortPriceValue,
    handleChangeTradePeriodSelect,
    handleChangeSortPriceSelect
  }
}

export default useSelectBoxFilter
