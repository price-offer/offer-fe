import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ResultHeaderProps } from './types'

const ResultHeader = ({
  searchResult,
  postSummariesLength
}: ResultHeaderProps): ReactElement => {
  return (
    <Styled.CategoryHeaderWrapper>
      <Styled.CategoryHeader>
        &quot;{searchResult}&quot;의 검색결과
      </Styled.CategoryHeader>
      <Styled.CategoryHeaderResultCount>
        {postSummariesLength && postSummariesLength}개
      </Styled.CategoryHeaderResultCount>
    </Styled.CategoryHeaderWrapper>
  )
}
export { ResultHeader, ResultHeaderProps }
