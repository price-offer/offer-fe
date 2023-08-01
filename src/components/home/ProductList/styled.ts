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
  row-gap: 31px;

  column-gap: 28px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(4, minmax(10%, 166px));
    row-gap: 18px;
    justify-content: center;

    column-gap: 20px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(2, minmax(30%, 200px));
    row-gap: 15px;
    justify-content: center;

    column-gap: 50px;
  }

  @media (width <= 510px) {
    grid-template-columns: repeat(2, minmax(10%, 160px));
    row-gap: 8px;
    justify-content: center;

    column-gap: 20px;
  }
`

export const Styled = {
  NewProductTitle,
  ProductListWrapper
}
