import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { AlertModalProps } from './types'

const AlertModal = ({
  isOpen = true,
  hasCheckIcon = false,
  title,
  subTitle,
  buttonContents,
  onClose,
  onClickConfirmButton
}: AlertModalProps): ReactElement => {
  return (
    <Styled.ModalContainer isOpen={isOpen} onClose={onClose}>
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        {subTitle && <Styled.SubTitle>{subTitle}</Styled.SubTitle>}
        {hasCheckIcon && (
          <Styled.CheckIcon type="checkCircleFill"></Styled.CheckIcon>
        )}
      </Styled.Container>
      <Styled.ReviewConfirmButton onClick={(): void => onClickConfirmButton()}>
        {buttonContents}
      </Styled.ReviewConfirmButton>
    </Styled.ModalContainer>
  )
}

export { AlertModal }
