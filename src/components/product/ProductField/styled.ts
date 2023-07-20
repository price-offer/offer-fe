import styled from '@emotion/styled'
import type { StyledTextWrapperProps } from './types'

export const StyledProductField = styled.div`
  display: flex;
  gap: 12px;
`
export const StyledTextWrapper = styled.div<StyledTextWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: ${({ height }): string => `${height}px`};
`
