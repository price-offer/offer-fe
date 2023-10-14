import styled from '@emotion/styled'
import type { StyledDialogWrapperProps } from './types'

const DialogWrapper = styled.div<StyledDialogWrapperProps>`
  display: ${({ isOpen }): string => (isOpen ? 'flex' : 'none')};
  position: absolute;
`
const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const DialogBox = styled.div`
  position: relative;
  min-width: 120px;
  min-height: 48px;
  padding: 16px 12px;
  background: white;
  border-radius: 4px;
  border: 1px solid var(--gray-scale-gray-10, #e8e8ea);
  background: var(--gray-scale-white, #fff);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
`

const DialogContent = styled.span`
  display: flex;
  text-align: center;
  align-content: center;
  align-self: center;
`

export type StyledReviewStateProps = {
  isFill: boolean
}

export const Styled = {
  DialogWrapper,
  DialogOverlay,
  DialogBox,
  DialogContent
}
