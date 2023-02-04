import styled from '@emotion/styled'
import { IconButton, Image, useMedia } from '@offer-ui/react'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { ReactElement, MouseEventHandler } from 'react'

interface CategorySliderProps {
  imageList: {
    title: string
    url: string
    imageUrl: string
  }[]
}

const CategorySlider = ({ imageList }: CategorySliderProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const containerMaxWidth = containerRef.current?.scrollWidth
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState<number>(0)
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)
  const isFirstCategory = containerRef.current?.scrollLeft === 0
  const isLastCategory = containerMaxWidth === startX
  useEffect(() => {
    if (desktop) setIsDesktop(true)
    else {
      setIsDesktop(false)
    }
  }, [desktop])

  const onDragStart: MouseEventHandler<HTMLDivElement> = event => {
    if (!containerRef || !containerRef.current) {
      return
    }
    event.preventDefault()
    setIsDrag(true)
    setStartX(event.pageX + containerRef.current.scrollLeft)
  }

  const onDragEnd = useCallback((): void => {
    setIsDrag(false)
  }, [])

  const handleLeftArrowClick = useCallback((): void => {
    if (!containerRef || !containerRef.current) {
      return
    }
    containerRef.current.scrollLeft = 0
    setStartX(0)
  }, [])
  const handleRightArrowClick = useCallback((): void => {
    if (!containerRef || !containerRef.current) {
      return
    }
    containerRef.current.scrollLeft += 300
    setStartX(startX + 300)
  }, [startX])
  const onDragMove: MouseEventHandler<HTMLDivElement> = useCallback(
    event => {
      if (!containerRef || !containerRef.current) {
        return
      }
      if (isDrag) {
        const { scrollWidth, clientWidth, scrollLeft } = containerRef.current
        containerRef.current.scrollLeft = startX - event.pageX
        if (scrollLeft === 0) {
          setStartX(event.pageX)
        } else if (scrollWidth <= clientWidth + scrollLeft) {
          setStartX(event.pageX + scrollLeft)
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
          onMouseDown={onDragStart}
          onMouseLeave={onDragEnd}
          onMouseMove={isDrag ? onDragMove : undefined}
          onMouseUp={onDragEnd}>
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
              {isLastCategory ? (
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
  overflow: hidden;
  position: relative;
  ${({ theme }): string => theme.mediaQuery.tablet} {
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
  }
`

const CateGoryBox = styled.div`
  display: flex;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
  height: 118px;
  overflow: scroll;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 18px;
    height: 112px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    gap: 12px;
    height: 88px;
    max-width: none;
  }
`

const ArrowBox = styled.div`
  width: 100%;
  position: absolute;
  align-self: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

const LeftArrow = styled(IconButton)`
  background-color: ${({ theme }): string => theme.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
`

const RightArrow = styled(IconButton)`
  background-color: ${({ theme }): string => theme.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
  transform: scaleX(-1);
`

const CategoryItem = styled.div`
  max-width: 108px;
  width: 100%;
  height: 118px;
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
const CategoryImg = styled(Image)`
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
const CateGoryName = styled.div`
  margin-top: 12px;
  text-align: center;
  ${({ theme }): string => theme.fonts.body02M}
  color: ${({ theme }): string => theme.fonts.caption01M}
  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 72px;
    ${({ theme }): string => theme.fonts.caption01M}
  }
`
