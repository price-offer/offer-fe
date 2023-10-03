import type { ReactElement } from 'react'
import type { ReadReviewModalProps } from './types'
import { CommonTitleContainer, MOCK_SCORE } from '..'
import { Styled } from '../styled'

export const ReadReviewModal = ({
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
        <Styled.ReviewState>
          <Styled.ReviewIcon
            isFill
            isGood={score === 'smile'}
            type={`${score}Fill`}></Styled.ReviewIcon>
          <Styled.ReviewText isFill>
            {MOCK_SCORE.find(scoreItem => scoreItem.state === score)?.text}
          </Styled.ReviewText>
        </Styled.ReviewState>
      </Styled.ReviewIconContainer>
      <Styled.ReadModeReviewContent>{content}</Styled.ReadModeReviewContent>
      <Styled.ReviewSendButton styleType={'solidPrimary'} onClick={onConfirm}>
        확인
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}
