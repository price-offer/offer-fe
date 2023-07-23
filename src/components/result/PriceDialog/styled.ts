import styled from '@emotion/styled'
import { Icon, Input, Button } from '@offer-ui/react'

const PriceDialogWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  ${({ theme }): string => theme.fonts.body02B};
  background-color: ${({ theme }): string => theme.colors.white};
  width: 61px;
  height: 32px;
  border: solid 1px ${({ theme }): string => theme.colors.grayScale20};
  border-radius: 4px;
`

const Wrapper = styled.div`
  position: relative;
`

const PriceArrowDown = styled(Icon)`
  width: 16px;
  height: 16px;
`

const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }): number => theme.zIndex.modal};
  background-color: ${({ theme }): string => theme.colors.dimOpacity50};
`

const PriceDialogDesktop = styled.div`
  position: absolute;
  width: 344px;
  height: 164px;
  background-color: ${({ theme }): string => theme.colors.white};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  top: 38px;
  left: 1px;
  padding: 16px 12px;
  z-index: 999;
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
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
  background-color: ${({ theme }): string => theme.colors.black};
  max-width: 65px;
  height: 32px;
  border-radius: 4px;
`

export const Styled = {
  PriceDialogWrapper,
  Wrapper,
  PriceArrowDown,
  Dim,
  PriceDialogDesktop,
  Price,
  InputWrapper,
  MinimumInput,
  MaximumInput,
  ButtonWrapper,
  CancelButton,
  ApplyButton
}
