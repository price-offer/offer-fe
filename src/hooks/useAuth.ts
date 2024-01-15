import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useGetMyProfileQuery } from '@apis/member'
import { env } from '@constants'

export const useAuth = () => {
  const router = useRouter()
  const accessToken = getCookie(env.AUTH_TOKEN_KEY)
  const getMyProfileQuery = useGetMyProfileQuery(accessToken)
  const [isLogin, setIsLogin] = useState(getMyProfileQuery.isSuccess)

  const handleLogout = () => {
    deleteCookie(env.AUTH_TOKEN_KEY)
    setIsLogin(false)

    router.reload()
  }

  useEffect(() => {
    setIsLogin(Boolean(accessToken))
  }, [accessToken])

  return {
    isLogin,
    isLoading: getMyProfileQuery.isLoading,
    handleLogout,
    user: getMyProfileQuery.data
  }
}
