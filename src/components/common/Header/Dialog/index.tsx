import { Styled } from './styled'
import type { DialogProps } from './types'

export const HeaderDialog = ({
  isOpen,
  handleClickDialog,
  children
}: DialogProps) => {
  return (
    <Styled.DialogWrapper isOpen={isOpen} onClick={handleClickDialog}>
      <Styled.DialogBox>
        <Styled.DialogContent>{children}</Styled.DialogContent>
      </Styled.DialogBox>
    </Styled.DialogWrapper>
  )
}
