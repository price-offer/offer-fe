import type { SelectOnChangeHandler } from '@offer-ui/react'
import type { ChangeEventHandler } from 'react'
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
  minPriceValue: string
  maxPriceValue: string
  handleTradePeriodSelectChange: SelectOnChangeHandler
  handleSortPriceSelectChange: SelectOnChangeHandler
  handleMinPriceInputChange: ChangeEventHandler
  handleMaxPriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
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
  const [minPriceValue, setMinPriceValue] = useState<string>('')
  const [maxPriceValue, setMaxPriceValue] = useState<string>('')

  const handleTradePeriodSelectChange: SelectOnChangeHandler<{
    code: string
    name: string
  }> = item => {
    setSelectedTradePeriodValue(item.code)
  }

  const handleSortPriceSelectChange: SelectOnChangeHandler<{
    code: string
    name: string
  }> = item => {
    setSelectedSortPriceValue(item.code)
  }

  const handleMinPriceInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const inputValue = e.target.value
    setMinPriceValue(inputValue)
  }

  const handleMaxPriceInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const inputValue = e.target.value
    setMaxPriceValue(inputValue)
  }

  const handlePriceApplyClick = (): void => {
    //필터적용
  }

  return {
    tradePeriodItems,
    sortPriceItems,
    selectedTradePeriodValue,
    selectedSortPriceValue,
    minPriceValue,
    maxPriceValue,
    handleTradePeriodSelectChange,
    handleSortPriceSelectChange,
    handleMinPriceInputChange,
    handleMaxPriceInputChange,
    handlePriceApplyClick
  }
}

export default useSelectBoxFilter
