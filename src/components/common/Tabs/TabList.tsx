import type { ReactElement, ReactNode } from 'react'
import { cloneElement } from 'react'
import { childrenMap } from '@utils'

interface TabListProps {
  children: ReactNode
}
export const TabList = ({ children }: TabListProps): ReactElement => {
  return (
    <div role="tablist">
      {childrenMap(children, (child, index) =>
        cloneElement(child, {
          index
        })
      )}
    </div>
  )
}
