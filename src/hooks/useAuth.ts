import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useGetMyProfileQuery } from '@apis/member'

export const useAuth = () => {
  const router = useRouter()
  const accessToken = getCookie('accessToken')
  const { data: userData } = useGetMyProfileQuery(accessToken)
  const [isLogin, setIsLogin] = useState(false)

  const handleLogout = () => {
    deleteCookie('accessToken')
    setIsLogin(false)

    router.reload()
  }

  useEffect(() => {
    setIsLogin(Boolean(accessToken))
  }, [accessToken])

  return {
    isLogin,
    handleLogout,
    user: userData
  }
}
