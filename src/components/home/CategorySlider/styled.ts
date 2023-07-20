import styled from '@emotion/styled'
import { IconButton, Image } from '@offer-ui/react'
import type { CateGoryBoxWrapperProps } from './types'

export const CategoryHeader = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  margin-top: 42px;
  margin-bottom: 22px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.subtitle01B}
    margin-top: 40px;
    margin-bottom: 12px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    margin-bottom: 16px;
  }
`

export const CateGoryWrapper = styled.div`
  overflow: hidden;
  position: relative;

  ${({ theme }): string => theme.mediaQuery.tablet} {
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
  }

  div::-webkit-scrollbar {
    display: none;
  }

  div {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`
export const CateGoryBoxWrapper = styled.div<CateGoryBoxWrapperProps>`
  display: flex;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
  height: 118px;
  transition: 0.1s;
  ${({ theme }): string => theme.mediaQuery.desktop} {
    transform: ${({ isMoveFromArrowButton }): string =>
      `translateX(-${isMoveFromArrowButton}px)`};
  }
`
export const CateGoryBox = styled.div`
  display: flex;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
  height: 118px;
  overflow: hidden;
  ${({ theme }): string => theme.mediaQuery.desktop} {
  }
  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 18px;
    height: 112px;
    overflow: scroll;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    gap: 12px;
    height: 88px;
    max-width: none;
    overflow: scroll;
  }
`

export const ArrowBox = styled.div`
  width: 100%;
  position: absolute;
  align-self: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  z-index: 999;
`

export const LeftArrow = styled(IconButton)`
  background-color: ${({ theme }): string => theme.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
`

export const RightArrow = styled(IconButton)`
  background-color: ${({ theme }): string => theme.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
  transform: scaleX(-1);
`

export const CategoryItem = styled.div`
  max-width: 108px;
  width: 100%;
  height: 118px;
  transition: 0.5s;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 84px;
    height: 112px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    height: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const CategoryImg = styled(Image)`
  border-radius: 12px;
  height: 86px;
  width: 108px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 80px;
    width: 80px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    height: 60px;
    width: 60px;
  }
`
export const CateGoryName = styled.div`
  margin-top: 12px;
  text-align: center;
  ${({ theme }): string => theme.fonts.body02M}
  color: ${({ theme }): string => theme.fonts.caption01M}
  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 84px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 72px;
    ${({ theme }): string => theme.fonts.caption01M}
  }
`
