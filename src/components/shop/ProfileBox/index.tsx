import { Badge, Text, Icon } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ProfileBoxProps } from './types'

const ProfileBox = ({
  nickname,
  profileImageUrl,
  likeProductCount,
  offerLevel,
  reviewCount,
  sellingProductCount,
  soldProductCount,
  className
}: ProfileBoxProps): ReactElement => {
  return (
    <Styled.Container className={className}>
      <Styled.SettingsButton>
        <Icon color="grayScale30" size={24} type="setting" />
      </Styled.SettingsButton>
      <Styled.ProfileWrapper>
        <Styled.UserWrapper>
          <Styled.Avatar alt="avatar" src={profileImageUrl} />
          <Styled.NickNameRow>
            <Styled.NickName>{nickname}</Styled.NickName>
            <Badge colorType="orange">Lv.{offerLevel}</Badge>
          </Styled.NickNameRow>
        </Styled.UserWrapper>
        <Styled.UserProductWrapper>
          <Styled.UserProductRow>
            <Styled.UserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="store" />
              <Text styleType="caption01M">판매중</Text>
            </Styled.UserProductTitleWrapper>
            <Text styleType="caption01M">{sellingProductCount}개</Text>
          </Styled.UserProductRow>
          <Styled.UserProductRow>
            <Styled.UserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="checkCircle" />
              <Text styleType="caption01M">거래완료</Text>
            </Styled.UserProductTitleWrapper>
            <Text styleType="caption01M">{soldProductCount}개</Text>
          </Styled.UserProductRow>
          <Styled.UserProductRow>
            <Styled.UserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="smile" />
              <Text styleType="caption01M">거래후기</Text>
            </Styled.UserProductTitleWrapper>
            <Text styleType="caption01M">{reviewCount}개</Text>
          </Styled.UserProductRow>
          <Styled.UserProductRow>
            <Styled.UserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="heart" />
              <Text styleType="caption01M">관심상품</Text>
            </Styled.UserProductTitleWrapper>
            <Text styleType="caption01M">{likeProductCount}개</Text>
          </Styled.UserProductRow>
        </Styled.UserProductWrapper>
      </Styled.ProfileWrapper>
    </Styled.Container>
  )
}

export { ProfileBox, ProfileBoxProps }
