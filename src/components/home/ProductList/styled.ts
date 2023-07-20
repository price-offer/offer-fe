import styled from '@emotion/styled'

export const NewProductTitle = styled.div`
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

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 31px;
  column-gap: 28px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    justify-content: center;
    grid-template-columns: repeat(4, minmax(10%, 166px));
    row-gap: 18px;
    column-gap: 20px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    justify-content: center;
    grid-template-columns: repeat(2, minmax(30%, 200px));
    row-gap: 15px;
    column-gap: 50px;
  }

  @media (max-width: 510px) {
    justify-content: center;
    grid-template-columns: repeat(2, minmax(10%, 160px));
    row-gap: 8px;
    column-gap: 20px;
  }
`
