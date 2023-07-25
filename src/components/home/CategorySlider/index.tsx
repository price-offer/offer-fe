import styled from '@emotion/styled'
import { IconButton, Image, useMedia } from '@offer-ui/react'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { ReactElement, TouchEventHandler } from 'react'

type CategorySliderProps = {
  imageList: {
    title: string
    url: string
    imageUrl: string
  }[]
}

type CateGoryBoxWrapperProps = {
  isMoveFromArrowButton: number
}

const CategorySlider = ({ imageList }: CategorySliderProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState<number>(0)
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLast, setIsLast] = useState<boolean>(false)
  const [isMoveFromArrowButton, setIsMoveArrowButton] = useState<number>(0)
  const isFirstCategory = containerRef.current?.scrollLeft === 0

  useEffect(() => {
    if (desktop) setIsDesktop(true)
    else {
      setIsDesktop(false)
    }
  }, [desktop])

  const onDragStart: TouchEventHandler<HTMLDivElement> = e => {
    if (!containerRef || !containerRef.current || desktop) {
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
    setIsMoveArrowButton(containerRef.current.scrollLeft)
    setIsLast(false)
  }, [isDrag])

  const handleRightArrowClick = useCallback((): void => {
    if (!containerRef || !containerRef.current || isDrag) {
      return
    }
    containerRef.current.scrollLeft += 200
    setIsMoveArrowButton(containerRef.current.scrollLeft)
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
      <CategoryHeader>카테고리</CategoryHeader>
      <CateGoryWrapper>
        <CateGoryBox
          ref={containerRef}
          onMouseUp={onDragEnd}
          onTouchEnd={onDragEnd}
          onTouchMove={isDrag ? onDragMove : undefined}
          onTouchStart={onDragStart}>
          {isDesktop && (
            <ArrowBox>
              {isFirstCategory ? (
                <div />
              ) : (
                <LeftArrow
                  color="black"
                  icon="arrowLeft"
                  size={16}
                  onClick={handleLeftArrowClick}
                />
              )}
              {isLast ? (
                <div />
              ) : (
                <RightArrow
                  color="black"
                  icon="arrowLeft"
                  size={16}
                  onClick={handleRightArrowClick}
                />
              )}
            </ArrowBox>
          )}
          <CateGoryBoxWrapper isMoveFromArrowButton={isMoveFromArrowButton}>
            {imageList.map(cateGory => (
              <CategoryItem
                key={cateGory.title}
                onClick={(): void => {
                  alert(cateGory.title)
                }}>
                <CategoryImg
                  key={cateGory.title}
                  alt={`category-${cateGory.title}`}
                  src={cateGory.imageUrl}
                />
                <CateGoryName> {cateGory.title}</CateGoryName>
              </CategoryItem>
            ))}
          </CateGoryBoxWrapper>
        </CateGoryBox>
      </CateGoryWrapper>
    </>
  )
}
export { CategorySlider }

const CategoryHeader = styled.div`
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

const CateGoryWrapper = styled.div`
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
const CateGoryBoxWrapper = styled.div<CateGoryBoxWrapperProps>`
  display: flex;
  gap: 12px;

  width: 100%;
  max-width: 1200px;
  height: 118px;

  transition: 0.1s;
  ${({ theme }): string => theme.mediaQuery.desktop} {
    transform: ${({ isMoveFromArrowButton }): string =>
      `translateX(-${isMoveFromArrowButton}px)`};
  }
`
const CateGoryBox = styled.div`
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

const ArrowBox = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  align-self: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 30px;
`

const LeftArrow = styled(IconButton)`
  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: ${({ theme }): string => theme.colors.white};

  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 25%));
`

const RightArrow = styled(IconButton)`
  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: ${({ theme }): string => theme.colors.white};

  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 25%));

  transform: scaleX(-1);
`

const CategoryItem = styled.div`
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
const CategoryImg = styled(Image)`
  width: 108px;
  height: 86px;
  border-radius: 12px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 80px;
    height: 80px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 60px;
    height: 60px;
  }
`
const CateGoryName = styled.div`
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
