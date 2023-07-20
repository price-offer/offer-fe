import type { ReactElement } from 'react'
import {
  CategoryHeaderWrapper,
  CategoryHeader,
  CategoryHeaderResultCount
} from './styled'
import type { SearchHeaderProps } from './types'

const ResultHeader = ({ searchResult }: SearchHeaderProps): ReactElement => {
  return (
    <CategoryHeaderWrapper>
      <CategoryHeader>&quot;{searchResult}&quot;의 검색결과</CategoryHeader>
      <CategoryHeaderResultCount>999개</CategoryHeaderResultCount>
    </CategoryHeaderWrapper>
  )
}
export { ResultHeader }
