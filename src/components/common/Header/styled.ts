import styled from '@emotion/styled'
import { Button, Input } from '@offer-ui/react'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 68px;
  border-bottom: 1px solid #e5e5e5;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  max-width: 1200px;
  width: 100%;
  height: 68px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    padding: 16px 24px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    padding: 16px;
  }
`

const LogoInputSection = styled.section`
  display: flex;
  gap: 20px;
`

const LogoButton = styled(Button)`
  width: 72px;
  height: 40px;
`

const InputWrapper = styled.div`
  ${({ theme }): string => theme.mediaQuery.tablet || theme.mediaQuery.mobile} {
    display: none;
  }
`

const SearchInput = styled(Input)`
  width: 426px;
  margin: 0;
  ${({ theme }): string => theme.mediaQuery.tablet || theme.mediaQuery.mobile} {
    width: 200px;
  }
`

const ButtonSection = styled.section`
  display: flex;
  align-items: center;
  ${({ theme }): string => theme.mediaQuery.tablet || theme.mediaQuery.mobile} {
    display: none;
  }
`
const LogoutText = styled.p`
  color: ${({ theme }): string => theme.colors.grayScale90};
  ${({ theme }): string => theme.fonts.caption01M};
`

const SellButtonDivider = styled.div`
  width: 32px;
`

const HeaderAuthButton = styled(Button)`
  color: ${({ theme }): string => theme.colors.grayScale70};
  ${({ theme }): string => theme.fonts.body02R};
  margin: 0;
  padding: 0;
`

const HeaderProfileSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 33px;
  margin-right: 24px;
`

const HeaderNickName = styled.div`
  color: ${({ theme }): string => theme.colors.grayScale90};
  ${({ theme }): string => theme.fonts.body02R};
`

const MenuSection = styled.section`
  ${({ theme }): string => theme.mediaQuery.desktop} {
    display: none;
  }
  ${({ theme }): string => theme.mediaQuery.tablet || theme.mediaQuery.mobile} {
    display: flex;
  }
  gap: 8px;
`

export const Styled = {
  HeaderWrapper,
  HeaderContent,
  LogoInputSection,
  LogoButton,
  InputWrapper,
  SearchInput,
  ButtonSection,
  HeaderAuthButton,
  LogoutText,
  SellButtonDivider,
  HeaderProfileSection,
  HeaderNickName,
  MenuSection
}
