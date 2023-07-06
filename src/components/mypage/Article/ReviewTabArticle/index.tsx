import styled from '@emotion/styled'
import type { IconType } from '@offer-ui/react'
import { Avatar, Text, Icon, Badge } from '@offer-ui/react'
import type { ReactElement } from 'react'
import React from 'react'
import type { ReviewsElement } from '@types'

type IconMeta = {
  type: IconType
  text: string
}
const iconMeta = {
  0: {
    type: 'sadFill',
    text: '별로에요'
  },
  1: {
    type: 'mehFill',
    text: '보통이에요'
  },
  2: {
    type: 'smileFill',
    text: '좋아요'
  }
} as { [key in number]: IconMeta }

export type ReviewTabArticleProps = {
  className?: string
} & ReviewsElement
export const ReviewTabArticle = ({
  reviewer,
  article,
  score,
  content,
  createdDate,
  className
}: ReviewTabArticleProps): ReactElement => {
  return (
    <StyledWrapper className={className}>
      <StyledAvatar alt="avatar" src={reviewer.profileImageUrl} />
      <StyledContentWrapper>
        <StyledContentHeader>
          <StyledMeta>
            <StyledNickNameWrapper>
              <StyledNickName styleType="body02B">
                {reviewer.nickname}
              </StyledNickName>
              <StyledBadge colorType="orange">
                Lv.{reviewer.offerLevel}
              </StyledBadge>
            </StyledNickNameWrapper>
            <Text color="grayScale30" styleType="caption01M">
              {createdDate}
            </Text>
          </StyledMeta>
          <StyledArticleTitle color="grayScale50" styleType="body02R">
            {article.title}
          </StyledArticleTitle>
        </StyledContentHeader>
        <StyledScoreWrapper>
          <Icon color="brandPrimary" size={24} type={iconMeta[score].type} />
          <Text color="brandPrimary" styleType="body02M">
            {iconMeta[score].text}
          </Text>
        </StyledScoreWrapper>
        <StyledContent styleType="body02R">{content}</StyledContent>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.li`
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
const StyledContentWrapper = styled.div`
  flex: 1;
`
const StyledMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledAvatar = styled(Avatar)`
  min-width: 46px;
`
const StyledNickNameWrapper = styled.div`
  display: flex;
  align-items: center;
`
const StyledNickName = styled(Text)`
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
const StyledBadge = styled(Badge)`
  margin-left: 4px;
`
const StyledArticleTitle = styled(Text)`
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
const StyledContentHeader = styled.div`
  margin-bottom: 10px;
`
const StyledScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
const StyledContent = styled(Text)`
  display: block;
  margin-top: 6px;
`
