import styled from '@emotion/styled'
import type { ReactElement } from 'react'

type Props = {
  searchResult: string
}

const ResultHeader = ({ searchResult }: Props): ReactElement => {
  return (
    <CategoryHeaderWrapper>
      <CategoryHeader>&quot;{searchResult}&quot;의 검색결과</CategoryHeader>
      <CategoryHeaderResultCount>999개</CategoryHeaderResultCount>
    </CategoryHeaderWrapper>
  )
}
export { ResultHeader }

const CategoryHeaderWrapper = styled.div`
  display: flex;
  gap: 8px;
`
const CategoryHeader = styled.div`
  gap: 8px;

  margin-top: 42px;
  margin-bottom: 22px;

  ${({ theme }): string => theme.fonts.display02B}
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.subtitle01B}
    margin-top: 40px;
    margin-bottom: 12px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    margin-bottom: 16px;
  }
`
const CategoryHeaderResultCount = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  margin-top: 42px;
  margin-bottom: 22px;

  color: ${({ theme }): string => theme.colors.grayScale50};

  ${({ theme }): string => theme.mediaQuery.tablet} {
    display: none;
  }
`
