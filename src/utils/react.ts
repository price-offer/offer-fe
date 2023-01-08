import type { ReactElement, ReactNode } from 'react'
import { Children } from 'react'

type ChildrenMap<T = ReactElement, C = ReactNode | ReactElement> = (
  children: C,
  callback: (child: C extends ReactNode ? ReactElement : C, index: number) => T
) => C extends null | undefined ? C : Exclude<T, boolean | null | undefined>[]

export const childrenMap: ChildrenMap = (children, callback) => {
  return Children.map(children, (child, index) => {
    const childElement = child as ReactElement

    return callback(childElement, index)
  })
}
