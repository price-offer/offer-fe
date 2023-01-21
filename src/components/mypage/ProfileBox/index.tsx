import styled from '@emotion/styled'
import { Avatar, Badge, Text, Icon } from '@offer-ui/react'
import type { ReactElement } from 'react'

export interface ProfileBoxProps {
  profileImg: string
  nickName: string
  level: string
  CountOfOnSaleProducts: number
  CountOfCompletedProducts: number
  CountOfReview: number
  CountOfFavoriteProducts: number
  className?: string
}
export const ProfileBox = ({
  profileImg = '',
  nickName = '',
  level = '1',
  CountOfOnSaleProducts = 0,
  CountOfCompletedProducts = 0,
  CountOfReview = 0,
  CountOfFavoriteProducts = 0,
  className
}: ProfileBoxProps): ReactElement => {
  return (
    <StyledContainer className={className}>
      <StyledSettingsButton>
        <Icon color="grayScale30" size={24} type="setting" />
      </StyledSettingsButton>
      <StyledProfileWrapper>
        <StyledUserWrapper>
          <StyledAvatar alt="avatar" src={profileImg} />
          <StyledNickNameRow>
            <StyledNickName>{nickName}</StyledNickName>
            <Badge colorType="orange">Lv.{level}</Badge>
          </StyledNickNameRow>
        </StyledUserWrapper>
        <StyledUserProductWrapper>
          <StyledUserProductRow>
            <StyledUserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="store" />
              <Text styleType="caption01M">판매중</Text>
            </StyledUserProductTitleWrapper>
            <Text styleType="caption01M">{CountOfOnSaleProducts}개</Text>
          </StyledUserProductRow>
          <StyledUserProductRow>
            <StyledUserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="checkCircle" />
              <Text styleType="caption01M">거래완료</Text>
            </StyledUserProductTitleWrapper>
            <Text styleType="caption01M">{CountOfCompletedProducts}개</Text>
          </StyledUserProductRow>
          <StyledUserProductRow>
            <StyledUserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="smile" />
              <Text styleType="caption01M">거래후기</Text>
            </StyledUserProductTitleWrapper>
            <Text styleType="caption01M">{CountOfReview}개</Text>
          </StyledUserProductRow>
          <StyledUserProductRow>
            <StyledUserProductTitleWrapper>
              <Icon color="grayScale30" size={16} type="heart" />
              <Text styleType="caption01M">관심상품</Text>
            </StyledUserProductTitleWrapper>
            <Text styleType="caption01M">{CountOfFavoriteProducts}개</Text>
          </StyledUserProductRow>
        </StyledUserProductWrapper>
      </StyledProfileWrapper>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  ${({ theme }): string => `
    position: relative;
    width: 276px;
    height: 388px;
    padding: 26px;
    border: 1px solid ${theme.colors.grayScale10};
    border-radius: 8px;

    ${theme.mediaQuery.tablet} {
      width: 100%;
      height: auto;
      padding: 20px 24px;
      border: none;
    }

    ${theme.mediaQuery.mobile} {
      padding: 20px 16px;
    }
  `}
`
const StyledSettingsButton = styled.button`
  ${({ theme }): string => `
    float: right;
    cursor: pointer;
    border: none;
    background: none;
    margin-top: -6px;

    ${theme.mediaQuery.tablet} {
      margin-top: 0;
    }
  `}
`

const StyledProfileWrapper = styled.div`
  ${({ theme }): string => `
    margin-top: 28px;

    ${theme.mediaQuery.tablet} {
      margin-top: 0;
    }
  `}
`
const StyledAvatar = styled(Avatar)`
  ${({ theme }): string => `
    ${theme.avatar.medium};

    ${theme.mediaQuery.tablet} {
      ${theme.avatar.small};
    }
  `}
`
const StyledUserWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;

    ${theme.mediaQuery.tablet} {
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 16px;
    }
`}
`
const StyledNickNameRow = styled.div`
  ${({ theme }): string => `
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin-top: 14px;
  align-items: center;

  ${theme.mediaQuery.tablet} {
    margin-top: 0;
    margin-left: 12px;
    align-items: flex-start;
  }
`}
`
const StyledNickName = styled.span`
  ${({ theme }): string => `
    ${theme.fonts.headline02B};
    width: 180px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      text-align: left;
      ${theme.fonts.subtitle01B};
    }

    ${theme.mediaQuery.mobile} {
      width: 160px;
    }
  `}
`
const StyledUserProductWrapper = styled.div`
  ${({ theme }): string => `
    display: grid;
    background-color: ${theme.colors.bgGray01};
    gap: 16px;
    padding: 16px 20px;

    ${theme.mediaQuery.tablet} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 93px;
      padding: 24px 40px;
      min-width: 684px;
    }

    ${theme.mediaQuery.mobile} {
      grid-template-columns: 1fr 1fr;
      gap: 44px;
      min-width: 300px;
      padding: 20px 36px;
    }
  `}
`
const StyledUserProductRow = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${theme.mediaQuery.tablet} {
      min-width: 85px;
    }

    ${theme.mediaQuery.mobile} {
      min-width: 90px;
    }
  `}
`
const StyledUserProductTitleWrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`
