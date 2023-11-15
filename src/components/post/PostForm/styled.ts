import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Text } from '@offer-ui/react'
import type { StyledPostFormProps } from './types'

const PostForm = styled.div<StyledPostFormProps>`
  display: flex;
  gap: 20px;
  align-items: ${({ formAlign }): string => formAlign};
`
const Label = styled(Text)`
  width: 100px;

  ${({ theme }) => css`
    ${theme.mediaQuery.tablet} {
      width: 60px;
      min-width: 60px;

      ${theme.fonts.body02B}
    }

    ${theme.mediaQuery.mobile} {
      width: 60px;
      min-width: 60px;
      ${theme.fonts.body02B}
    }
  `}
`

export const Styled = {
  PostForm,
  Label
}
