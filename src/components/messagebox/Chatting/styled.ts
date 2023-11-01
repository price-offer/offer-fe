import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  height: fit-content;

  ${({ theme }) => css`
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

const BubbleContainer = styled.div<{
  isSender?: boolean
  isSectionStart?: boolean
}>`
  display: flex;
  gap: 4px;
  align-items: end;

  ${({ isSender = false, isSectionStart = false }) =>
    css`
      justify-content: ${isSender ? 'end' : 'start'};

      margin-top: ${isSectionStart ? '12px' : '0'};
    `};
`

const ReceiveContainer = styled.div<{ isSectionStart?: boolean }>`
  display: flex;
  gap: 8px;
  align-items: start;

  margin-top: ${({ isSectionStart }) => (isSectionStart ? '12px' : 0)};
`

const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 40px;
    height: 40px;
  }
`

export const Styled = {
  Container,
  DateWrapper,
  ChattingDate,
  BubbleContainer,
  ReceiveContainer,
  AvatarWrapper
}
