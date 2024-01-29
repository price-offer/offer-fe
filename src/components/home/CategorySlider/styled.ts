import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconButton } from '@offer-ui/react'
import Link from 'next/link'
import type { CateGoryBoxWrapperProps } from './types'
import { theme } from '@styles'

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

export const CategoryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: transparent;

  color: ${({ theme }) => theme.colors.grayScale90};
  text-decoration: none;
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

const arrowStyle = css`
  position: absolute;
  top: 32px;
  z-index: ${theme.zIndex.common};

  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: ${theme.colors.white};

  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 25%));
`

export const LeftArrow = styled(IconButton)`
  left: 0;

  ${arrowStyle}
`

export const RightArrow = styled(IconButton)`
  right: 0;

  ${arrowStyle}

  transform: scaleX(-1);
`

export const CategoryItem = styled.button`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 108px;
  height: 118px;
  border: none;

  background: transparent;

  cursor: pointer;

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
  width: 108px;
  height: 86px;

  cursor: pointer;

  ${({ theme }) => css`
    padding: 10px;
    border-radius: ${theme.radius.round12};

    background-color: ${theme.colors.grayScale05};

    ${theme.mediaQuery.tablet} {
      width: 80px;
      height: 80px;
      padding: 8px;
    }

    ${theme.mediaQuery.mobile} {
      width: 60px;
      height: 60px;
      padding: 4px;
    }
  `};
`

export const CategoryImg = styled.div<{ url: string }>`
  ${({ url }) => css`
    width: 100%;
    height: 100%;

    background: url(${url}) center/contain no-repeat;
  `}
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
  CategoryLink,
  LeftArrow,
  RightArrow,
  CategoryItem,
  CategoryImgWrapper,
  CategoryImg,
  CateGoryName
}
