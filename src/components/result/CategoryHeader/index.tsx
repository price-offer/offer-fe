import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ResultHeaderProps } from './types'

const ResultHeader = ({
  resultMessage,
  postsCount
}: ResultHeaderProps): ReactElement => {
  return (
    <Styled.CategoryHeaderWrapper>
      <Styled.CategoryHeader>{resultMessage}</Styled.CategoryHeader>
      <Styled.CategoryHeaderResultCount>
        {postsCount}개
      </Styled.CategoryHeaderResultCount>
    </Styled.CategoryHeaderWrapper>
  )
}
export { ResultHeader, ResultHeaderProps }
