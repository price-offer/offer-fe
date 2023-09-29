import { useState } from 'react'

type ModalState = { [modalName: string]: { isOpen: boolean } }

type UseModalReturnType = {
  modals: ModalState
  open(modalName: string): void
  close(modalName: string): void
}

const useModals = (modalIds: string[]): UseModalReturnType => {
  const [modals, setModals] = useState<ModalState>(
    modalIds.reduce(
      (modals, modalName) => ({ ...modals, [modalName]: { isOpen: false } }),
      {}
    )
  )

  const open = (modalName: string): void => {
    setModals(prevState => ({ ...prevState, [modalName]: { isOpen: true } }))
  }

  const close = (modalName: string): void => {
    setModals(prevState => ({ ...prevState, [modalName]: { isOpen: false } }))
  }

  return { modals, open, close }
}

export default useModals
