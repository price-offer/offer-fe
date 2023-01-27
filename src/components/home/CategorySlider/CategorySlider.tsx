import styled from '@emotion/styled'
import { IconButton, Image } from '@offer-ui/react'
import type { ReactElement } from 'react'

interface CategorySliderProps {
  imageList: {
    title: string
    url: string
    imageUrl: string
  }[]
}

const CategorySlider = ({ imageList }: CategorySliderProps): ReactElement => {
  return (
    <>
      <CategoryHeader>카테고리</CategoryHeader>
      <div>
        <CateGoryBox>
          <ArrowBox>
            <LeftArrow color="black" icon="arrowLeft" size={16} />
            <RightArrow color="black" icon="arrowLeft" size={16} />
          </ArrowBox>
          {imageList.map(cateGory => (
            <CategoryItem key={cateGory.title}>
              <Image
                key={cateGory.title}
                alt={`category-${cateGory.title}`}
                src={cateGory.imageUrl}
                style={{ borderRadius: '12px', height: '86px', width: '108px' }}
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
`
const CateGoryName = styled.div`
  margin-top: 12px;
  text-align: center;
`
