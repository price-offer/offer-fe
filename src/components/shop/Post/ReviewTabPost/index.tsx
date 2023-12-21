import { Text, Icon } from '@offer-ui/react'
import type { ReactElement } from 'react'
import React from 'react'
import { Styled } from './styled'
import type { ReviewTabPostProps } from './types'
import { ICON_META } from './types'

const ReviewTabPost = ({
  reviewer,
  post,
  score,
  content,
  createdDate,
  className
}: ReviewTabPostProps): ReactElement => {
  const offerLevel = 1

  return (
    <Styled.Wrapper className={className}>
      <Styled.Avatar alt="avatar" src={reviewer.profileImageUrl} />
      <Styled.ContentWrapper>
        <Styled.ContentHeader>
          <Styled.Meta>
            <Styled.NickNameWrapper>
              <Styled.NickName styleType="body02B">
                {reviewer.nickname}
              </Styled.NickName>
              <Styled.Badge colorType="orange">
                {/* Lv.{reviewer.offerLevel} */}
                Lv.{offerLevel}
              </Styled.Badge>
            </Styled.NickNameWrapper>
            <Text color="grayScale30" styleType="caption01M">
              {createdDate}
            </Text>
          </Styled.Meta>
          <Styled.PostTitle color="grayScale50" styleType="body02R">
            {post.title}
          </Styled.PostTitle>
        </Styled.ContentHeader>
        <Styled.ScoreWrapper>
          <Icon color="brandPrimary" size={24} type={ICON_META[score].type} />
          <Text color="brandPrimary" styleType="body02M">
            {ICON_META[score].text}
          </Text>
        </Styled.ScoreWrapper>
        <Styled.Content styleType="body02R">{content}</Styled.Content>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  )
}

export { ReviewTabPost, ReviewTabPostProps }
