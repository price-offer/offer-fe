import type { ReactElement } from 'react'
import {
  BannerWrapper,
  BannerLeft,
  BannerLeftText1,
  BannerLeftText2,
  BannerLeftSellButton,
  BannerRight,
  BannerRightTextWrapper,
  BannerRightNewBadge,
  BannerRightText1
} from './styled'

const HomeBanner = (): ReactElement => {
  return (
    <>
      <BannerWrapper>
        <BannerLeft>
          <BannerLeftText1>처치곤란한 물건이 있다면?</BannerLeftText1>
          <BannerLeftText2>Offer에 올려보세요!</BannerLeftText2>
          <BannerLeftSellButton>판매하기</BannerLeftSellButton>
        </BannerLeft>
        <BannerRight>
          <BannerRightTextWrapper>
            <BannerRightNewBadge>New</BannerRightNewBadge>
            <BannerRightText1>오늘의 새로운 상품</BannerRightText1>
          </BannerRightTextWrapper>
        </BannerRight>
      </BannerWrapper>
    </>
  )
}
export { HomeBanner }
