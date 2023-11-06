export type SideBarProps = {
  isOpen: boolean
  isLogin: boolean
  onClose(): void
}

export type StyledSideBarWrapperProps = {
  isOpen: boolean
}

export type NavDataType = {
  content: string
  url: string
  iconType: 'box' | 'message' | 'store'
}[]
