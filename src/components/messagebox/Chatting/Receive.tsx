import { Avatar, ChattingBubble } from '@offer-ui/react'
import { Styled } from './styled'
import type { ReceiveProps } from './types'

export const Receive = ({
  isSectionStart = false,
  isSectionLast,
  avatarUrl = '',
  children,
  time
}: ReceiveProps) => (
  <Styled.ReceiveContainer isSectionStart={isSectionStart}>
    <Styled.AvatarWrapper>
      {isSectionStart && <Avatar alt="avatar" size="xsmall" src={avatarUrl} />}
    </Styled.AvatarWrapper>
    <Styled.BubbleWrapper>
      <ChattingBubble messageType="receive">{children}</ChattingBubble>
      {isSectionLast && (
        <span>
          {time}
          {isSectionLast}
        </span>
      )}
    </Styled.BubbleWrapper>
  </Styled.ReceiveContainer>
)
