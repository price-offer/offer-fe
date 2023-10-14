import styled from '@emotion/styled'
import { Button } from '@offer-ui/react'
import type { StyledSideBarWrapperProps } from './types'

const SidebarOverlay = styled.div<StyledSideBarWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }): string => theme.colors.black};
  opacity: 0.5;
  z-index: 10;
  display: ${({ isOpen }): string => (isOpen ? 'block' : 'none')};
`

const SideBarWrapper = styled.div<StyledSideBarWrapperProps>`
  height: 100%;
  width: ${({ isOpen }): string => (isOpen ? '300px' : '0')};
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  overflow-x: hidden;
  background-color: ${({ theme }): string => theme.colors.white};
  transition-property: width;
  transition-duration: 0.5s;
  padding: 68px 24px;
`

const SidebarContent = styled.div``

const SideBarAuthSection = styled.p``

const SidebarMenuSection = styled.nav``

const SidebarMenu = styled.p``

const SidebarLogoutButton = styled(Button)``

export const Styled = {
  SidebarOverlay,
  SideBarWrapper,
  SidebarContent,
  SideBarAuthSection,
  SidebarMenuSection,
  SidebarMenu,
  SidebarLogoutButton
}
