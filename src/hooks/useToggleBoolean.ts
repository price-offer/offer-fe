import { useState } from 'react'

type ReturnType = [boolean, () => void]

export const useToggleBoolean = (init: boolean): ReturnType => {
  const [status, setStatus] = useState(init)

  const handleToggleStatus = () => {
    setStatus(!status)
  }

  return [status, handleToggleStatus]
}
