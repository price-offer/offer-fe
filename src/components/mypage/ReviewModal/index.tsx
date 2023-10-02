import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type {
  WriteReviewModalProps,
  ReadReviewModalProps,
  ScoreState,
  SCORE,
  ReviewState,
  CommonReviewModalProps
} from './types'

const MOCK_SCORE: SCORE = [
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

const CommonTitleContainer = ({
  nickname,
  productName
}: CommonReviewModalProps): ReactElement => (
  <Styled.TitleContainer>
    <Styled.FirstSection>
      <Styled.NickName>{nickname}</Styled.NickName>
      <Styled.NormalText>님과</Styled.NormalText>
    </Styled.FirstSection>
    <Styled.NormalText>거래는 어땠나요?</Styled.NormalText>
    <Styled.ProductText>{productName}</Styled.ProductText>
  </Styled.TitleContainer>
)

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
        guideMessage={`${reviewState.reviewText?.length}/100`}
        maxLength={100}
        onInput={handleInput}></Styled.ReviewTextArea>

      <Styled.ReviewSendButton
        disabled={!isClickReviewIcon}
        styleType={isClickReviewIcon ? 'solidPrimary' : 'solidDisabled'}
        onClick={(): void => onConfirm(reviewState)}>
        {'후기 보내기'}
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}

const ReadReviewModal = ({
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
      <Styled.TitleContainer>
        <Styled.FirstSection>
          <Styled.NickName>{nickname}</Styled.NickName>
          <Styled.NormalText>님과</Styled.NormalText>
        </Styled.FirstSection>
        <Styled.NormalText>거래는 어땠나요?</Styled.NormalText>
        <Styled.ProductText>{productName}</Styled.ProductText>
      </Styled.TitleContainer>
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
      <Styled.ReviewSendButton
        styleType={'solidPrimary'}
        onClick={(): void => onConfirm()}>
        확인
      </Styled.ReviewSendButton>
    </Styled.ReviewModal>
  )
}

const ReviewModal = {
  Write: WriteReviewModal,
  Read: ReadReviewModal
}

export default ReviewModal
