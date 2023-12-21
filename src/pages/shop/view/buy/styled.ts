import styled from '@emotion/styled'
import type { ColorKeys } from '@offer-ui/react'
import { Divider as DividerComponent } from '@offer-ui/react'
import { Tabs, Tab as TabComponent } from '@components/common'

const SearchOptionsWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid ${theme.colors.grayScale10};

    ${theme.mediaQuery.tablet} {
      padding: 16px;
    }
  `}
`
const TabsList = styled(Tabs.List)`
  display: flex;
  gap: 22px;
`
const Tab = styled(TabComponent)`
  border: none;

  background: transparent;
`
const StatusButtonLabel = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
`
const Circle = styled.span<{ isCurrent: boolean }>`
  ${({ theme, isCurrent }): string => `
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: ${
      isCurrent ? theme.colors.brandPrimary : theme.colors.grayScale50
    };
  `}
`
const StatusButton = styled.button<{ isCurrent: boolean }>`
  ${({ theme }): string => `
    border: none;
    background: transparent;
    padding: 0;
    margin: 0 4px 0 8px;
    cursor: pointer;

    ${theme.mediaQuery.tablet} {
      margin: 0 4px;
    }
  `}
`
const Text = styled.span<{
  isCurrent?: boolean
  color?: ColorKeys
}>`
  ${({ theme, isCurrent, color }): string => `
    ${theme.fonts.subtitle01B};
    color: ${
      color
        ? theme.colors[color]
        : isCurrent
        ? theme.colors.black
        : theme.colors.grayScale50
    };

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body02B};
    }
  `}
`
const UserProductsWrapper = styled.div`
  ${({ theme }): string => `
    width: 892px;
    height: 855px;
    border: 1px solid ${theme.colors.grayScale10};
    border-bottom: none;

    ${theme.mediaQuery.tablet} {
      width: auto;
      border: none;
    }
  `}
`
const ProductListPanels = styled(Tabs.Panels)`
  ${({ theme }): string => `
    height: 780px;
    overflow-y: scroll;

    ${theme.mediaQuery.tablet} {
      height: auto;
      overflow-y: unset;
    }
  `}
`
const Divider = styled(DividerComponent)`
  ${({ theme }): string => `
    display: none;

    ${theme.mediaQuery.tablet} {
      display: block;
    }
  `}
`

export const Styled = {
  SearchOptionsWrapper,
  TabsList,
  Tab,
  StatusButtonLabel,
  Circle,
  StatusButton,
  Text,
  UserProductsWrapper,
  ProductListPanels,
  Divider
}
