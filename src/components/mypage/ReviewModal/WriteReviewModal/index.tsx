import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import type { WriteReviewModalProps, ReviewState } from './types'
import { CommonTitleContainer, MOCK_SCORE } from '..'
import { Styled } from '../styled'
import type { ScoreState } from '../types'

const WriteReviewModal = ({
  isOpen = true,
  onClose,
  onConfirm,
  nickname = '닉네임',
  productName = '상품이름'
}: WriteReviewModalProps): ReactElement => {
  const [isClickReviewIcon, setIsClickReViewIcon] = useState<boolean>(false)

  const [reviewState, setReviewState] = useState<ReviewState>({
    reviewScore: null,
    reviewText: ''
  })

  const handleClickReviewIcon = (reviewScore: ScoreState): void => {
    setIsClickReViewIcon(true)
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
      <CommonTitleContainer
        nickname={nickname}
        productName={productName}></CommonTitleContainer>
      <Styled.ReviewIconContainer>
        {MOCK_SCORE.map(scoreItem => {
          return (
            <Styled.ReviewState
              key={scoreItem.state}
              onClick={(): void => handleClickReviewIcon(scoreItem.state)}>
              <Styled.ReviewIcon
                isFill={reviewState.reviewScore === scoreItem.state}
                isGood={scoreItem.state === 'smile'}
                type={
                  reviewState.reviewScore === scoreItem.state
                    ? `${scoreItem.state}Fill`
                    : scoreItem.state
                }></Styled.ReviewIcon>
              <Styled.ReviewText
                isFill={reviewState.reviewScore === scoreItem.state}>
                {scoreItem.text}
              </Styled.ReviewText>
            </Styled.ReviewState>
          )
        })}
      </Styled.ReviewIconContainer>

      <Styled.ReviewTextArea
        guideMessage={`${reviewState.reviewText.length}/100`}
        maxLength={100}
        onInput={handleInput}></Styled.ReviewTextArea>

      <Styled.ReviewSendButton
        disabled={!isClickReviewIcon}
        styleType={isClickReviewIcon ? 'solidPrimary' : 'solidDisabled'}
        onClick={handleConfirm}>
        {'후기 보내기'}
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}

export default WriteReviewModal
