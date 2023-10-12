import styled from '@emotion/styled'
import { Button } from '@offer-ui/react'

const HeaderContainer = styled.div``

const BannerButton = styled(Button)`
  height: 64px;
  margin-top: 32px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 48px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    height: 48px;
  }
`

export const Styled = { HeaderContainer, BannerButton }
