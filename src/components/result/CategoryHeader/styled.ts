import styled from '@emotion/styled'

export const CategoryHeaderWrapper = styled.div`
  display: flex;
  gap: 8px;
`
export const CategoryHeader = styled.div`
  ${({ theme }): string => theme.fonts.display02B}
  margin-top: 42px;
  margin-bottom: 22px;
  gap: 8px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.subtitle01B}
    margin-top: 40px;
    margin-bottom: 12px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    margin-bottom: 16px;
  }
`

export const CategoryHeaderResultCount = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  color:${({ theme }): string => theme.colors.grayScale50};
  margin-top: 42px;
  margin-bottom: 22px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    display: none;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
  }
`
