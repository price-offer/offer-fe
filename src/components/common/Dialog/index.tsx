import { Styled } from './styled'
import type { DialogProps } from './types'

export const Dialog = ({
  isOpen,
  onClose,
  dialogPositionStyle,
  children
}: DialogProps) => {
  return (
    <>
      <Styled.DialogWrapper isOpen={isOpen} style={dialogPositionStyle}>
        <Styled.DialogOverlay onClick={onClose} />
        <Styled.DialogBox>
          <Styled.DialogContent>{children}</Styled.DialogContent>
        </Styled.DialogBox>
      </Styled.DialogWrapper>
    </>
  )
}
