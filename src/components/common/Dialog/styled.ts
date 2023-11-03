import styled from '@emotion/styled'
import type { StyledDialogWrapperProps } from './types'

const DialogWrapper = styled.div<StyledDialogWrapperProps>`
  position: absolute;
  display: ${({ isOpen }): string => (isOpen ? 'flex' : 'none')};
`
const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
`

const DialogBox = styled.div`
  position: relative;

  min-width: 120px;
  min-height: 48px;
  padding: 16px 12px;
  border: 1px solid var(--gray-scale-gray-10, #e8e8ea);
  border-radius: 4px;

  background: ${({ theme }): string => theme.colors.white};
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 15%);
`

const DialogContent = styled.div`
  display: flex;
  align-content: center;
  align-self: center;

  text-align: center;
`

export const Styled = {
  DialogWrapper,
  DialogOverlay,
  DialogBox,
  DialogContent
}
