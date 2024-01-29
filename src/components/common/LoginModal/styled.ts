import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button } from '@offer-ui/react'

const KaKaoButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.kakao};

    color: ${theme.colors.grayScale90};
  `};
`

export const Styled = {
  KaKaoButton
}
