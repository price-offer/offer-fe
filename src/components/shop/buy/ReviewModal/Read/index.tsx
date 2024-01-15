import type { ReactElement } from 'react'
import type { ReadReviewModalProps } from './types'
import { CommonTitleContainer, SCORE_OPTIONS } from '..'
import { Styled } from '../styled'
import { SCORE } from '@constants'
import type { ScoreNames } from '@types'

export const Read = ({
  isOpen = true,
  onClose,
  onConfirm,
  reviewTargetMember,
  score = 0,
  post,
  content = '리뷰'
}: ReadReviewModalProps): ReactElement => {
  const scoreNames = Object.keys<ScoreNames>(SCORE)

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
          <Styled.ReviewIcon type={`${scoreNames[score]}`} />
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
