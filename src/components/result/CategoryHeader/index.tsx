import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ResultHeaderProps } from './types'

const ResultHeader = ({
  searchResult,
  postData
}: ResultHeaderProps): ReactElement => {
  const postCount =
    postData && postData.reduce((acc, cur) => acc + cur.posts.length, 0)

  return (
    <Styled.CategoryHeaderWrapper>
      <Styled.CategoryHeader>
        &quot;{searchResult}&quot;의 검색결과
      </Styled.CategoryHeader>
      <Styled.CategoryHeaderResultCount>
        {postCount}개
      </Styled.CategoryHeaderResultCount>
    </Styled.CategoryHeaderWrapper>
  )
}
export { ResultHeader, ResultHeaderProps }
