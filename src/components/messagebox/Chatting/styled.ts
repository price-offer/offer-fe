import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  height: 100%;
  padding: 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray03};

    color: ${theme.colors.grayScale50};

    ${theme.fonts.caption01M};
  `}
`

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ChattingDate = styled.span`
  ${({ theme }) => css`
    padding: 4px 12px;
    border: 1px solid ${theme.colors.grayScale10};
    border-radius: ${theme.radius.round100};
  `};
`

const BubbleWrapper = styled.div<{
  isSender: boolean
  isFirstMessage: boolean
}>`
  display: flex;
  gap: 4px;
  align-items: end;

  ${({ isSender, isFirstMessage }) =>
    css`
      flex-direction: ${isSender ? 'row' : 'row-reverse'};
      justify-content: ${isSender ? 'end' : 'start'};

      margin-top: ${isFirstMessage ? '12px' : '0'};
    `};
`

export const Styled = {
  Container,
  DateWrapper,
  ChattingDate,
  BubbleWrapper
}
