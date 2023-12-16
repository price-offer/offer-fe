import { Image, IconButton, Input } from '@offer-ui/react'
import { Styled } from './styled'
import type { ChattingRoomProps } from './types'
import { Chatting } from '../Chatting'
import { useGetMessageRoomQuery } from '@apis/message'
import { useAuth } from '@hooks/useAuth'
import { toLocaleCurrency } from '@utils/format'

export const ChattingRoom = ({ id, onClose }: ChattingRoomProps) => {
  const getMessageRoomQuery = useGetMessageRoomQuery({
    msgRoomId: id,
    page: 0
  })
  const { user } = useAuth()

  const handleCloseRoom = () => {
    onClose?.(id)
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <IconButton icon="arrowLeft" size={24} onClick={handleCloseRoom} />
        <Styled.Nickname>{user.nickname}</Styled.Nickname>
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
        <Chatting messages={getMessageRoomQuery.data || []} userId={user.id} />
      </Styled.ChattingWrapper>
      <Styled.InputWrapper>
        <Input styleType="chatting" />
      </Styled.InputWrapper>
    </Styled.Container>
  )
}
