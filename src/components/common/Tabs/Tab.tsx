import styled from '@emotion/styled'
import type {
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode
} from 'react'
import { useContext } from 'react'
import { TabsActionContext } from './TabsActionContext'
type TabProps = {
  children: ReactNode
  index?: number
  className?: string
  onClick?(e: MouseEvent<HTMLDivElement>, index: number): void
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

  const handleClick: MouseEventHandler<HTMLDivElement> = e => {
    if (typeof index === 'undefined') {
      return
    }

    handleSetCurrentTabIndex(index)
    onClick?.(e, index)
  }

  return (
    <StyledTab
      aria-controls={`tabpanel-${index}`}
      aria-selected={isCurrentTab}
      className={className}
      id={`tab-${index}`}
      role="tab"
      tabIndex={index ? -1 : undefined}
      onClick={handleClick}>
      <span>{children}</span>
    </StyledTab>
  )
}

const StyledTab = styled.div`
  display: inline-block;
`
