import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { ReviewModalProps } from './types'

const ReviewModal = ({
  isOpen = true,
  onClose,
  nickName = '닉네임',
  productName = '상품이름'
}: ReviewModalProps): ReactElement => {
  const [isClickReviewIcon, setIsClickReViewIcon] = useState<boolean>(false)
  const [inputLength, setInputLength] = useState<number>(0)
  const [reviewEvaluate, setReviewEvaluate] = useState<
    string | 'smile' | 'meh' | 'sad'
  >('')
  const [reviewText, setReviewText] = useState<string>('')

  const handleClickReviewIcon = (reviewState: string): void => {
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
    <Styled.ModalContainer isOpen={isOpen} onClose={onClose}>
      <Styled.TitleContainer>
        <Styled.FirstSection>
          <Styled.NickName>{nickName}</Styled.NickName>
          <Styled.NormalText>님과</Styled.NormalText>
        </Styled.FirstSection>
        <Styled.NormalText>거래는 어땠나요?</Styled.NormalText>
        <Styled.ProductText>{productName}</Styled.ProductText>
      </Styled.TitleContainer>
      <Styled.ReviewIconContainer>
        <Styled.ReviewState
          onClick={(): void => handleClickReviewIcon('smile')}>
          <Styled.GoodIcon
            isFill={reviewEvaluate === 'smile'}
            type={
              reviewEvaluate === 'smile' ? 'smileFill' : 'smile'
            }></Styled.GoodIcon>
          <Styled.ReviewText isFill={reviewEvaluate === 'smile'}>
            좋아요
          </Styled.ReviewText>
        </Styled.ReviewState>
        <Styled.ReviewState onClick={(): void => handleClickReviewIcon('meh')}>
          <Styled.ReviewIcon
            isFill={reviewEvaluate === 'meh'}
            type={
              reviewEvaluate === 'meh' ? 'mehFill' : 'meh'
            }></Styled.ReviewIcon>
          <Styled.ReviewText isFill={reviewEvaluate === 'meh'}>
            보통이에요
          </Styled.ReviewText>
        </Styled.ReviewState>
        <Styled.ReviewState onClick={(): void => handleClickReviewIcon('sad')}>
          <Styled.ReviewIcon
            isFill={reviewEvaluate === 'sad'}
            type="sad"></Styled.ReviewIcon>
          <Styled.ReviewText isFill={reviewEvaluate === 'sad'}>
            별로에요
          </Styled.ReviewText>
        </Styled.ReviewState>
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
    </Styled.ModalContainer>
  )
}

export { ReviewModal }
