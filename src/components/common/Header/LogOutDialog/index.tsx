import { Styled } from './styled'
import type { DialogProps } from './types'
export const LogOutDialog = ({ isOpen, onLogout, children }: DialogProps) => {
  return (
    <Styled.DialogWrapper isOpen={isOpen} onClick={onLogout}>
      <Styled.DialogBox>
        <Styled.DialogContent>{children}</Styled.DialogContent>
      </Styled.DialogBox>
    </Styled.DialogWrapper>
  )
}
