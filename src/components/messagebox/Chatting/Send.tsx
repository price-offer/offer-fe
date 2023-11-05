import { ChattingBubble } from '@offer-ui/react'
import { Styled } from './styled'
import type { SendProps } from './types'

export const Send = ({
  isSectionStart = false,
  isSectionLast,
  children,
  time
}: SendProps) => (
  <Styled.BubbleContainer isSectionStart={isSectionStart} isSender>
    {isSectionLast && (
      <span>
        {time}
        {isSectionLast}
      </span>
    )}
    <ChattingBubble messageType="send">{children}</ChattingBubble>
  </Styled.BubbleContainer>
)
