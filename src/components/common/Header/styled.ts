import styled from '@emotion/styled'
import { Button, Input, Divider } from '@offer-ui/react'

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
`

const LogoInputSection = styled.section`
  display: flex;
  gap: 20px;
`

const LogoButton = styled(Button)`
  width: 72px;
  height: 40px;
`

const SearchInput = styled(Input)`
  width: 426px;
  margin: 0;
`

const ButtonSection = styled.section`
  display: flex;
  align-items: center;
`

const ButtonDivider = styled(Divider)``

const HeaderAuthButton = styled(Button)`
  color: ${({ theme }): string => theme.colors.grayScale70};
  ${({ theme }): string => theme.fonts.body02R};
  margin: 0;
  padding: 0;
`

const SellButton = styled(Button)`
  margin-left: 32px;
`

export const Styled = {
  HeaderWrapper,
  HeaderContent,
  LogoInputSection,
  LogoButton,
  SearchInput,
  ButtonSection,
  ButtonDivider,
  HeaderAuthButton,
  SellButton
}
