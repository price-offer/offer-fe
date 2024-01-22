import styled from '@emotion/styled'

const NewProductTitle = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  margin-top: 52px;
  margin-bottom: 22px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.subtitle01B}
    margin-top: 40px;
    margin-bottom: 20px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    margin-bottom: 16px;
  }
`

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: start;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 18px 20px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    gap: 15px 50px;
  }
`

const LastFooter = styled.div`
  height: 20px;
`

export const Styled = {
  NewProductTitle,
  ProductListWrapper,
  LastFooter
}
