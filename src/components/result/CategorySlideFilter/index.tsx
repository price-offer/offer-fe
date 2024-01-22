import { useMedia } from '@offer-ui/react'
import { useRef, useState, useCallback } from 'react'
import type { ReactElement, TouchEventHandler } from 'react'
import { Styled } from './styled'
import type { CategorySlideFilterProps } from './types'

const CategorySlideFilter = ({
  categories,
  selectedCategory = 'ALL',
  onClickCategory
}: CategorySlideFilterProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState<number>(0)
  const [isLast, setIsLast] = useState<boolean>(false)
  const [moveDistanceFromArrow, setMoveDistanceFromArrow] = useState<number>(0)
  const { desktop: isDesktop } = useMedia()

  const isFirstCategory = containerRef.current?.scrollLeft === 0

  const handleCategoryClick = (code: string) => () => {
    onClickCategory(code)
  }

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
    <Styled.CateGoryBoxWrapper>
      <Styled.CateGoryBox
        ref={containerRef}
        onMouseUp={onDragEnd}
        onTouchEnd={onDragEnd}
        onTouchMove={isDrag ? onDragMove : undefined}
        onTouchStart={onDragStart}>
        {isFirstCategory ? (
          <div />
        ) : (
          <Styled.LeftArrowWrapper>
            <Styled.LeftArrow
              color="black"
              icon="arrowLeft"
              size={16}
              onClick={handleLeftArrowClick}
            />
          </Styled.LeftArrowWrapper>
        )}
        {isLast ? (
          <div />
        ) : (
          <Styled.RightArrowWrapper>
            <Styled.RightArrow
              color="black"
              icon="arrowLeft"
              size={16}
              onClick={handleRightArrowClick}
            />
          </Styled.RightArrowWrapper>
        )}
        <Styled.CateGoryItemWrapper
          moveDistanceFromArrow={moveDistanceFromArrow}>
          {categories?.map(({ code, name }) => (
            <Styled.CategoryItem
              key={code}
              selected={selectedCategory === code}
              onClick={handleCategoryClick(code)}>
              <Styled.CateGoryName selected={selectedCategory === code}>
                {name}
              </Styled.CateGoryName>
            </Styled.CategoryItem>
          ))}
        </Styled.CateGoryItemWrapper>
      </Styled.CateGoryBox>
    </Styled.CateGoryBoxWrapper>
  )
}
export { CategorySlideFilter, CategorySlideFilterProps }
