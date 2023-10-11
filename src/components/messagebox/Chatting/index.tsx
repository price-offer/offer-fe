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
        const isPrevDateChanged =
          prevMessage?.createdDate.split('T')[0] !== createdDate.split('T')[0]
        const isNextDateChanged =
          nextMessage?.createdDate.split('T')[0] !== createdDate.split('T')[0]
        const commonProps = {
          time: formatDate(createdDate, 'A H:m'),
          isSectionStart:
            senderId !== prevMessage?.senderId || isPrevDateChanged,
          isSectionLast: senderId !== nextMessage?.senderId || isNextDateChanged
        }

        return (
          <div key={id}>
            {isPrevDateChanged && (
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
