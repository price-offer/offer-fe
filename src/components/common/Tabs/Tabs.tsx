import type { ReactElement, ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import { TabPanels } from './TabPanels'
import { TabsActionContext } from './TabsActionContext'

export interface TabsProps {
  children: ReactNode
  defaultTabIndex?: number
  className?: string
  onChange?(prevIndex?: number, currentIndex?: number): void
}
export const Tabs = ({
  children,
  onChange,
  defaultTabIndex = 0
}: TabsProps): ReactElement => {
  const [currentTabIndex, setCurrentTabIndex] =
    useState<number>(defaultTabIndex)

  const tabsActionValue = useMemo(
    () => ({
      currentTabIndex,
      handleSetCurrentTabIndex: (newTabIndex: number): void => {
        onChange?.(currentTabIndex, newTabIndex)
        setCurrentTabIndex(newTabIndex)
      }
    }),
    [currentTabIndex, onChange]
  )

  useEffect(() => {
    document.querySelectorAll('[role="tablist"]').forEach((elem, index) => {
      elem.setAttribute('aria-labelledby', `tablist-${index + 1}`)
    })
  }, [])

  return (
    <TabsActionContext.Provider value={tabsActionValue}>
      {children}
    </TabsActionContext.Provider>
  )
}

Tabs.List = TabList
Tabs.Panels = TabPanels
Tabs.Panel = TabPanel
