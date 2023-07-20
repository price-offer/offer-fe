import { Badge, Text, Icon } from '@offer-ui/react'
import type { ReactElement } from 'react'
import {
  StyledContainer,
  StyledSettingsButton,
  StyledProfileWrapper,
  StyledAvatar,
  StyledUserWrapper,
  StyledNickNameRow,
  StyledNickName,
  StyledUserProductWrapper,
  StyledUserProductRow,
  StyledUserProductTitleWrapper
} from './styled'
import type { ProfileBoxProps } from './types'

export const ProfileBox = ({
  member,
  sellingArticleCount,
  likedArticleCount,
  offerCount,
  reviewCount,
  className
}: ProfileBoxProps): ReactElement => {
  return (
    <StyledContainer className={className}>
      <StyledSettingsButton>
        <Icon color="grayScale30" size={24} type="setting" />
      </StyledSettingsButton>
      <StyledProfileWrapper>
        <StyledUserWrapper>
          <StyledAvatar alt="avatar" src={member.profileImageUrl} />
          <StyledNickNameRow>
            <StyledNickName>{member.nickname}</StyledNickName>
            <Badge colorType="orange">Lv.{member.offerLevel}</Badge>
          </StyledNickNameRow>
        </StyledUserWrapper>
        <StyledUserProductWrapper>
          <StyledUserProductRow>
            <StyledUserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="store" />
              <Text styleType="caption01M">판매중</Text>
            </StyledUserProductTitleWrapper>
            <Text styleType="caption01M">{sellingArticleCount}개</Text>
          </StyledUserProductRow>
          <StyledUserProductRow>
            <StyledUserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="checkCircle" />
              <Text styleType="caption01M">거래완료</Text>
            </StyledUserProductTitleWrapper>
            <Text styleType="caption01M">{offerCount}개</Text>
          </StyledUserProductRow>
          <StyledUserProductRow>
            <StyledUserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="smile" />
              <Text styleType="caption01M">거래후기</Text>
            </StyledUserProductTitleWrapper>
            <Text styleType="caption01M">{reviewCount}개</Text>
          </StyledUserProductRow>
          <StyledUserProductRow>
            <StyledUserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="heart" />
              <Text styleType="caption01M">관심상품</Text>
            </StyledUserProductTitleWrapper>
            <Text styleType="caption01M">{likedArticleCount}개</Text>
          </StyledUserProductRow>
        </StyledUserProductWrapper>
      </StyledProfileWrapper>
    </StyledContainer>
  )
}
