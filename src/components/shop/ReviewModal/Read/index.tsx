import type { ReactElement } from 'react'
import type { ReadReviewModalProps } from './types'
import { CommonTitleContainer, MOCK_SCORE } from '..'
import { Styled } from '../styled'

export const Read = ({
  isOpen = true,
  onClose,
  onConfirm,
  nickname = '닉네임',
  productName = '상품이름',
  score = 'smile',
  content = '리뷰'
}: ReadReviewModalProps): ReactElement => {
  return (
    <Styled.ReviewModal isOpen={isOpen} onClose={onClose}>
      <CommonTitleContainer nickname={nickname} productName={productName} />
      <Styled.ReviewIconContainer>
        <Styled.ReviewState isFill>
          <Styled.ReviewIcon type={`${score}Fill`} />
          <p>{MOCK_SCORE.find(scoreItem => scoreItem.state === score)?.text}</p>
        </Styled.ReviewState>
      </Styled.ReviewIconContainer>
      <Styled.ReadModeReviewContent>{content}</Styled.ReadModeReviewContent>
      <Styled.ReviewSendButton styleType={'solidPrimary'} onClick={onConfirm}>
        확인
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}
