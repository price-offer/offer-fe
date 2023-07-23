import type { MouseEventHandler, ReactElement } from 'react'
import { useContext } from 'react'
import { Styled } from './styled'
import { TabsActionContext } from './TabsActionContext'
import type { TabProps } from './types'

export const Tab = ({
  children,
  index,
  className,
  onClick
}: TabProps): ReactElement => {
  const { currentTabIndex, handleSetCurrentTabIndex } =
    useContext(TabsActionContext)
  const isCurrentTab = index === currentTabIndex

  const handleClick: MouseEventHandler<HTMLDivElement> = e => {
    if (typeof index === 'undefined') {
      return
    }

    handleSetCurrentTabIndex(index)
    onClick?.(e, index)
  }

  return (
    <Styled.Tab
      aria-controls={`tabpanel-${index}`}
      aria-selected={isCurrentTab}
      className={className}
      id={`tab-${index}`}
      role="tab"
      tabIndex={index ? -1 : undefined}
      onClick={handleClick}>
      <span>{children}</span>
    </Styled.Tab>
  )
}
