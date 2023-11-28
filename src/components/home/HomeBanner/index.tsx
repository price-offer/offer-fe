import Link from 'next/link'
import type { ReactElement } from 'react'
import { Styled } from './styled'

const HomeBanner = (): ReactElement => {
  return (
    <>
      <Styled.BannerWrapper>
        <Styled.BannerLeft>
          <Styled.BannerLeftText1>
            처치곤란한 물건이 있다면?
          </Styled.BannerLeftText1>
          <Styled.BannerLeftText2>Offer에 올려보세요!</Styled.BannerLeftText2>
          <Link href="/post">
            <Styled.BannerLeftSellButton>판매하기</Styled.BannerLeftSellButton>
          </Link>
        </Styled.BannerLeft>
        <Styled.BannerRight>
          <Styled.BannerRightTextWrapper>
            <Styled.BannerRightNewBadge>New</Styled.BannerRightNewBadge>
            <Styled.BannerRightText1>
              오늘의 새로운 상품
            </Styled.BannerRightText1>
          </Styled.BannerRightTextWrapper>
        </Styled.BannerRight>
      </Styled.BannerWrapper>
    </>
  )
}
export { HomeBanner }
