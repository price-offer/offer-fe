import type { ReactElement } from 'react'
import React from 'react'
import { Styled } from './styled'
import type { SideBarProps } from './types'

export const SideBar = ({ isOpen, onClose }: SideBarProps): ReactElement => {
  return (
    <>
      <Styled.SidebarOverlay isOpen={isOpen} onClick={onClose} />
      <Styled.SideBarWrapper isOpen={isOpen}>sddssd</Styled.SideBarWrapper>
    </>
  )
}
