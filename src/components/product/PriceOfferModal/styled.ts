import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, SelectBox } from '@offer-ui/react'

const Header = styled.div`
  text-align: center;
`

const Title = styled.div`
  ${({ theme }): string => theme.fonts.headline01B}
`

const Description = styled.div`
  ${({ theme }): string => theme.fonts.body01R}
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 20px 0 40px;
`

const Label = styled.label<{ isSubTitle?: boolean }>`
  ${({ theme, isSubTitle }): string =>
    isSubTitle ? theme.fonts.subtitle01B : theme.fonts.body01R};
`

const FormItemContainer = styled.div<{ isMainItem?: boolean }>`
  & > div:first-of-type {
    margin-bottom: 8px;

    ${({ theme, isMainItem }): SerializedStyles => css`
      margin-bottom: ${isMainItem ? '20px' : '8px'};

      ${isMainItem ? theme.fonts.subtitle01B : theme.fonts.body01R}
    `};
  }

  label > span {
    ${({ theme }): string => theme.fonts.body02R};
  }
`

const LocationSelectBoxWrapper = styled(SelectBox)`
  & > div {
    width: 100%;
  }
`

const TradeLocation = styled.div`
  display: flex;
  gap: 8px;

  & > div {
    width: 100%;
  }
`

const OfferButton = styled(Button)`
  :disabled {
    background-color: ${({ theme }): string => theme.colors.grayScale20};
  }
`

export const Styled = {
  Header,
  Title,
  Description,
  Body,
  Label,
  FormItemContainer,
  LocationSelectBoxWrapper,
  TradeLocation,
  OfferButton
}
