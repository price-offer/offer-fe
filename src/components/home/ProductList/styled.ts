import styled from '@emotion/styled'

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px 30px;

  margin-top: 20px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 20px 15px;

    margin-top: 20px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 8px;

    margin-top: 16px;
  }
`

const LastFooter = styled.div`
  height: 20px;
`

export const Styled = {
  ProductListWrapper,
  LastFooter
}
