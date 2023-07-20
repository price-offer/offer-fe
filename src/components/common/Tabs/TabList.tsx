import type { ReactElement } from 'react'
import { cloneElement } from 'react'
import type { TabListProps } from './types'
import { childrenMap } from '@utils'

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
