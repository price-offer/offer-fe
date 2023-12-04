import { deleteCookie, getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { useGetMemberProfileQuery } from '@apis/member'

const EMPTY_COUNT_NUMBER = -1
const initialMember = {
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
  const userQuery = useGetMemberProfileQuery()
  const accessToken = getCookie('accessToken')
  const [isLogin, setIsLogin] = useState(false)

  const handleLogout = () => {
    deleteCookie('accessToken')
    setIsLogin(false)
  }

  useEffect(() => {
    setIsLogin(Boolean(accessToken))
  }, [accessToken])

  return {
    isLogin,
    handleLogout,
    user: userQuery.data?.data || initialMember
  }
}
