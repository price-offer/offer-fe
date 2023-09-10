import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type {
  ReviewModalProps,
  EvaluateState,
  EvaluateData,
  ReviewState
} from './types'

const evaluateData: EvaluateData = [
  {
    state: 'smile',
    text: '좋아요'
  },
  {
    state: 'meh',
    text: '보통이에요'
  },
  {
    state: 'sad',
    text: '별로에요'
  }
]

const ReviewModal = ({
  isOpen = true,
  onClose,
  onClick,
  nickName = '닉네임',
  productName = '상품이름',
  isReadMode = false,
  readModeEvaluate = 'smile',
  readModeReviewContent = '리뷰'
}: ReviewModalProps): ReactElement => {
  const [isClickReviewIcon, setIsClickReViewIcon] = useState<boolean>(false)

  const [reviewState, setReviewState] = useState<ReviewState>({
    inputLength: 0,
    reviewEvaluate: null,
    reviewText: ''
  })

  const handleClickReviewIcon = (reviewEvaluate: EvaluateState): void => {
    setIsClickReViewIcon(true)
    setReviewState({ ...reviewState, reviewEvaluate })
  }

  const handleInput: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setReviewState({
      ...reviewState,
      inputLength: e.target.value.length,
      reviewText: e.target.value
    })
  }

  const handleClickSendReview = (): void => {
    onClick()
  }

  return (
    <Styled.ReviewModal isOpen={isOpen} onClose={onClose}>
      <Styled.TitleContainer>
        <Styled.FirstSection>
          <Styled.NickName>{nickName}</Styled.NickName>
          <Styled.NormalText>님과</Styled.NormalText>
        </Styled.FirstSection>
        <Styled.NormalText>거래는 어땠나요?</Styled.NormalText>
        <Styled.ProductText>{productName}</Styled.ProductText>
      </Styled.TitleContainer>
      <Styled.ReviewIconContainer>
        {isReadMode ? (
          <Styled.ReviewState>
            <Styled.ReviewIcon
              isFill
              isGood={readModeEvaluate === 'smile'}
              type={`${readModeEvaluate}Fill`}></Styled.ReviewIcon>
            <Styled.ReviewText isFill>
              {
                evaluateData.find(
                  evaluate => evaluate.state === readModeEvaluate
                )?.text
              }
            </Styled.ReviewText>
          </Styled.ReviewState>
        ) : (
          <>
            {evaluateData.map(evaluate => {
              return (
                <Styled.ReviewState
                  key={evaluate.state}
                  onClick={(): void => handleClickReviewIcon(evaluate.state)}>
                  <Styled.ReviewIcon
                    isFill={reviewState.reviewEvaluate === evaluate.state}
                    isGood={evaluate.state === 'smile'}
                    type={
                      reviewState.reviewEvaluate === evaluate.state
                        ? `${evaluate.state}Fill`
                        : evaluate.state
                    }></Styled.ReviewIcon>
                  <Styled.ReviewText
                    isFill={reviewState.reviewEvaluate === evaluate.state}>
                    {evaluate.text}
                  </Styled.ReviewText>
                </Styled.ReviewState>
              )
            })}
          </>
        )}
      </Styled.ReviewIconContainer>

      {isReadMode ? (
        <Styled.ReadModeReviewContentArea>
          {readModeReviewContent}
        </Styled.ReadModeReviewContentArea>
      ) : (
        <Styled.ReviewTextArea
          guideMessage={`${reviewState.inputLength}/100`}
          maxLength={100}
          onInput={handleInput}></Styled.ReviewTextArea>
      )}

      <Styled.ReviewSendButton
        disabled={isReadMode ? false : !isClickReviewIcon}
        styleType={
          isClickReviewIcon || isReadMode ? 'solidPrimary' : 'solidDisabled'
        }
        onClick={handleClickSendReview}>
        {isReadMode ? '확인' : '후기 보내기'}
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}

export { ReviewModal }
