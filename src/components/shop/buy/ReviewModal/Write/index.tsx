import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import type { WriteReviewModalProps, ReviewState } from './types'
import { CommonTitleContainer, SCORE_OPTIONS } from '..'
import { Styled } from '../styled'
import type { ScoreState } from '../types'
import { isNumber } from '@utils'

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

  const handleClose = () => {
    onClose?.()

    setReviewState({
      reviewScore: null,
      reviewText: ''
    })
  }

  return (
    <Styled.ReviewModal isOpen={isOpen} onClose={handleClose}>
      <CommonTitleContainer nickname={nickname} productName={productName} />
      <Styled.ReviewIconContainer>
        {SCORE_OPTIONS.map(scoreItem => {
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
        value={reviewState.reviewText}
        onInput={handleInput}
      />

      <Styled.ReviewSendButton
        disabled={!isNumber(reviewState.reviewScore)}
        styleType="solidPrimary"
        onClick={handleConfirm}>
        {'후기 보내기'}
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}
