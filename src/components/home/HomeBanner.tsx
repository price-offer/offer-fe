import { Badge, Button } from '@offer-ui/react'
import type { ReactElement } from 'react'

import styled from '@emotion/styled'
import { theme } from '@styles/themes'

const HomeBanner = (): ReactElement => {
  return (
    <>
      <BannerWrapper>
        <BannerLeft>
          <BannerLeftText1>처치곤란한 물건이 있다면?</BannerLeftText1>
          <BannerLeftText2>Offer에 올려보세요!</BannerLeftText2>
          <Button size="medium" style={{ maxWidth: '224px' }}>
            판매하기
          </Button>
        </BannerLeft>
        <BannerRight>
          <BannerLeftTextWrapper>
            <Badge
              colorType="orange"
              style={{
                backgroundColor: theme.colors.brand.primary,
                color: theme.colors.grayScale.gray05,
                height: '24px',
                width: '41px'
              }}>
              New
            </Badge>
            <BannerRightText1>오늘의 새로운 상품</BannerRightText1>
          </BannerLeftTextWrapper>
        </BannerRight>
      </BannerWrapper>
    </>
  )
}
export { HomeBanner }

const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
`

const BannerLeftText1 = styled.div`
  ${({ theme }): string => theme.fonts.subtitle01B}
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.subtitle01B}
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
  }
`
const BannerLeftText2 = styled.div`
  margin-top: 8px;
  ${({ theme }): string => theme.fonts.display02B}

  margin-bottom: 127px;
`

const BannerLeft = styled.div`
  max-width: 688px;
  width: 100%;
  height: 321px;
  background-color: #f6f6f7;
  padding: 45px 0px 27px 34px;
`
const BannerRight = styled.div`
  max-width: 513px;
  width: 100%;
  height: 321px;
  background-color: #000000;
  padding: 34px 0px 0px 51px;
`

const BannerLeftTextWrapper = styled.div`
  display: flex;
  gap: 25px;
`
const BannerRightText1 = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  color:${({ theme }): string => theme.colors.grayScale.white};
  border-bottom: solid;
`
