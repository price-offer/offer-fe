import styled from '@emotion/styled'
import { Icon, Input, Button } from '@offer-ui/react'

const PriceDialogWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: fit-conent;
  height: 32px;
  padding: 0 4px;
  border: solid 1px ${({ theme }): string => theme.colors.grayScale20};
  border-radius: 4px;

  background-color: ${({ theme }): string => theme.colors.white};

  ${({ theme }): string => theme.fonts.body02B};
`

const Wrapper = styled.div`
  position: relative;
`

const PriceArrowDown = styled(Icon)`
  width: 16px;
  height: 16px;
`

const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
`

const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }): number => theme.zIndex.selectbox};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }): string => theme.colors.dimOpacity50};
`

const PriceDialog = styled.div`
  position: absolute;
  top: 38px;
  left: 1px;
  z-index: ${({ theme }): number => theme.zIndex.modal};

  width: 344px;
  height: 164px;
  padding: 16px 12px;
  border-radius: 4px;

  background-color: ${({ theme }): string => theme.colors.white};
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  ${({ theme }): string => theme.mediaQuery.tablet} {
    position: relative;

    width: 320px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    position: relative;

    width: 320px;
    padding: 16px 24px;
  }
`

const Price = styled.div`
  ${({ theme }): string => theme.fonts.body01B};
`

const ApplyPrice = styled.div`
  margin-right: 4px;

  ${({ theme }): string => theme.fonts.body02B};
  color: ${({ theme }): string => theme.colors.brandPrimary};
`
const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  margin-top: 12px;
`

const MinimumInput = styled(Input)`
  max-width: 148px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 136px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 124px;
  }
`

const MaximumInput = styled(Input)`
  max-width: 148px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 136px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 124px;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;

  margin-top: 12px;
`

const CancelButton = styled(Button)`
  max-width: 65px;
  height: 32px;
`
const ApplyButton = styled(Button)`
  max-width: 65px;
  height: 32px;
  border-radius: 4px;

  background-color: ${({ theme }): string => theme.colors.black};
`

export const Styled = {
  PriceDialogWrapper,
  Wrapper,
  PriceArrowDown,
  DialogOverlay,
  Dim,
  PriceDialog,
  Price,
  ApplyPrice,
  InputWrapper,
  MinimumInput,
  MaximumInput,
  ButtonWrapper,
  CancelButton,
  ApplyButton
}
