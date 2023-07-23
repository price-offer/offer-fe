import styled from '@emotion/styled'
import { IconButton } from '@offer-ui/react'
import type { CateGoryItemWrapperProps, CategoryItemProps } from './types'

const CateGoryBoxWrapper = styled.div`
  overflow: hidden;
  position: relative;
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
  max-width: 1200px;
  width: 100%;
  height: 28px;
  overflow: hidden;
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
  display: flex;
  position: absolute;
  justify-content: end;
  width: 68px;
  height: 28px;
  background: linear-gradient(
    270deg,
    #ffffff 38.82%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 99;
  right: 0;
`

const RightArrow = styled(IconButton)`
  background-color: ${({ theme }): string => theme.colors.white};
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
  transform: scaleX(-1);
`
const LeftArrowWrapper = styled.div`
  position: absolute;
  width: 68px;
  height: 28px;
  background: linear-gradient(
    450deg,
    #ffffff 38.82%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 99;
`

const LeftArrow = styled(IconButton)`
  background-color: ${({ theme }): string => theme.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
`

const CategoryItem = styled.div<CategoryItemProps>`
  padding: 4px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${({ selected, theme }): string => `
  background-color:${selected ? theme.colors.black : theme.colors.bgGray02};
  `};
  z-index: 999;
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
