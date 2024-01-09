import { Receive } from './Receive'
import { Send } from './Send'
import { Styled } from './styled'
import type { ChattingProps } from './types'
import { formatDate } from '@utils/format'

export const getDate = (sendTime = '') => sendTime.split('T')[0]
export const getTime = (sendTime = '') => formatDate(sendTime, 'A H:m')

// TODO: 상품 정보 버블 추가
export const Chatting = ({
  userId,
  messages,
  receiverImageUrl
}: ChattingProps) => {
  const renderChattingItem = () =>
    messages.map(({ content, member, sendTime }, idx, list) => {
      const prevMessage = list.at(idx - 1)
      const nextMessage = list.at(idx + 1)
      const isSender = member.id === userId

      const currentDate = getDate(sendTime)
      const prevDate = getDate(prevMessage?.sendTime)
      const nextDate = getDate(nextMessage?.sendTime)
      const isPrevDateChanged = prevDate !== currentDate
      const isNextDateChanged = nextDate !== currentDate
      const currentTime = getTime(sendTime)
      const nextTime = getTime(nextMessage?.sendTime)

      const commonProps = {
        time: formatDate(sendTime, 'A H:m'),
        isSectionStart:
          member.id !== prevMessage?.member.id || isPrevDateChanged,
        isSectionLast:
          member.id !== nextMessage?.member.id ||
          isNextDateChanged ||
          currentTime !== nextTime
      }

      return (
        // TODO: 메세지 키값 내려줄 수 있는지 확인하기
        <div key={`${member.nickname}-${sendTime}`}>
          {isPrevDateChanged && (
            <Styled.DateWrapper key={sendTime}>
              <Styled.ChattingDate>
                {formatDate(sendTime, 'YYYY년 M월 D일 dddd')}
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
    })

  return <Styled.Container>{renderChattingItem()}</Styled.Container>
}
