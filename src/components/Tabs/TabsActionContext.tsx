import { createContext } from 'react'
import { noop } from '@utils/common'

interface TabsActionContextProps {
  currentTabIndex: number
  handleSetCurrentTabIndex(tabIndex: number): void
}

export const TabsActionContext = createContext<TabsActionContextProps>({
  currentTabIndex: 0,
  handleSetCurrentTabIndex: noop
})
