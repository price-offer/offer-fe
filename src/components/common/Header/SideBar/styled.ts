import styled from '@emotion/styled'
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
`

const SidebarContent = styled.div`
  padding: 68px 24px;
`

const SideBarAuthSection = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  gap: 12px;
  ${({ theme }): string => theme.fonts.body02R};
  color: ${({ theme }): string => theme.colors.grayScale90};
`

const SidebarMenuSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 16px 0;
  a {
    text-decoration-line: none;
  }
`

const SidebarMenu = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  ${({ theme }): string => theme.fonts.body01B};
  color: ${({ theme }): string => theme.colors.grayScale90};
`

const SidebarLogoutButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  height: fit-content;
  ${({ theme }): string => theme.fonts.body02M};
  color: ${({ theme }): string => theme.colors.grayScale70};
`

export const Styled = {
  SidebarOverlay,
  SideBarWrapper,
  SidebarContent,
  SideBarAuthSection,
  SidebarMenuSection,
  SidebarMenu,
  SidebarLogoutButton
}
