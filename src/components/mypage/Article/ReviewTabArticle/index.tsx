import { Text, Icon } from '@offer-ui/react'
import type { ReactElement } from 'react'
import React from 'react'
import {
  StyledWrapper,
  StyledContentWrapper,
  StyledMeta,
  StyledAvatar,
  StyledNickNameWrapper,
  StyledNickName,
  StyledBadge,
  StyledArticleTitle,
  StyledContentHeader,
  StyledScoreWrapper,
  StyledContent
} from './styled'
import type { ReviewTabArticleProps } from './types'
import { ICON_META } from './types'

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
          <Icon color="brandPrimary" size={24} type={ICON_META[score].type} />
          <Text color="brandPrimary" styleType="body02M">
            {ICON_META[score].text}
          </Text>
        </StyledScoreWrapper>
        <StyledContent styleType="body02R">{content}</StyledContent>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}
