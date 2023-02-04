import styled from '@emotion/styled'
import { IconButton, Image, useMedia } from '@offer-ui/react'
import { useState, useEffect } from 'react'
import type { ReactElement } from 'react'

interface CategorySliderProps {
  imageList: {
    title: string
    url: string
    imageUrl: string
  }[]
}

const CategorySlider = ({ imageList }: CategorySliderProps): ReactElement => {
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (desktop) setIsDesktop(true)
    else {
      setIsDesktop(false)
    }
  }, [desktop])
  return (
    <>
      <CategoryHeader>카테고리</CategoryHeader>
      <div>
        <CateGoryBox>
          {isDesktop && (
            <ArrowBox>
              <LeftArrow color="black" icon="arrowLeft" size={16} />
              <RightArrow color="black" icon="arrowLeft" size={16} />
            </ArrowBox>
          )}
          {imageList.map(cateGory => (
            <CategoryItem key={cateGory.title}>
              <CategoryImg
                key={cateGory.title}
                alt={`category-${cateGory.title}`}
                src={cateGory.imageUrl}
              />
              <CateGoryName> {cateGory.title}</CateGoryName>
            </CategoryItem>
          ))}
        </CateGoryBox>
      </div>
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

const CateGoryBox = styled.div`
  display: flex;
  position: relative;
  gap: 12px;
  max-width: 1200px;
  width: 100%;
  height: 118px;
  overflow: hidden;
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
