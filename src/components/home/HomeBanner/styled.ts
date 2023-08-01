import styled from '@emotion/styled'
import { Button } from '@offer-ui/react'

const BannerWrapper = styled.div`
  display: flex;

  width: 100%;

  ${({ theme }): string => theme.mediaQuery.mobile} {
    flex-direction: column;

    padding: 0;
  }
`

const BannerLeft = styled.div`
  width: 100%;
  height: 321px;
  padding: 45px 0 27px 34px;

  background-color: #f6f6f7;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 215px;
    padding: 30px 0 18px 20px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 240px;
    padding: 45px 0 0;
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
  padding: 34px 0 0 51px;

  background-color: #000;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 215px;
    padding: 24px 0 18px 33px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 240px;
    padding: 13px 0 0;
  }
`
const BannerRightTextWrapper = styled.div`
  display: flex;
  gap: 17px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 13px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    flex-direction: column;
    gap: 13px;
    align-items: center;
  }
`
const BannerRightNewBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 41px;
  height: 24px;

  background-color: ${({ theme }): string => theme.colors.bgPrimary};

  color: ${({ theme }): string => theme.colors.grayScale05};

  ${({ theme }): string => theme.fonts.caption01M};
  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 40px;
  }
`

const BannerRightText1 = styled.div`
  border-bottom: solid;

  color: ${({ theme }): string => theme.colors.white};

  ${({ theme }): string => theme.fonts.headline02B}

  ${({ theme }): string => theme.mediaQuery.mobile} {
    ${({ theme }): string => theme.fonts.subtitle01B}
  }
`

export const Styled = {
  BannerWrapper,
  BannerLeft,
  BannerLeftText1,
  BannerLeftText2,
  BannerLeftSellButton,
  BannerRight,
  BannerRightTextWrapper,
  BannerRightNewBadge,
  BannerRightText1
}
