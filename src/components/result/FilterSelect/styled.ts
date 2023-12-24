import styled from '@emotion/styled'
import { SelectBox } from '@offer-ui/react'

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 25px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    display: block;
    justify-content: none;

    margin-top: 25px;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  div {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`

const LeftSelectWrapper = styled.div`
  ${({ theme }): string => theme.mediaQuery.mobile} {
    overflow: scroll;
  }
`

const LeftSelectSlider = styled.div`
  display: flex;
  gap: 8px;

  min-width: max-content;
`
const CategorySelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
      color: ${({ theme }): string => theme.colors.white};
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

export const Styled = {
  SelectWrapper,
  LeftSelectWrapper,
  CategorySelect,
  LeftSelectSlider,
  TradePeriodSelect,
  RightSelectWrapper,
  PriceFilterSelect,
  ProductCount
}
