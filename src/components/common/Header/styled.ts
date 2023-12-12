import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, Input } from '@offer-ui/react'
import Link from 'next/link'

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 68px;
  border-bottom: 1px solid #e5e5e5;

  background-color: ${({ theme }) => theme.colors.white};
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1200px;
  height: 68px;
  padding: 14px 0;
  ${({ theme }): string => theme.mediaQuery.desktop} {
    margin: 0 24px;
  }
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
const LogoutButton = styled.button`
  width: 100%;
  border: none;

  background: none;

  color: ${({ theme }): string => theme.colors.grayScale90};
  text-align: left;
  ${({ theme }): string => theme.fonts.caption01M};
`

const SellButtonDivider = styled.div`
  width: 32px;
`

const HeaderAuthButton = styled(Button)`
  margin: 0;
  padding: 0;

  background: transparent;

  color: ${({ theme }): string => theme.colors.grayScale70};
  ${({ theme }): string => theme.fonts.body02R};
`

const HeaderProfileSection = styled.section`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;

  margin-right: 24px;
  margin-left: 33px;

  cursor: pointer;
`

const HeaderNickName = styled.div`
  color: ${({ theme }): string => theme.colors.grayScale90};
  ${({ theme }): string => theme.fonts.body02R};
`

const MenuSection = styled.section`
  display: none;
  ${({ theme }): string => theme.mediaQuery.tablet || theme.mediaQuery.mobile} {
    display: flex;
  }
  gap: 8px;
`

const TextLink = styled(Link)`
  background: transparent;

  color: ${({ theme }) => theme.colors.grayScale90};
  text-decoration: none;
`

const KaKaoButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.kakao};

    color: ${theme.colors.grayScale90};
  `};
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
  LogoutButton,
  SellButtonDivider,
  HeaderProfileSection,
  HeaderNickName,
  MenuSection,
  TextLink,
  KaKaoButton
}
