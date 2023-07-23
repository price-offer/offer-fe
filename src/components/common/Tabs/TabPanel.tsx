import type { ReactElement } from 'react'
import { useContext } from 'react'
import { Styled } from './styled'
import { TabsActionContext } from './TabsActionContext'
import type { TabPanelProps } from './types'

export const TabPanel = ({
  index,
  children,
  className
}: TabPanelProps): ReactElement => {
  const { currentTabIndex } = useContext(TabsActionContext)
  const isCurrentTab = index === currentTabIndex

  return (
    <Styled.Panel
      aria-labelledby={`tab-${index}`}
      className={className}
      id={`tabpanel-${index}`}
      isCurrentTab={isCurrentTab}
      role="tabpanel"
      tabIndex={0}>
      {children}
    </Styled.Panel>
  )
}
