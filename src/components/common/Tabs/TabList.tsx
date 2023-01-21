import type { ReactElement, ReactNode } from 'react'
import { cloneElement } from 'react'
import { childrenMap } from '@utils'

interface TabListProps {
  children: ReactNode
  className?: string
}
export const TabList = ({
  children,
  className
}: TabListProps): ReactElement => {
  return (
    <div className={className} role="tablist">
      {childrenMap(children, (child, index) =>
        cloneElement(child, {
          index
        })
      )}
    </div>
  )
}
