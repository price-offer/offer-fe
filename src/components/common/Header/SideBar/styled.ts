import styled from '@emotion/styled'
import type { StyledSideBarWrapperProps } from './types'

const SidebarOverlay = styled.div<StyledSideBarWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }): number => theme.zIndex.modal};
  display: ${({ isOpen }): string => (isOpen ? 'block' : 'none')};

  width: 100%;
  height: 100%;

  background-color: ${({ theme }): string => theme.colors.black};

  opacity: 0.5;
`

const SideBarWrapper = styled.div<StyledSideBarWrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme }): number => theme.zIndex.modalIcon};
  overflow-x: hidden;

  width: ${({ isOpen }): string => (isOpen ? '300px' : '0')};
  height: 100%;

  background-color: ${({ theme }): string => theme.colors.white};

  transition-duration: 0.5s;
  transition-property: width;
`

const SidebarContent = styled.div`
  width: max-content;
  padding: 68px 24px;
`

const SideBarAuthSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  ${({ theme }): string => theme.fonts.body02R};
  color: ${({ theme }): string => theme.colors.grayScale90};
`

const SideBarLoginButton = styled.button`
  width: 100%;
  border: none;

  background: none;

  color: ${({ theme }): string => theme.colors.grayScale90};
  text-align: left;

  cursor: pointer;

  ${({ theme }): string => theme.fonts.body02R};
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
  width: 100%;
  height: fit-content;
  border: none;

  background: none;

  color: ${({ theme }): string => theme.colors.grayScale70};
  text-align: left;

  cursor: pointer;

  ${({ theme }): string => theme.fonts.body02M};
`

export const Styled = {
  SidebarOverlay,
  SideBarWrapper,
  SidebarContent,
  SideBarAuthSection,
  SideBarLoginButton,
  SidebarMenuSection,
  SidebarMenu,
  SidebarLogoutButton
}
