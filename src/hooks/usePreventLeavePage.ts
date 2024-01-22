import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ALERT_MESSAGE } from '@constants'

const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  e.returnValue = ALERT_MESSAGE.LEAVE_PAGE

  return ALERT_MESSAGE.LEAVE_PAGE
}

export const usePreventLeavePage = (isPrevent = true) => {
  const router = useRouter()

  useEffect(() => {
    const handleBeforeChangeRoute = (url: string) => {
      if (router.pathname !== url && !confirm(ALERT_MESSAGE.LEAVE_PAGE)) {
        router.events.emit('routeChangeError')

        throw `사이트 변경 취소`
      }
    }

    if (!isPrevent) {
      return
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    router.events.on('routeChangeStart', handleBeforeChangeRoute)

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      router.events.off('routeChangeStart', handleBeforeChangeRoute)
    }
  }, [isPrevent])
}
