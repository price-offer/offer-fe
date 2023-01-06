import type { ReactElement, ReactNode } from 'react'
import { childrenMap } from '@utils'
import { cloneElement } from 'react'

interface TabPanelsProps {
  children: ReactNode
}
export const TabPanels = ({ children }: TabPanelsProps): ReactElement => {
  return (
    <div>
      {childrenMap(children, (child, index) =>
        cloneElement(child, {
          index
        })
      )}
    </div>
  )
}
