import { Image, IconButton, Input } from '@offer-ui/react'
import { Styled } from './styled'
import type { ChattingRoomProps } from './types'
import { Chatting } from '../Chatting'
import { toLocaleCurrency } from '@utils/format'
import { useGetMessageQuery } from '@apis'
import { useAuth } from '@hooks'

// TODO: messageRoom 정보조회 api 붙이고 제거
const POST_MOCK = {
  offerPrice: 10000,
  post: {
    title: '팔아요 !',
    thumbnailImageUrl: '',
    price: 12000
  }
}

export const ChattingRoom = ({ id, onClose }: ChattingRoomProps) => {
  const messageQuery = useGetMessageQuery({
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
        <Image
          alt={`${POST_MOCK.post.title}-image`}
          height="74px"
          src={POST_MOCK.post.thumbnailImageUrl}
          width="74px"
        />
        <Styled.ProductTextContainer>
          <Styled.ProductName>{POST_MOCK.post.title}</Styled.ProductName>
          <Styled.ProductItem>
            <span>시작가</span>
            <span>{toLocaleCurrency(POST_MOCK.post.price)}원</span>
          </Styled.ProductItem>
          <Styled.ProductItem isOfferPrice>
            <span>제안가</span>
            <Styled.OfferPrice>
              {toLocaleCurrency(POST_MOCK.offerPrice)}원
            </Styled.OfferPrice>
          </Styled.ProductItem>
        </Styled.ProductTextContainer>
      </Styled.ProductInfo>
      <Styled.ChattingWrapper>
        <Chatting messages={messageQuery.data || []} userId={user.id} />
      </Styled.ChattingWrapper>
      <Styled.InputWrapper>
        <Input styleType="chatting" />
      </Styled.InputWrapper>
    </Styled.Container>
  )
}
