import type { MouseEventHandler, ReactElement, ReactNode } from 'react'
import { useContext } from 'react'
import { TabsActionContext } from './TabsActionContext'

interface TabProps {
  children: ReactNode
  index?: number
}
export const Tab = ({ children, index }: TabProps): ReactElement => {
  const { currentTabIndex, handleSetCurrentTabIndex } =
    useContext(TabsActionContext)
  const isCurrentTab = index === currentTabIndex

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (typeof index === 'undefined') {
      return
    }

    handleSetCurrentTabIndex(index)
  }

  return (
    <button
      aria-controls={`tabpanel-${index}`}
      aria-selected={isCurrentTab}
      id={`tab-${index}`}
      role="tab"
      tabIndex={index ? -1 : undefined}
      type="button"
      onClick={handleClick}>
      <span>{children}</span>
    </button>
  )
}
