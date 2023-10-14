import { Styled } from './styled'
import type { DialogProps } from './types'

export const HeaderDialog = ({
  isOpen,
  handleClickDialog,
  onClose,
  dialogPositionStyle,
  children
}: DialogProps) => {
  const handleClickOverlay = () => {
    onClose()
  }
  return (
    <>
      <Styled.DialogWrapper
        isOpen={isOpen}
        style={dialogPositionStyle}
        onClick={handleClickDialog}>
        <Styled.DialogOverlay onClick={handleClickOverlay} />
        <Styled.DialogBox>
          <Styled.DialogContent>{children}</Styled.DialogContent>
        </Styled.DialogBox>
      </Styled.DialogWrapper>
    </>
  )
}
