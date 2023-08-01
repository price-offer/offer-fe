import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconButton } from '@offer-ui/react'
import type { CateGoryItemWrapperProps, CategoryItemProps } from './types'

const CateGoryBoxWrapper = styled.div`
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
const CateGoryBox = styled.div`
  display: flex;
  gap: 8px;
  overflow: hidden;

  width: 100%;
  max-width: 1200px;
  height: 28px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    overflow: scroll;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    overflow: scroll;
  }
`

const CateGoryItemWrapper = styled.div<CateGoryItemWrapperProps>`
  display: flex;
  gap: 10px;

  width: 100%;
  height: 28px;

  transition: 0.1s;
  transform: ${({ moveDistanceFromArrow }): string =>
    `translateX(-${moveDistanceFromArrow}px)`};
`

const RightArrowWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: end;

  width: 68px;
  height: 28px;

  background: linear-gradient(270deg, #fff 38.82%, rgb(255 255 255 / 0%) 100%);
`

const RightArrow = styled(IconButton)`
  position: absolute;

  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: ${({ theme }): string => theme.colors.white};

  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 25%));

  transform: scaleX(-1);
`
const LeftArrowWrapper = styled.div`
  position: absolute;
  z-index: 99;

  width: 68px;
  height: 28px;

  background: linear-gradient(450deg, #fff 38.82%, rgb(255 255 255 / 0%) 100%);
`

const LeftArrow = styled(IconButton)`
  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: ${({ theme }): string => theme.colors.white};

  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 25%));
`

const CategoryItem = styled.div<CategoryItemProps>`
  z-index: 999;

  padding: 4px 16px;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  ${({ selected, theme }): SerializedStyles => css`
    background-color: ${selected ? theme.colors.black : theme.colors.bgGray02};
  `};
`
const CateGoryName = styled.div<CategoryItemProps>`
  ${({ theme }): string => theme.fonts.body02M}
  ${({ selected, theme }): string => `
  color:${selected ? theme.colors.white : theme.colors.grayScale70};
  `};
  width: max-content;
  margin-top: 1px;
`

export const Styled = {
  CateGoryBoxWrapper,
  CateGoryBox,
  CateGoryItemWrapper,
  RightArrowWrapper,
  RightArrow,
  LeftArrowWrapper,
  LeftArrow,
  CategoryItem,
  CateGoryName
}
