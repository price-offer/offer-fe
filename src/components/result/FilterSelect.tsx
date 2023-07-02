import styled from '@emotion/styled'
import { SelectBox, useMedia } from '@offer-ui/react'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { PriceDialog } from './PriceDialog'

const FilterSelect = (): ReactElement => {
  const { tablet, mobile } = useMedia()

  const [disDesktop, setDIsDesktop] = useState(false)

  useEffect(() => {
    if (tablet || mobile) setDIsDesktop(true)
    else {
      setDIsDesktop(false)
    }
  }, [tablet, mobile])

  return (
    <>
      <SelectWrapper>
        <LeftSelectWrapper>
          {disDesktop ? (
            <CategorySelect
              colorType="dark"
              items={[
                {
                  code: true,
                  name: '전체'
                },
                {
                  code: false,
                  name: '남성패션/잡화'
                },
                {
                  code: false,
                  name: '여성패션/잡화'
                },
                {
                  code: false,
                  name: '게임'
                },
                {
                  code: false,
                  name: '스포츠/레저'
                },
                {
                  code: false,
                  name: '장난감/취미'
                },
                {
                  code: false,
                  name: '디지털기기'
                },
                {
                  code: false,
                  name: '자동차/공구'
                },
                {
                  code: false,
                  name: '생활가전'
                },
                {
                  code: false,
                  name: '가구/인테리어'
                },
                {
                  code: false,
                  name: '도서/티켓/음반'
                },
                {
                  code: false,
                  name: '반려동물'
                }
              ]}
              placeholder="전체"
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onChange={(): void => {}}></CategorySelect>
          ) : (
            <></>
          )}
          <TradePeriodSelect
            colorType="light"
            items={[
              {
                code: '직거래/택배거래',
                name: '직거래/택배거래'
              },
              {
                code: '직거래',
                name: '직거래'
              },
              {
                code: '직거래/택배거래',
                name: '직거래/택배거래'
              }
            ]}
            placeholder="거래방식"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={(): void => {}}></TradePeriodSelect>
          <PriceDialog></PriceDialog>
        </LeftSelectWrapper>
        <RightSelectWrapper>
          {disDesktop && <ProductCount>전체 999개</ProductCount>}
          <PriceFilterSelect
            colorType="none"
            items={[
              {
                code: '높은 가격순',
                name: '높은 가격순'
              },
              {
                code: '낮은 가격순',
                name: '낮은 가격순'
              },
              {
                code: '최신순',
                name: '최신순'
              }
            ]}
            placeholder="높은 가격순"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={(): void => {}}></PriceFilterSelect>
        </RightSelectWrapper>
      </SelectWrapper>
    </>
  )
}
export { FilterSelect }

const SelectWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    margin-top: 25px;
    display: block;
    justify-content: none;
  }
`

const LeftSelectWrapper = styled.div`
  display: flex;
  gap: 8px;
`
const CategorySelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`
const TradePeriodSelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`

const RightSelectWrapper = styled.div`
  ${({ theme }): string => theme.mediaQuery.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
`
const PriceFilterSelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`

const ProductCount = styled.div`
  margin-right: auto;
  ${({ theme }): string => theme.fonts.body01B}
`
