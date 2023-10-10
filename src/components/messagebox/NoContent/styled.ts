import styled from '@emotion/styled'
import type { StyledMessageProps } from './types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

const Message = styled.p<StyledMessageProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  line-height: 1.4;
  text-align: center;
  white-space: pre;
`

export const Styled = {
  Container,
  Message
}
