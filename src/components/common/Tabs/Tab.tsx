import type {
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode
} from 'react'
import { useContext } from 'react'
import { TabsActionContext } from './TabsActionContext'
interface TabProps {
  children: ReactNode
  index?: number
  className?: string
  onClick?(e?: MouseEvent<HTMLButtonElement>, index?: number): void
}
export const Tab = ({
  children,
  index,
  className,
  onClick
}: TabProps): ReactElement => {
  const { currentTabIndex, handleSetCurrentTabIndex } =
    useContext(TabsActionContext)
  const isCurrentTab = index === currentTabIndex

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (typeof index === 'undefined') {
      return
    }

    handleSetCurrentTabIndex(index)
    onClick?.(e, index)
  }

  return (
    <button
      aria-controls={`tabpanel-${index}`}
      aria-selected={isCurrentTab}
      className={className}
      id={`tab-${index}`}
      role="tab"
      tabIndex={index ? -1 : undefined}
      type="button"
      onClick={handleClick}>
      <span>{children}</span>
    </button>
  )
}