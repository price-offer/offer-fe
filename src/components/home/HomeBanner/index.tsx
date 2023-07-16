import styled from '@emotion/styled'
import { Button } from '@offer-ui/react'
import type { ReactElement } from 'react'

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

const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }): string => theme.mediaQuery.tablet} {
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    flex-direction: column;
    padding: 0;
  }
`

const BannerLeft = styled.div`
  width: 100%;
  height: 321px;
  background-color: #f6f6f7;
  padding: 45px 0px 27px 34px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    padding: 30px 0px 18px 20px;
    height: 215px;
  }
  ${({ theme }): string => theme.mediaQuery.tablet} {
    padding-bottom: 18px;
    height: 215px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 0px 0px 0px;
    height: 240px;
  }
`

const BannerLeftText1 = styled.div`
  ${({ theme }): string => theme.fonts.subtitle01B}
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.body01R}
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    ${({ theme }): string => theme.fonts.body01R}
  }
`
const BannerLeftText2 = styled.div`
  ${({ theme }): string => theme.fonts.display02B}
  margin-top: 8px;
  margin-bottom: 127px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.headline01B}
    margin-top: 6px;
    margin-bottom: 62px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    ${({ theme }): string => theme.fonts.headline01B}
    margin-top: 6px;
    margin-bottom: 62px;
  }
`

const BannerLeftSellButton = styled(Button)`
  max-width: 224px;
  height: 64px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 134px;
    height: 43px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 160px;
    height: 48px;
  }
`

const BannerRight = styled.div`
  width: 100%;
  height: 321px;
  background-color: #000000;
  padding: 34px 0px 0px 51px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    padding: 24px 0px 18px 33px;
    height: 215px;
  }
  ${({ theme }): string => theme.mediaQuery.tablet} {
    padding: 24px 0px 18px 33px;
    height: 215px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 13px 0px 0px 0px;
    height: 240px;
  }
`
const BannerRightTextWrapper = styled.div`
  display: flex;
  gap: 17px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 13px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    gap: 13px;
    flex-direction: column;
    align-items: center;
  }
`
const BannerRightNewBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }): string => theme.fonts.caption01M};
  background-color: ${({ theme }): string => theme.colors.bgPrimary};
  color: ${({ theme }): string => theme.colors.grayScale05};
  height: 24px;
  width: 41px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 40px;
  }
`

const BannerRightText1 = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  color:${({ theme }): string => theme.colors.white};
  border-bottom: solid;
  ${({ theme }): string => theme.mediaQuery.mobile} {
    ${({ theme }): string => theme.fonts.subtitle01B}
  }
`
