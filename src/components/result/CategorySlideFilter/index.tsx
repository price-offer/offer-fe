import styled from '@emotion/styled'
import { IconButton, useMedia } from '@offer-ui/react'
import { useRef, useState, useCallback, useEffect } from 'react'
import type { ReactElement, TouchEventHandler } from 'react'

type Props = {
  cateGoryList: {
    selected: boolean
    code: string
    name: string
  }[]
  onCategoryClick(name: string): void
}
type CategoryItemProps = {
  selected: boolean
}

type CateGoryItemWrapperProps = {
  moveDistanceFromArrow: number
}
const CategorySlideFilter = ({
  cateGoryList,
  onCategoryClick
}: Props): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState<number>(0)
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLast, setIsLast] = useState<boolean>(false)
  const [moveDistanceFromArrow, setMoveDistanceFromArrow] = useState<number>(0)
  const isFirstCategory = containerRef.current?.scrollLeft === 0

  const handleCategoryClick = (name: string): void => {
    onCategoryClick(name)
  }
  useEffect(() => {
    if (desktop) setIsDesktop(true)
    else {
      setIsDesktop(false)
    }
  }, [desktop])
  const onDragStart: TouchEventHandler<HTMLDivElement> = e => {
    if (!containerRef || !containerRef.current || isDesktop) {
      return
    }
    setIsDrag(true)
    setStartX(e.touches[0].clientX + containerRef.current.scrollLeft)
  }

  const onDragEnd = useCallback((): void => {
    setIsDrag(false)
  }, [])

  const handleLeftArrowClick = useCallback((): void => {
    if (!containerRef || !containerRef.current || isDrag) {
      return
    }
    containerRef.current.scrollLeft = 0
    setMoveDistanceFromArrow(containerRef.current.scrollLeft)
    setIsLast(false)
  }, [isDrag])

  const handleRightArrowClick = useCallback((): void => {
    if (!containerRef || !containerRef.current || isDrag) {
      return
    }
    containerRef.current.scrollLeft += 200
    setMoveDistanceFromArrow(containerRef.current.scrollLeft)
    setIsLast(true)
  }, [isDrag])

  const onDragMove: TouchEventHandler<HTMLDivElement> = useCallback(
    e => {
      if (!containerRef || !containerRef.current) {
        return
      }
      if (isDrag) {
        const { scrollWidth, clientWidth, scrollLeft } = containerRef.current
        containerRef.current.scrollLeft = startX - e.touches[0].clientX
        if (scrollLeft === 0) {
          setStartX(e.touches[0].clientX)
        } else if (scrollWidth <= clientWidth + scrollLeft) {
          setStartX(e.touches[0].clientX + scrollLeft)
        }
      }
    },
    [isDrag, startX]
  )
  return (
    <>
      <CateGoryBoxWrapper>
        <CateGoryBox
          ref={containerRef}
          onMouseUp={onDragEnd}
          onTouchEnd={onDragEnd}
          onTouchMove={isDrag ? onDragMove : undefined}
          onTouchStart={onDragStart}
        >
          {isFirstCategory ? (
            <div />
          ) : (
            <LeftArrowWrapper>
              <LeftArrow
                color="black"
                icon="arrowLeft"
                size={16}
                onClick={handleLeftArrowClick}
              />
            </LeftArrowWrapper>
          )}
          {isLast ? (
            <div />
          ) : (
            <RightArrowWrapper>
              <RightArrow
                color="black"
                icon="arrowLeft"
                size={16}
                onClick={handleRightArrowClick}
              />
            </RightArrowWrapper>
          )}
          <CateGoryItemWrapper moveDistanceFromArrow={moveDistanceFromArrow}>
            {cateGoryList.map(cateGory => (
              <CategoryItem
                key={cateGory.name}
                selected={cateGory.selected}
                onClick={(): void => {
                  handleCategoryClick(cateGory.name)
                }}
              >
                <CateGoryName selected={cateGory.selected}>
                  {cateGory.name}
                </CateGoryName>
              </CategoryItem>
            ))}
          </CateGoryItemWrapper>
        </CateGoryBox>
      </CateGoryBoxWrapper>
    </>
  )
}
export { CategorySlideFilter }

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
