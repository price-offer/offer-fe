import { Image, IconButton, Input } from '@offer-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Styled } from './styled'
import type { ChattingRoomProps } from './types'
import { Chatting } from '../Chatting'
import type { ChattingProps } from '../Chatting/types'
import { toLocaleCurrency } from '@utils/format'
import { useCreateMessageMutation, useGetMessageQuery } from '@apis'
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
  const getMessageQuery = useGetMessageQuery({
    msgRoomId: id,
    page: 0
  })
  const createMessageMutation = useCreateMessageMutation(id)
  const [messages, setMessages] = useState<ChattingProps['messages']>([])
  const { user } = useAuth()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const senderInfo = {
    id: user.id,
    nickname: user.nickname,
    imageUrl: user.profileImageUrl
  }

  const handleCloseRoom = () => {
    onClose?.(id)
  }

  const handleSubmitMessage = async (message: string) => {
    const res = await createMessageMutation.mutateAsync({
      content: message
    })

    setMessages(prev => [
      ...prev,
      {
        member: senderInfo,
        content: message,
        sendTime: res.createdAt
      }
    ])

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  useEffect(() => {
    setMessages(getMessageQuery.data || [])
  }, [getMessageQuery.data])

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
        <Chatting messages={messages} userId={user.id} />
      </Styled.ChattingWrapper>
      <Styled.InputWrapper>
        <Input.Chatting ref={inputRef} onSubmitValue={handleSubmitMessage} />
      </Styled.InputWrapper>
    </Styled.Container>
  )
}
