import type { ReactElement } from 'react'
import { cloneElement } from 'react'
import type { TabPanelsProps } from './types'
import { childrenMap } from '@utils'

const TabPanels = ({ children, className }: TabPanelsProps): ReactElement => {
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

export { TabPanels, TabPanelsProps }
