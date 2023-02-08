import { useState } from 'react'

interface CheckItemType {
  selected: boolean
  title: string
}

interface ReturnType {
  checkFilterList: CheckItemType[]
  onCheckItem(title: any): void
}

const useCategoryFilterList = (checkList: CheckItemType[]): ReturnType => {
  const [list, setList] = useState<CheckItemType[]>(checkList)

  const onCheckItem = (title: string): void => {
    setList(prevList =>
      prevList.map(item => {
        if (title === item.title) {
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

  return {
    onCheckItem,
    checkFilterList: list
  }
}

export default useCategoryFilterList
