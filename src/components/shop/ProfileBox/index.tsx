import { Badge, Text, Icon, useMedia } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ProfileBoxProps } from './types'

const ProfileBox = ({
  className,
  isLogin,
  onClickEditButton,
  ...profile
}: ProfileBoxProps): ReactElement => {
  const { desktop } = useMedia()

  return (
    <Styled.Container className={className}>
      {isLogin && (
        <Styled.SettingsButton>
          <Icon
            color="grayScale30"
            size={24}
            type="setting"
            onClick={onClickEditButton}
          />
        </Styled.SettingsButton>
      )}
      <Styled.ProfileWrapper>
        <Styled.UserWrapper>
          <Styled.Avatar
            alt="avatar"
            size={desktop ? 'medium' : 'small'}
            src={profile.profileImageUrl}
          />
          <Styled.NickNameRow>
            <Styled.NickName>{profile.nickname}</Styled.NickName>
            <Badge colorType="orange">Lv.{profile.offerLevel}</Badge>
          </Styled.NickNameRow>
        </Styled.UserWrapper>
        <Styled.UserProductWrapper isLogin={isLogin}>
          <Styled.UserProductRow isLogin={isLogin}>
            <Styled.UserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="store" />
              <Text styleType="caption01M">판매중</Text>
            </Styled.UserProductTitleWrapper>
            <Text styleType="caption01M">{profile.sellingProductCount}개</Text>
          </Styled.UserProductRow>
          <Styled.UserProductRow isLogin={isLogin}>
            <Styled.UserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="checkCircle" />
              <Text styleType="caption01M">거래완료</Text>
            </Styled.UserProductTitleWrapper>
            <Text styleType="caption01M">{profile.soldProductCount}개</Text>
          </Styled.UserProductRow>
          <Styled.UserProductRow isLogin={isLogin}>
            <Styled.UserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="smile" />
              <Text styleType="caption01M">받은후기</Text>
            </Styled.UserProductTitleWrapper>
            <Text styleType="caption01M">{profile.reviewCount}개</Text>
          </Styled.UserProductRow>
          {isLogin && (
            <Styled.UserProductRow isLogin={isLogin}>
              <Styled.UserProductTitleWrapper>
                <Icon color="grayScale30" size={16} type="heart" />
                <Text styleType="caption01M">관심상품</Text>
              </Styled.UserProductTitleWrapper>
              <Text styleType="caption01M">{profile.likeProductCount}개</Text>
            </Styled.UserProductRow>
          )}
        </Styled.UserProductWrapper>
      </Styled.ProfileWrapper>
    </Styled.Container>
  )
}

export { ProfileBox, ProfileBoxProps }
