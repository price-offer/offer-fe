import { useMedia } from '@offer-ui/react'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { ReactElement, TouchEventHandler } from 'react'
import { Styled } from './styled'
import { IMAGE } from '@constants'

const CATEGORY_LIST = [
  {
    imageUrl: `${IMAGE.CATEGORY_MAN_GOODS}`,
    title: '남성패션/잡화',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_WOMAN_GOODS}`,
    title: '여성패션/잡화',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_GAME}`,
    title: '게임',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_SPORTS}`,
    title: '스포츠/레저',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_TOY}`,
    title: '장난감/취미',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_DIGITAL_DEVICE}`,
    title: '디지털기기',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_CAR}`,
    title: '자동차/공구',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_APPLIANCE}`,
    title: '생활가전',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_DIGITAL_FURNITURE}`,
    title: '가구/인테리어',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_BOOK}`,
    title: '도서/티켓/음반',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_PET_GOODS}`,
    title: '반려동물용품',
    url: 'string'
  },
  {
    imageUrl: `${IMAGE.CATEGORY_MORE}`,
    title: '더보기',
    url: 'string'
  }
]

const CategorySlider = (): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState<number>(0)
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLast, setIsLast] = useState<boolean>(false)
  const [isMoveFromArrowButton, setIsMoveArrowButton] = useState<number>(0)
  const isFirstCategory = containerRef.current?.scrollLeft === 0

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
            {CATEGORY_LIST.map(cateGory => (
              <Styled.CategoryItem
                key={cateGory.title}
                onClick={(): void => {
                  alert(cateGory.title)
                }}>
                <Styled.CategoryImgWrapper>
                  <Styled.CategoryImg
                    key={cateGory.title}
                    alt={`category-${cateGory.title}`}
                    height={58}
                    src={cateGory.imageUrl}
                    width={58}
                  />
                </Styled.CategoryImgWrapper>
                <Styled.CateGoryName>{cateGory.title}</Styled.CateGoryName>
              </Styled.CategoryItem>
            ))}
          </Styled.CateGoryBoxWrapper>
        </Styled.CateGoryBox>
      </Styled.CateGoryWrapper>
    </>
  )
}
export { CategorySlider }
