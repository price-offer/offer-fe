import styled from '@emotion/styled'
import { Input, Button } from '@offer-ui/react'

export const StyledDIM = styled.div`
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

export const PriceDialogDesktop = styled.div`
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

export const Price = styled.div`
  ${({ theme }): string => theme.fonts.body01B};
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`

export const MinimumInput = styled(Input)`
  max-width: 148px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 136px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 124px;
  }
`

export const MaximumInput = styled(Input)`
  max-width: 148px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 136px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 124px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 12px;
`

export const CancelButton = styled(Button)`
  max-width: 65px;
  height: 32px;
`

export const ApplyButton = styled(Button)`
  background-color: ${({ theme }): string => theme.colors.black};
  max-width: 65px;
  height: 32px;
  border-radius: 4px;
`
