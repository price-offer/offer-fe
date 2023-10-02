import { useState } from 'react'

type UseModalReturnType = {
  isOpen: boolean
  open(): void
  close(): void
  toggle(): void
}

const useModal = (): UseModalReturnType => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen)
  }
}

export default useModal
