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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 31px 28px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(4, minmax(10%, 166px));
    gap: 18px 20px;
    justify-content: center;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(2, minmax(30%, 200px));
    gap: 15px 50px;
    justify-content: center;
  }

  @media (width <= 510px) {
    grid-template-columns: repeat(2, minmax(10%, 160px));
    gap: 8px 20px;
    justify-content: center;
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
