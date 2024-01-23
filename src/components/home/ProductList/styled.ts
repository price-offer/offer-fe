import styled from '@emotion/styled'

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: start;

  margin-top: 20px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 18px 20px;

    margin-top: 20px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    gap: 15px 50px;

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
