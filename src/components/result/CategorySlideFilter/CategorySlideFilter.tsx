import { IconButton } from '@offer-ui/react'
import type { ReactElement } from 'react'
import styled from '@emotion/styled'

interface CategorySliderProps {
  cateGoryList: {
    selected: boolean
    title: string
  }[]
  searchResult: string
}
interface CategoryItemProps {
  selected: boolean
}
const CategorySlideFilter = ({
  cateGoryList,
  searchResult
}: CategorySliderProps): ReactElement => {
  return (
    <>
      <CategoryHeaderWrapper>
        <CategoryHeader>&quot;{searchResult}&quot;의 검색결과</CategoryHeader>
        <CategoryHeaderResultCount>999개</CategoryHeaderResultCount>
      </CategoryHeaderWrapper>
      <div>
        <CateGoryBox>
          <ArrowBox>
            <RightArrowWrapper>
              <Arrow
                colorType="white"
                icon="arrowLeft"
                shape="rounded"
                size="small"
                style={{
                  filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))'
                }}
              />
            </RightArrowWrapper>
            <LeftArrowWrapper>
              <Arrow
                colorType="white"
                icon="arrowLeft"
                shape="rounded"
                size="small"
                style={{
                  filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))',
                  transform: 'scaleX(-1)'
                }}
              />
            </LeftArrowWrapper>
          </ArrowBox>
          {cateGoryList.map(cateGory => (
            <CategoryItem key={cateGory.title} selected={cateGory.selected}>
              <CateGoryName selected={cateGory.selected}>
                {cateGory.title}
              </CateGoryName>
            </CategoryItem>
          ))}
        </CateGoryBox>
      </div>
    </>
  )
}
export { CategorySlideFilter }

const CategoryHeaderWrapper = styled.div`
  display: flex;
`
const CategoryHeader = styled.div`
  ${({ theme }): string => theme.fonts.display02B}
  margin-top: 42px;
  margin-bottom: 22px;
  gap: 8px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.subtitle01B}
    margin-top: 40px;
    margin-bottom: 12px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    margin-bottom: 16px;
  }
`

const CategoryHeaderResultCount = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  color:${({ theme }): string => theme.colors.grayScale.gray50};
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
  gap: 8px;
  width: 100%;
  overflow: hidden;
  height: 28px;
`

const ArrowBox = styled.div`
  width: 100%;
  position: absolute;
  align-self: center;
  display: flex;
  justify-content: space-between;
`

const RightArrowWrapper = styled.div`
  width: 68px;
  height: 28px;
  background: linear-gradient(
    450deg,
    #ffffff 38.82%,
    rgba(255, 255, 255, 0) 100%
  );
`

const LeftArrowWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 68px;
  height: 28px;
  background: linear-gradient(
    270deg,
    #ffffff 38.82%,
    rgba(255, 255, 255, 0) 100%
  );
`
const Arrow = styled(IconButton)``

const CategoryItem = styled.div<CategoryItemProps>`
  padding: 4px 16px;
  border-radius: 4px;
  ${({ selected, theme }): string => `
  background-color:${
    selected ? theme.colors.grayScale.black : theme.colors.background.gray02
  };
  `};
`
const CateGoryName = styled.div<CategoryItemProps>`
  ${({ theme }): string => theme.fonts.body02M}
  ${({ selected, theme }): string => `
  color:${
    selected ? theme.colors.background.white : theme.colors.grayScale.gray70
  };
  `};
  width: max-content;
  margin-top: 1px;
`
