import styled from '@emotion/styled'
import { Tab as TabComponent, Tabs } from '@components/common'

const UserName = styled.p`
  ${({ theme }): string => `
    display: block;
    max-width: 1200px;
    margin: 0 auto 20px;
    padding-top: 20px;

    ${theme.fonts.headline02B};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body01B};
      margin: 16px;
    }
  `}
`
const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Tab = styled(TabComponent)<{ isSelected: boolean }>`
  ${({ theme, isSelected }): string => `
    padding: 17px 16px;
    color: ${isSelected ? theme.colors.white : theme.colors.black};
    background-color: ${isSelected ? theme.colors.black : theme.colors.white};
    border: none;
    cursor: pointer;
    ${theme.fonts.subtitle01B};
    user-select: none;

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body01B};
      padding: 16px 24px;
    }
  `}
`
const TabPanels = styled(Tabs.Panels)`
  ${({ theme }): string => `
    padding-top: 40px;

    ${theme.mediaQuery.tablet} {
      padding-top: 0;
    }
  `}
`
const TabPanelContent = styled.div`
  ${({ theme }): string => `
  display: flex;
  gap: 32px;

  ${theme.mediaQuery.tablet} {
    position: relative;
    flex-direction: column;
    gap: 0;
  }
`}
`

export const Styled = {
  UserName,
  Layout,
  Tab,
  TabPanels,
  TabPanelContent
}
