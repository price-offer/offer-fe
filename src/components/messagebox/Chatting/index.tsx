import { Receive } from './Receive'
import { Send } from './Send'
import { Styled } from './styled'
import type { ChattingProps } from './types'
import { formatDate } from '@utils/format'

// TODO: 상품 정보 버블 추가
export const Chatting = ({
  userId,
  messages,
  receiverImageUrl
}: ChattingProps) => {
  return (
    <Styled.Container>
      {messages.map(({ id, content, senderId, createdDate }, idx, list) => {
        const prevMessage = list.at(idx - 1)
        const nextMessage = list.at(idx + 1)
        const isSender = senderId === userId
        const isNewDate =
          prevMessage?.createdDate.split('T')[0] !== createdDate.split('T')[0]
        const commonProps = {
          time: formatDate(createdDate, 'A H:m'),
          isSectionStart: senderId !== prevMessage?.senderId || isNewDate,
          isSectionLast: senderId !== nextMessage?.senderId
        }

        return (
          <div key={id}>
            {isNewDate && (
              <Styled.DateWrapper key={createdDate}>
                <Styled.ChattingDate>
                  {formatDate(createdDate, 'YYYY년 M월 D일 dddd')}
                </Styled.ChattingDate>
              </Styled.DateWrapper>
            )}
            {isSender ? (
              <Send {...commonProps}>{content}</Send>
            ) : (
              <Receive avatarUrl={receiverImageUrl} {...commonProps}>
                {content}
              </Receive>
            )}
          </div>
        )
      })}
    </Styled.Container>
  )
}
