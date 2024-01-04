import type { ReactElement } from 'react'
import type { ReadReviewModalProps } from './types'
import { CommonTitleContainer, SCORE_OPTIONS, SCORE_STATE } from '..'
import { Styled } from '../styled'

export const Read = ({
  isOpen = true,
  onClose,
  onConfirm,
  reviewTargetMember,
  score = 0,
  post,
  content = '리뷰'
}: ReadReviewModalProps): ReactElement => {
  if (!reviewTargetMember) {
    return <></>
  }

  return (
    <Styled.ReviewModal isOpen={isOpen} onClose={onClose}>
      <CommonTitleContainer
        nickname={reviewTargetMember.nickname}
        productName={post.title}
      />
      <Styled.ReviewIconContainer>
        <Styled.ReviewState isFill>
          <Styled.ReviewIcon type={`${SCORE_STATE[score]}`} />
          <p>{SCORE_OPTIONS[score]?.text}</p>
        </Styled.ReviewState>
      </Styled.ReviewIconContainer>
      <Styled.ReadModeReviewContent>{content}</Styled.ReadModeReviewContent>
      <Styled.ReviewSendButton styleType={'solidPrimary'} onClick={onConfirm}>
        확인
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}
