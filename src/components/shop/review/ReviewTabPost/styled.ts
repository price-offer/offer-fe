import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  Avatar as AvatarComponent,
  Text,
  Badge as BadgeComponent
} from '@offer-ui/react'

const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;

    padding: 24px;

    ${theme.mediaQuery.tablet} {
      padding: 16px 24px;
    }

    ${theme.mediaQuery.mobile} {
      padding: 16px;
    }
  `}
`

const ContentWrapper = styled.div`
  flex: 1;
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Avatar = styled(AvatarComponent)`
  min-width: 46px;
`

const NickNameWrapper = styled.div`
  display: flex;
  align-items: center;
`

const NickName = styled(Text)`
  ${({ theme }) => css`
    display: inline-block;
    overflow: hidden;

    max-width: 350px;

    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.mobile} {
      max-width: 180px;
    }
  `}
`

const Badge = styled(BadgeComponent)`
  margin-left: 4px;
`

const PostTitle = styled(Text)`
  ${({ theme }) => css`
    display: block;
    overflow: hidden;

    margin-top: 4px;

    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      max-width: 500px;
    }

    ${theme.mediaQuery.mobile} {
      max-width: 250px;
    }
  `}
`

const ContentHeader = styled.div`
  margin-bottom: 10px;
`

const ScoreWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

const Content = styled(Text)`
  display: block;

  margin-top: 6px;
`

export const Styled = {
  Wrapper,
  ContentWrapper,
  Meta,
  Avatar,
  NickNameWrapper,
  NickName,
  Badge,
  PostTitle,
  ContentHeader,
  ScoreWrapper,
  Content
}
