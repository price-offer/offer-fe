import type { MouseEvent, ReactNode } from 'react'

export type TabProps = {
  children: ReactNode
  index?: number
  className?: string
  onClick?(e: MouseEvent<HTMLDivElement>, index: number): void
}

export type TabListProps = {
  children: ReactNode
  className?: string
}

export type TabPanelProps = {
  children: ReactNode
  index?: number
  className?: string
}

export type TabPanelsProps = {
  children: ReactNode
  className?: string
}

export type TabsProps = {
  children: ReactNode
  defaultTabIndex?: number
  className?: string
  onChange?(prevIndex?: number, currentIndex?: number): void
}
