import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ALERT_MESSAGE } from '@constants'

const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  e.returnValue = ALERT_MESSAGE.LEAVE_PAGE

  return ALERT_MESSAGE.LEAVE_PAGE
}

export const usePreventLeavePage = (isPrevent = true) => {
  const router = useRouter()

  const handleBeforePopState = () => {
    const userConfirmed = confirm(ALERT_MESSAGE.LEAVE_PAGE)

    window.history.pushState(null, '', router.asPath)

    if (userConfirmed) {
      router.beforePopState(() => true)
      router.back()
    }

    return false
  }

  useEffect(() => {
    if (!isPrevent) {
      return
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    router.beforePopState(handleBeforePopState)

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [isPrevent])
}
