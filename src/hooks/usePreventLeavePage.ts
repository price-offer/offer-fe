import { useRouter } from 'next/router'
import { useEffect } from 'react'

const CONFIRM_MESSAGE = `사이트에서 나가시겠습니까?\n변경사항이 저장되지 않을 수 있습니다.`

const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  e.returnValue = CONFIRM_MESSAGE

  return CONFIRM_MESSAGE
}

export const usePreventLeavePage = (isPrevent = true) => {
  const router = useRouter()

  useEffect(() => {
    const handleBeforeChangeRoute = (url: string) => {
      if (router.pathname !== url && !confirm(CONFIRM_MESSAGE)) {
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
