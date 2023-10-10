import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Container = styled.li<{ isSelected: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;

  width: 100%;
  padding: 20px;

  list-style: none;

  cursor: pointer;

  ${({ isSelected, theme }) =>
    css`
      background-color: ${isSelected
        ? theme.colors.bgPrimaryWeak
        : theme.colors.white};

      &:hover {
        background-color: ${theme.colors.bgGray04};
      }
    `};
`

const AvatarWrapper = styled.div`
  width: 46px;
`

const Content = styled.div`
  overflow: hidden;

  width: 100%;
`

const Nickname = styled.span`
  margin-right: 4px;

  ${({ theme }): string => theme.fonts.body02B}
`

const Time = styled.span`
  ${({ theme }): SerializedStyles => css`
    color: ${theme.colors.grayScale50};

    ${theme.fonts.body02B}
  `}
`

const LastMessage = styled.p`
  width: 100%;
  height: 20px;
  margin-top: 2px;

  ${({ theme }): SerializedStyles => css`
    color: ${theme.colors.grayScale70};

    ${theme.mixins.textEllipsis}
    ${theme.fonts.body02R}
  `}
`

const SubContent = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`

const AlertWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 18px;
  height: 16px;
  padding: 0 5px;

  ${({ theme }): SerializedStyles => css`
    border-radius: ${theme.radius.round100};

    background-color: ${theme.colors.brandPrimary};

    color: ${theme.colors.white};

    ${theme.fonts.caption01M}
  `}
`

const Alert = styled.i`
  transform: translate(0, 1px);
`

const Price = styled.p`
  width: max-content;

  transform: translate(0, 1px);
  ${({ theme }): string => theme.fonts.body01B};
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 40px;
`

export const Styled = {
  Container,
  AvatarWrapper,
  Content,
  Nickname,
  Time,
  LastMessage,
  SubContent,
  AlertWrapper,
  Alert,
  Price,
  ImageWrapper
}
