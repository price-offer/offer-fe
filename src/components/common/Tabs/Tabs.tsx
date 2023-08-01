import type { ReactElement } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import { TabPanels } from './TabPanels'
import { TabsActionContext } from './TabsActionContext'
import type { TabsProps } from './types'

const Tabs = ({
  children,
  onChange,
  className,
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
      <div className={className}>{children}</div>
    </TabsActionContext.Provider>
  )
}

Tabs.List = TabList
Tabs.Panels = TabPanels
Tabs.Panel = TabPanel

export { Tabs, TabsProps }
