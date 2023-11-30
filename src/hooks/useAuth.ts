import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { useGetMemberProfileQuery } from '@apis/member'

const INIT_COUNT_NUMBER = -1
const initialMember = {
  id: INIT_COUNT_NUMBER,
  nickname: '',
  profileImageUrl: '',
  likeProductCount: INIT_COUNT_NUMBER,
  offerLevel: INIT_COUNT_NUMBER,
  reviewCount: INIT_COUNT_NUMBER,
  sellingProductCount: INIT_COUNT_NUMBER,
  soldProductCount: INIT_COUNT_NUMBER
}

export const useAuth = () => {
  const userQuery = useGetMemberProfileQuery()
  const accessToken = getCookie('accessToken')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    setIsLogin(Boolean(accessToken))
  }, [accessToken])

  return {
    isLogin,
    user: userQuery.data?.data || initialMember
  }
}
