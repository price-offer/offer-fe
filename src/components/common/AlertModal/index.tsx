import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { AlertModalProps } from './types'

const AlertModal = ({
  isOpen = true,
  isCheckShape = false,
  title,
  subTitle,
  buttonContents,
  onClose,
  onClick
}: AlertModalProps): ReactElement => {
  const handleClickConfirmModal = (): void => {
    onClick()
  }

  return (
    <Styled.ModalContainer isOpen={isOpen} onClose={onClose}>
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        {subTitle && <Styled.SubTitle>{subTitle}</Styled.SubTitle>}
        {isCheckShape && (
          <Styled.CheckIcon type="checkCircleFill"></Styled.CheckIcon>
        )}
      </Styled.Container>
      <Styled.ReviewConfirmButton onClick={handleClickConfirmModal}>
        {buttonContents}
      </Styled.ReviewConfirmButton>
    </Styled.ModalContainer>
  )
}

export { AlertModal }
