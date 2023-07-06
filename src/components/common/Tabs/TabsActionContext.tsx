import { createContext } from 'react'
import { noop } from '@utils'

type TabsActionContextProps = {
  currentTabIndex: number
  handleSetCurrentTabIndex(tabIndex: number): void
}

export const TabsActionContext = createContext<TabsActionContextProps>({
  currentTabIndex: 0,
  handleSetCurrentTabIndex: noop
})
