import type { Dispatch, SetStateAction } from 'react'

export type PriceInputProps = {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
}
