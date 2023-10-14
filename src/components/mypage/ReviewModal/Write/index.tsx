import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import type { WriteReviewModalProps, ReviewState } from './types'
import { CommonTitleContainer, MOCK_SCORE } from '..'
import { Styled } from '../styled'
import type { ScoreState } from '../types'

export const Write = ({
  isOpen = true,
  onClose,
  onConfirm,
  nickname = '닉네임',
  productName = '상품이름'
}: WriteReviewModalProps): ReactElement => {
  const [reviewState, setReviewState] = useState<ReviewState>({
    reviewScore: null,
    reviewText: ''
  })

  const handleClickReviewIcon = (reviewScore: ScoreState): void => {
    setReviewState({ ...reviewState, reviewScore })
  }

  const handleInput: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setReviewState({
      ...reviewState,
      reviewText: e.target.value
    })
  }

  const handleConfirm = (): void => {
    onConfirm(reviewState)
  }

  return (
    <Styled.ReviewModal isOpen={isOpen} onClose={onClose}>
      <CommonTitleContainer nickname={nickname} productName={productName} />
      <Styled.ReviewIconContainer>
        {MOCK_SCORE.map(scoreItem => {
          return (
            <Styled.ReviewState
              key={scoreItem.state}
              isFill={reviewState.reviewScore === scoreItem.state}
              onClick={(): void => handleClickReviewIcon(scoreItem.state)}>
              <Styled.ReviewIcon
                type={
                  reviewState.reviewScore === scoreItem.state
                    ? `${scoreItem.state}Fill`
                    : scoreItem.state
                }
              />
              <p>{scoreItem.text}</p>
            </Styled.ReviewState>
          )
        })}
      </Styled.ReviewIconContainer>
      <Styled.ReviewTextArea
        guideMessage={`${reviewState.reviewText.length}/100`}
        maxLength={100}
        onInput={handleInput}
      />

      <Styled.ReviewSendButton
        disabled={!reviewState.reviewScore}
        styleType="solidPrimary"
        onClick={handleConfirm}>
        {'후기 보내기'}
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}
