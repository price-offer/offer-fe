import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '@hooks/useAuth'

const ShopIndexPage = () => {
  const router = useRouter()
  const { isLogin, isLoading, user } = useAuth()

  const myShop = `/shop/${user.id}`

  useEffect(
    function redirect() {
      if (isLoading) {
        return
      }

      const redirectPath = isLogin ? myShop : '/'
      router.push(redirectPath)
    },
    [isLoading, isLogin, router, user, myShop]
  )
}

export default ShopIndexPage
