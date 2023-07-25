import styled from '@emotion/styled'
import type { ReactElement, ReactNode } from 'react'
import { useContext } from 'react'
import { TabsActionContext } from './TabsActionContext'

type TabPanelProps = {
  children: ReactNode
  index?: number
  className?: string
}
export const TabPanel = ({
  index,
  children,
  className
}: TabPanelProps): ReactElement => {
  const { currentTabIndex } = useContext(TabsActionContext)
  const isCurrentTab = index === currentTabIndex

  return (
    <StyledPanel
      aria-labelledby={`tab-${index}`}
      className={className}
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
