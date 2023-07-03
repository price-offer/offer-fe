import type { SelectOnChangeHandler } from '@offer-ui/react'
import { useState } from 'react'

interface CheckItemType {
  code: string
  name: string
  selected: boolean
}

interface ReturnType {
  selectedCategoryValue: string
  handleCategorySelectChange: SelectOnChangeHandler
  checkFilterList: CheckItemType[]
  onCheckItem(name: string): void
}

const cateGoryList = [
  {
    code: '전체',
    name: '전체',
    selected: true
  },
  {
    code: '남성패션/잡화',
    name: '남성패션/잡화',
    selected: false
  },
  {
    code: '여성패션/잡화',
    name: '여성패션/잡화',
    selected: false
  },
  {
    code: '게임',
    name: '게임',
    selected: false
  },
  {
    code: '스포츠/레저',
    name: '스포츠/레저',
    selected: false
  },
  {
    code: '장난감/취미',
    name: '장난감/취미',
    selected: false
  },
  {
    code: '디지털기기',
    name: '디지털기기',
    selected: false
  },
  {
    code: '자동차/공구',
    name: '자동차/공구',
    selected: false
  },
  {
    code: '생활가전',
    name: '생활가전',
    selected: false
  },
  {
    code: '가구/인테리어',
    name: '가구/인테리어',
    selected: false
  },
  {
    code: '도서/티켓/음반',
    name: '도서/티켓/음반',
    selected: false
  },
  {
    code: '반려동물',
    name: '반려동물',
    selected: false
  }
]

const useCategoryFilterList = (): ReturnType => {
  const [list, setList] = useState<CheckItemType[]>(cateGoryList)
  const [selectedCategoryValue, setSelectedCategoryValue] =
    useState<string>('전체')

  const onCheckItem = (name: string): void => {
    setList(prevList =>
      prevList.map(item => {
        if (name === item.name) {
          setSelectedCategoryValue(item.name)
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
