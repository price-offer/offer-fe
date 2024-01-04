import type { IconType } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Read } from './Read'
import { Styled } from './styled'
import type { CommonReviewModalProps, ScoreOptions } from './types'
import { Write } from './Write'

type Score = Extract<IconType, 'smile' | 'meh' | 'sad'>
export const SCORE_STATE: Score[] = ['sad', 'meh', 'smile']

export const SCORE_OPTIONS: ScoreOptions = [
  {
    state: 2,
    text: '좋아요'
  },
  {
    state: 1,
    text: '보통이에요'
  },
  {
    state: 0,
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
