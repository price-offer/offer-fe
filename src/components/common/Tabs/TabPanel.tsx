import styled from '@emotion/styled'
import type { ReactElement, ReactNode } from 'react'
import { useContext } from 'react'
import { TabsActionContext } from './TabsActionContext'

interface TabPanelProps {
  children: ReactNode
  index?: number
}
export const TabPanel = ({ index, children }: TabPanelProps): ReactElement => {
  const { currentTabIndex } = useContext(TabsActionContext)
  const isCurrentTab = index === currentTabIndex

  return (
    <StyledPanel
      aria-labelledby={`tab-${index}`}
      id={`tabpanel-${index}`}
      isCurrentTab={isCurrentTab}
      role="tabpanel"
      tabIndex={0}>
      {children}
    </StyledPanel>
  )
}

const StyledPanel = styled.div<{ isCurrentTab: boolean }>`
  ${({ isCurrentTab }): string => `display:${isCurrentTab ? 'unset' : 'none'};`}
`