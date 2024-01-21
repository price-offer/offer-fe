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
  const renderChattingList = () =>
    messages.map(({ content, member, sendTime }, idx, list) => {
      const prevMessage = list.at(idx - 1)
      const nextMessage = list.at(idx + 1)
      const isSender = member.id === userId

      const currentDate = formatDate(sendTime, 'YYYY년 M월 D일 dddd')
      const prevDate = formatDate(
        prevMessage?.sendTime || '',
        'YYYY년 M월 D일 dddd'
      )
      const nextDate = formatDate(
        nextMessage?.sendTime || '',
        'YYYY년 M월 D일 dddd'
      )
      const isPrevDateChanged = prevDate !== currentDate
      const isNextDateChanged = nextDate !== currentDate
      const currentTime = formatDate(sendTime, 'A H:mm')
      const nextTime = formatDate(nextMessage?.sendTime || '', 'A H:mm')

      const commonProps = {
        time: currentDate,
        isSectionStart:
          member.id !== prevMessage?.member.id || isPrevDateChanged,
        isSectionLast:
          member.id !== nextMessage?.member.id ||
          isNextDateChanged ||
          currentTime !== nextTime
      }

      return (
        // TODO: 메세지 키값 내려줄 수 있는지 확인하기
        <div key={`${member.nickname}-${currentDate}`}>
          {isPrevDateChanged && (
            <Styled.DateWrapper key={currentDate}>
              <Styled.ChattingDate>{currentDate}</Styled.ChattingDate>
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

  return <Styled.Container>{renderChattingList()}</Styled.Container>
}
