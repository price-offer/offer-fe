import styled from '@emotion/styled'
import { Avatar, Text, Badge } from '@offer-ui/react'

export const StyledWrapper = styled.li`
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
export const StyledContentWrapper = styled.div`
  flex: 1;
`
export const StyledMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledAvatar = styled(Avatar)`
  min-width: 46px;
`
export const StyledNickNameWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const StyledNickName = styled(Text)`
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
export const StyledBadge = styled(Badge)`
  margin-left: 4px;
`
export const StyledArticleTitle = styled(Text)`
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
export const StyledContentHeader = styled.div`
  margin-bottom: 10px;
`
export const StyledScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
export const StyledContent = styled(Text)`
  display: block;
  margin-top: 6px;
`
