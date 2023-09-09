import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { ReviewModalProps, EvaluateState, EvaluateData } from './types'

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
  nickName = '닉네임',
  productName = '상품이름'
}: ReviewModalProps): ReactElement => {
  const [isClickReviewIcon, setIsClickReViewIcon] = useState<boolean>(false)

  const [inputLength, setInputLength] = useState<number>(0)
  const [reviewEvaluate, setReviewEvaluate] = useState<EvaluateState>(null)
  const [reviewText, setReviewText] = useState<string>('')

  const handleClickReviewIcon = (reviewState: EvaluateState): void => {
    setIsClickReViewIcon(true)
    setReviewEvaluate(reviewState)
  }

  const handleInput: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setInputLength(e.target.value.length)
    setReviewText(e.target.value)
  }

  const handleClickSendReview = (): void => {
    alert(reviewText)
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
        {evaluateData.map(evaluate => {
          return (
            <Styled.ReviewState
              key={evaluate.state}
              onClick={(): void => handleClickReviewIcon(evaluate.state)}>
              <Styled.ReviewIcon
                isFill={reviewEvaluate === evaluate.state}
                isGood={evaluate.state === 'smile'}
                type={
                  reviewEvaluate === evaluate.state
                    ? `${evaluate.state}Fill`
                    : evaluate.state
                }></Styled.ReviewIcon>
              <Styled.ReviewText isFill={reviewEvaluate === evaluate.state}>
                {evaluate.text}
              </Styled.ReviewText>
            </Styled.ReviewState>
          )
        })}
      </Styled.ReviewIconContainer>
      <Styled.ReviewTextArea
        guideMessage={`${inputLength}/100`}
        maxLength={100}
        onInput={handleInput}></Styled.ReviewTextArea>
      <Styled.ReviewSendButton
        disabled={!isClickReviewIcon}
        styleType={isClickReviewIcon ? 'solidPrimary' : 'solidDisabled'}
        onClick={handleClickSendReview}>
        후기 보내기
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}

export { ReviewModal }
