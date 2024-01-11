import { useMedia } from '@offer-ui/react'

import { useState, useEffect, useRef, useCallback } from 'react'
import type { ReactElement, TouchEventHandler } from 'react'
import { Styled } from './styled'
import { useGetCategoriesQuery } from '@apis/post'

const CategorySlider = (): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState<number>(0)
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLast, setIsLast] = useState<boolean>(false)
  const [isMoveFromArrowButton, setIsMoveArrowButton] = useState<number>(0)
  const isFirstCategory = containerRef.current?.scrollLeft === 0

  const { data: categories } = useGetCategoriesQuery()

  useEffect(() => {
    if (desktop) {
      setIsDesktop(true)
    } else {
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
      <Styled.CategoryHeader>카테고리</Styled.CategoryHeader>
      <Styled.CateGoryWrapper>
        <Styled.CateGoryBox
          ref={containerRef}
          data-test-id="category_scroll_area"
          onMouseUp={onDragEnd}
          onTouchEnd={onDragEnd}
          onTouchMove={isDrag ? onDragMove : undefined}
          onTouchStart={onDragStart}>
          {isDesktop && (
            <Styled.ArrowBox>
              {isFirstCategory ? (
                <div />
              ) : (
                <Styled.LeftArrow
                  color="black"
                  icon="arrowLeft"
                  size={16}
                  onClick={handleLeftArrowClick}
                />
              )}
              {isLast ? (
                <div />
              ) : (
                <Styled.RightArrow
                  color="black"
                  icon="arrowLeft"
                  size={16}
                  onClick={handleRightArrowClick}
                />
              )}
            </Styled.ArrowBox>
          )}
          <Styled.CateGoryBoxWrapper
            isMoveFromArrowButton={isMoveFromArrowButton}>
            {categories?.map(cateGory => {
              return (
                <Styled.CategoryItem key={cateGory.name}>
                  <Styled.CategoryLink
                    href={`/result?category=${cateGory.code}`}>
                    <Styled.CategoryImgWrapper>
                      <Styled.CategoryImg
                        key={cateGory.name}
                        alt={`category-${cateGory.name}`}
                        height={58}
                        src={cateGory.imageUrl}
                        width={58}
                      />
                    </Styled.CategoryImgWrapper>
                    <Styled.CateGoryName>{cateGory.name}</Styled.CateGoryName>
                  </Styled.CategoryLink>
                </Styled.CategoryItem>
              )
            })}
          </Styled.CateGoryBoxWrapper>
        </Styled.CateGoryBox>
      </Styled.CateGoryWrapper>
    </>
  )
}
export { CategorySlider }
