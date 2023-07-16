import type { ReactElement, ReactNode } from 'react'
import { cloneElement } from 'react'
import { childrenMap } from '@utils'

type TabPanelsProps = {
  children: ReactNode
  className?: string
}
export const TabPanels = ({
  children,
  className
}: TabPanelsProps): ReactElement => {
  return (
    <div className={className}>
      {childrenMap(children, (child, index) =>
        cloneElement(child, {
          index
        })
      )}
    </div>
  )
}
