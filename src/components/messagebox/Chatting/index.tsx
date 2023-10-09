import { ChattingBubble } from '@offer-ui/react'
import { Styled } from './styled'
import type { ChattingProps } from './types'
import { formatDate } from '@utils/format'

// TODO: 상품 정보 버블 추가, receiver profile 추가
export const Chatting = ({ userId, messages }: ChattingProps) => {
  return (
    <Styled.Container>
      {messages.map(({ id, content, senderId, createdDate }, idx, list) => {
        const prevMessage = list[idx - 1]
        const isNewDate =
          prevMessage?.createdDate.split('T')[0] !== createdDate.split('T')[0]
        const isFirstMessage = senderId !== prevMessage?.senderId || isNewDate
        const isSender = senderId === userId

        return (
          <>
            {isNewDate && (
              <Styled.DateWrapper>
                <Styled.ChattingDate>
                  {formatDate(createdDate, 'YYYY년 M월 D일 dddd')}
                </Styled.ChattingDate>
              </Styled.DateWrapper>
            )}
            <Styled.BubbleWrapper
              key={id}
              isFirstMessage={isFirstMessage}
              isSender={isSender}>
              <span>{formatDate(createdDate, 'A H:m')}</span>
              <ChattingBubble messageType={isSender ? 'send' : 'receive'}>
                {content}
              </ChattingBubble>
            </Styled.BubbleWrapper>
          </>
        )
      })}
    </Styled.Container>
  )
}
