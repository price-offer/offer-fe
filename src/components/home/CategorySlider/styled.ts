import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconButton } from '@offer-ui/react'
import Image from 'next/image'
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
  position: relative;
  overflow: hidden;

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

  width: 100%;
  max-width: 1200px;
  height: fit-content;

  cursor: pointer;

  transition: 0.1s;

  ${({ theme }): string => theme.mediaQuery.desktop} {
    transform: ${({ isMoveFromArrowButton }): string =>
      `translateX(-${isMoveFromArrowButton}px)`};
  }
`
export const CateGoryBox = styled.div`
  display: flex;
  gap: 12px;
  overflow: hidden;

  width: 100%;
  max-width: 1200px;
  height: 118px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 18px;
    overflow: scroll;

    height: 112px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    gap: 12px;
    overflow: scroll;

    max-width: none;
    height: 88px;
  }
`

export const ArrowBox = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  align-self: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 30px;
`

export const LeftArrow = styled(IconButton)`
  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: ${({ theme }): string => theme.colors.white};

  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 25%));
`

export const RightArrow = styled(IconButton)`
  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: ${({ theme }): string => theme.colors.white};

  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 25%));

  transform: scaleX(-1);
`

export const CategoryItem = styled.div`
  width: 100%;
  max-width: 108px;
  height: 118px;

  transition: 0.5s;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 84px;
    height: 112px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 88px;
  }
`

export const CategoryImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 108px;
  height: 86px;

  ${({ theme }) => css`
    border-radius: ${theme.radius.round12};

    background-color: ${theme.colors.grayScale05};

    ${theme.mediaQuery.tablet} {
      width: 80px;
      height: 80px;
    }

    ${theme.mediaQuery.mobile} {
      width: 60px;
      height: 60px;
    }
  `};
`

export const CategoryImg = styled(Image)`
  border-radius: 12px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 52px;
    height: 52px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 40px;
    height: 40px;
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

export const Styled = {
  CategoryHeader,
  CateGoryWrapper,
  CateGoryBoxWrapper,
  CateGoryBox,
  ArrowBox,
  LeftArrow,
  RightArrow,
  CategoryItem,
  CategoryImgWrapper,
  CategoryImg,
  CateGoryName
}
