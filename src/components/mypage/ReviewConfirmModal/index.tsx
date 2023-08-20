import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ReviewConfirmModalProps } from './types'

const ReviewConfirmModal = ({
  isOpen = true,
  onClose
}: ReviewConfirmModalProps): ReactElement => {
  const handleClickConfirmModal = (): void => {
    alert('보내기완료')
  }

  return (
    <Styled.ModalContainer isOpen={isOpen} onClose={onClose}>
      <Styled.Container>
        <Styled.Title>후기 보내기 완료!</Styled.Title>
        <Styled.CheckIcon type="checkCircleFill"></Styled.CheckIcon>
      </Styled.Container>
      <Styled.ReviewConfirmButton onClick={handleClickConfirmModal}>
        확인
      </Styled.ReviewConfirmButton>
    </Styled.ModalContainer>
  )
}

export { ReviewConfirmModal }
