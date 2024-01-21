import type { SelectOnChangeHandler } from '@offer-ui/react'
import type { ChangeEventHandler } from 'react'
import { useState } from 'react'
import { TRADE_TYPES } from '@constants'
import type {
  TradeTypes,
  TradeType,
  SortOptionCodes,
  TradeTypeCodes,
  SortOption
} from '@types'

export type ApplyPriceType = {
  minPrice: number | undefined
  maxPrice: number | undefined
}

type ReturnType = {
  tradePeriodItems: TradeTypes
  selectedTradePeriodValue: TradeTypeCodes | ''
  selectedSortPriceValue: SortOptionCodes
  inputPrice: ApplyPriceType
  applyPrice: ApplyPriceType
  handleTradePeriodSelectChange: SelectOnChangeHandler
  handleSortPriceSelectChange: SelectOnChangeHandler
  handlePriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}

export const useSelectBoxFilter = (): ReturnType => {
  const [selectedTradePeriodValue, setSelectedTradePeriodValue] = useState<
    TradeTypeCodes | ''
  >('')
  const [selectedSortPriceValue, setSelectedSortPriceValue] =
    useState<SortOptionCodes>('CREATED_DATE_DESC')
  const [inputPrice, setInputPrice] = useState<ApplyPriceType>({
    minPrice: undefined,
    maxPrice: undefined
  })
  const [applyPrice, setApplyPrice] = useState<ApplyPriceType>({
    minPrice: undefined,
    maxPrice: undefined
  })

  const handleTradePeriodSelectChange: SelectOnChangeHandler<
    TradeType
  > = item => {
    setSelectedTradePeriodValue(item.code)
  }

  const handleSortPriceSelectChange: SelectOnChangeHandler<
    SortOption
  > = item => {
    setSelectedSortPriceValue(item.code)
  }

  const handlePriceInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target
    setInputPrice(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePriceApplyClick = (): void => {
    setApplyPrice({
      minPrice: Number(String(inputPrice?.minPrice).replace(/,/g, '')),
      maxPrice: Number(String(inputPrice?.maxPrice).replace(/,/g, ''))
    })
  }

  return {
    tradePeriodItems: TRADE_TYPES,
    selectedTradePeriodValue,
    selectedSortPriceValue,
    inputPrice,
    applyPrice,
    handleTradePeriodSelectChange,
    handleSortPriceSelectChange,
    handlePriceInputChange,
    handlePriceApplyClick
  }
}

export default useSelectBoxFilter
