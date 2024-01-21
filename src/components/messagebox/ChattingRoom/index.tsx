import { Image, IconButton, Input, useMedia } from '@offer-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Styled } from './styled'
import type { ChattingRoomProps } from './types'
import { Chatting } from '../Chatting'
import type { ChattingProps } from '../Chatting/types'
import { Dialog } from '@components/common'
import { toLocaleCurrency } from '@utils/format'
import {
  useCreateMessageMutation,
  useDeleteMessageRoomMutation,
  useGetMessageQuery
} from '@apis'
import { useAuth, useModal } from '@hooks'

// TODO: messageRoom 정보조회 api 붙이고 제거
const POST_MOCK = {
  offerPrice: 10000,
  post: {
    title: '팔아요 !',
    thumbnailImageUrl: '',
    price: 12000
  }
}

export const ChattingRoom = ({ roomId, onClose }: ChattingRoomProps) => {
  const getMessageQuery = useGetMessageQuery({
    msgRoomId: roomId,
    page: 0
  })
  const createMessageMutation = useCreateMessageMutation()
  const deleteMessageRoomMutation = useDeleteMessageRoomMutation(roomId)

  const chattingBoxRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [messages, setMessages] = useState<ChattingProps['messages']>([])
  const { desktop, tablet, mobile } = useMedia()
  const { isOpen, openModal, closeModal } = useModal()
  const { user } = useAuth()

  const senderInfo = {
    id: user.id,
    nickname: user.nickname,
    imageUrl: user.profileImageUrl
  }

  const scrollToBottom = () => {
    if (!chattingBoxRef.current) {
      return
    }

    if (chattingBoxRef.current.scrollHeight > 0) {
      chattingBoxRef.current.scrollTop = chattingBoxRef.current.scrollHeight
    }
  }

  const handleCloseRoom = () => {
    onClose?.(roomId)
  }

  const handleDeleteRoom = async () => {
    await deleteMessageRoomMutation.mutateAsync()

    handleCloseRoom()
  }

  const handleSubmitMessage = async (content: string) => {
    const res = await createMessageMutation.mutateAsync({
      messageRoomId: roomId,
      content
    })

    if (inputRef.current) {
      inputRef.current.value = ''
    }

    setMessages(prev => [
      ...prev,
      {
        member: senderInfo,
        content,
        sendTime: res.createdAt
      }
    ])
    await getMessageQuery.refetch()
  }

  useEffect(() => {
    setMessages(getMessageQuery.data || [])
  }, [getMessageQuery.data])

  useEffect(() => {
    scrollToBottom()
  }, [messages, desktop, tablet, mobile])

  return (
    <Styled.Container>
      <Styled.Header>
        <IconButton icon="arrowLeft" size={24} onClick={handleCloseRoom} />
        <Styled.Nickname>{user.nickname}</Styled.Nickname>
        <Styled.IconButtonContainer>
          <IconButton
            icon="refresh"
            size={24}
            onClick={() => getMessageQuery.refetch()}
          />
          <Styled.MoreButtonWrapper>
            <IconButton icon="more" size={24} onClick={openModal} />
            {isOpen && (
              <Dialog
                dialogPositionStyle={{
                  top: '30px',
                  right: '0'
                }}
                onClose={closeModal}>
                <Styled.DeleteButton onClick={handleDeleteRoom}>
                  쪽지함 나가기
                </Styled.DeleteButton>
              </Dialog>
            )}
          </Styled.MoreButtonWrapper>
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
      <Styled.ChattingWrapper ref={chattingBoxRef}>
        <Chatting messages={messages} userId={user.id} />
      </Styled.ChattingWrapper>
      <Styled.InputWrapper>
        <Input.Chatting ref={inputRef} onSubmitValue={handleSubmitMessage} />
      </Styled.InputWrapper>
    </Styled.Container>
  )
}
