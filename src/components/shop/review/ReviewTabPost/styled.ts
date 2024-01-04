import styled from '@emotion/styled'
import {
  Avatar as AvatarComponent,
  Text,
  Badge as BadgeComponent
} from '@offer-ui/react'

const Wrapper = styled.li`
  ${({ theme }): string => `
    display: flex;
    padding: 24px;
    gap: 8px;

    ${theme.mediaQuery.tablet} {
      padding 16px 24px;
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
  ${({ theme }): string => `
    display: inline-block;
    max-width: 350px;
    text-overflow: ellipsis;
    overflow: hidden;
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
  ${({ theme }): string => `
    display: block;
    margin-top: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
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
