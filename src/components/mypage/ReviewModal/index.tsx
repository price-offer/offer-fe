import type { ReactElement } from 'react'
import { Read } from './Read'
import { Styled } from './styled'
import type { CommonReviewModalProps, SCORE } from './types'
import { Write } from './Write'

export const MOCK_SCORE: SCORE = [
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

export const CommonTitleContainer = ({
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

export const ReviewModal = {
  Write,
  Read
}
