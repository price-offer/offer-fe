import styled from '@emotion/styled'
import type { StyledTextWrapperProps } from './types'

const PostFieldList = styled.div`
  display: flex;
  gap: 12px;
`
const TextWrapper = styled.div<StyledTextWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;

  height: ${({ height }): string => `${height}px`};
`

export const Styled = {
  PostFieldList,
  TextWrapper
}
