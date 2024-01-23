import { css } from '@emotion/react'
import styled from '@emotion/styled'

const CategorySliderWrapper = styled.div`
  /* TODO: useMedia를 사용한 조건부 렌더링시 hydration 에러가 발생해 스타일로 우선 적용 했습니다. */
  ${({ theme }) => theme.mediaQuery.tablet} {
    display: none;
  }
`

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  margin: 120px 0;

  text-align: center;
`

const PlaceholderTitle = styled.p`
  margin-bottom: 8px;

  ${({ theme }) => theme.fonts.subtitle01B}
`

const PlaceholderDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayScale70};

    ${theme.fonts.body01M};
  `}
`

export const Styled = {
  CategorySliderWrapper,
  Placeholder,
  PlaceholderTitle,
  PlaceholderDescription
}
