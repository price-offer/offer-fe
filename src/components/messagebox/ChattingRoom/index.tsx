import { Image, IconButton, Input } from '@offer-ui/react'
import { Styled } from './styled'
import type { ChattingRoomProps } from './types'
import { Chatting } from '../Chatting'
import { toLocaleCurrency } from '@utils/format'

export const ChattingRoom = ({ id, onClose }: ChattingRoomProps) => {
  // TODO: ChattingRoom Id를 통해서 컴포넌트 내부에서 패치하도록

  const handleCloseRoom = () => {
    onClose?.(id)
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <IconButton icon="arrowLeft" size={24} onClick={handleCloseRoom} />
        <Styled.Nickname>황금 효정</Styled.Nickname>
        <Styled.IconButtonContainer>
          <IconButton icon="refresh" size={24} />
          <IconButton icon="more" size={24} />
        </Styled.IconButtonContainer>
      </Styled.Header>
      <Styled.ProductInfo>
        <Image alt="product" height="74px" src="" width="74px" />
        <Styled.ProductTextContainer>
          <Styled.ProductName>마르니 플렛 로퍼(black)</Styled.ProductName>
          <Styled.ProductItem>
            <span>시작가</span>
            <span>{toLocaleCurrency(15000)}원</span>
          </Styled.ProductItem>
          <Styled.ProductItem isOfferPrice>
            <span>제안가</span>
            <Styled.OfferPrice> {toLocaleCurrency(15000)}원</Styled.OfferPrice>
          </Styled.ProductItem>
        </Styled.ProductTextContainer>
      </Styled.ProductInfo>
      <Styled.ChattingWrapper>
        <Chatting messages={MESSAGES_MOCK} userId={1} />
      </Styled.ChattingWrapper>
      <Styled.InputWrapper>
        <Input.Chatting />
      </Styled.InputWrapper>
    </Styled.Container>
  )
}

const MESSAGES_MOCK = [
  {
    id: 10,
    content: 'offer 쪽지1',
    receiverId: 1,
    senderId: 2,
    createdDate: '2021-11-11T00:12:43'
  },
  {
    id: 8,
    content: 'offer 쪽지2',
    receiverId: 1,
    senderId: 2,
    createdDate: '2021-12-15T00:13:49'
  },
  {
    id: 6,
    content:
      ' offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3',
    receiverId: 1,
    senderId: 2,
    createdDate: '2021-12-15T00:25:31'
  },
  {
    id: 61,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  },
  {
    id: 62,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  },
  {
    id: 63,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  },
  {
    id: 64,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  },
  {
    id: 612,
    content:
      'offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  },
  {
    id: 699,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  }
]
