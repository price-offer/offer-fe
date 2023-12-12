import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useGetMyProfileQuery } from '@apis/member'

const EMPTY_COUNT_NUMBER = -1
const initialUser = {
  id: EMPTY_COUNT_NUMBER,
  nickname: '',
  profileImageUrl: '',
  likeProductCount: EMPTY_COUNT_NUMBER,
  offerLevel: EMPTY_COUNT_NUMBER,
  reviewCount: EMPTY_COUNT_NUMBER,
  sellingProductCount: EMPTY_COUNT_NUMBER,
  soldProductCount: EMPTY_COUNT_NUMBER
}

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
    user: userData || initialUser
  }
}
