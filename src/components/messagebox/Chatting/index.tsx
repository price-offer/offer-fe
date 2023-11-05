import { Receive } from './Receive'
import { Send } from './Send'
import { Styled } from './styled'
import type { ChattingProps } from './types'
import { formatDate } from '@utils/format'

export const getDate = (createdDate = '') => createdDate.split('T')[0]

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

        const currentDate = getDate(createdDate)
        const prevDate = getDate(prevMessage?.createdDate)
        const nextDate = getDate(nextMessage?.createdDate)
        const isPrevDateChanged = prevDate !== currentDate
        const isNextDateChanged = nextDate !== currentDate

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
