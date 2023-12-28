import { useState } from 'react'

type UseModalReturnType = {
  isOpen: boolean
  openModal(): void
  closeModal(): void
  toggle(): void
}

export const useModal = (): UseModalReturnType => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen)
  }
}
