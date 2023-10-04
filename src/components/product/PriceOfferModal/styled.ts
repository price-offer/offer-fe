import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, Modal, Radio } from '@offer-ui/react'

const PriceOfferModal = styled(Modal)`
  width: 400px;

  ${({ theme }): SerializedStyles => css`
    ${theme.mediaQuery.tablet} {
      width: 320px;
    }

    ${theme.mediaQuery.mobile} {
      width: 100vw;
      height: 100vh;
    }
  `}
`

const Header = styled.div`
  text-align: center;
`

const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: end;

  width: 100%;
  margin-bottom: 12px;
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

const FormRadio = styled(Radio)`
  flex-wrap: wrap;

  label > span {
    ${({ theme }): string => theme.fonts.body02R};
  }
`

const FormTitle = styled.p<{ isMainTitle?: boolean }>`
  margin-bottom: 8px;

  ${({ theme, isMainTitle }): SerializedStyles => css`
    margin-bottom: ${isMainTitle ? '20px' : '8px'};

    ${isMainTitle ? theme.fonts.subtitle01B : theme.fonts.body01R}
  `};
`

const TradeArea = styled.div`
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
  PriceOfferModal,
  Header,
  CloseIconWrapper,
  Title,
  Description,
  Body,
  Label,
  FormTitle,
  FormRadio,
  TradeArea,
  OfferButton
}
