import { useMedia } from '@offer-ui/react'

import { useState, useEffect, useRef, useCallback } from 'react'
import type { ReactElement, TouchEventHandler } from 'react'
import { Styled } from './styled'
import { useGetCategoriesQuery } from '@apis/post'
import { SORT_OPTIONS } from '@constants/app'
import { toQueryString } from '@utils/format'

const CategorySlider = (): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState<number>(0)
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLast, setIsLast] = useState<boolean>(false)
  const [isMoveFromArrowButton, setIsMoveArrowButton] = useState<number>(0)
  const isFirstCategory = containerRef.current?.scrollLeft === 0

  const getCategoryQuery = useGetCategoriesQuery()

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
            <>
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
            </>
          )}
          <Styled.CateGoryBoxWrapper
            isMoveFromArrowButton={isMoveFromArrowButton}>
            {getCategoryQuery.data?.map(({ code, name, imageUrl }) => {
              return (
                <Styled.CategoryItem key={name}>
                  <Styled.CategoryLink
                    href={`/categories/${code}?${toQueryString({
                      sort: SORT_OPTIONS[0].code
                    })}`}>
                    <Styled.CategoryImgWrapper>
                      <Styled.CategoryImg
                        aria-label={code}
                        role="img"
                        url={imageUrl}
                      />
                    </Styled.CategoryImgWrapper>
                    <Styled.CateGoryName>{name}</Styled.CateGoryName>
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
