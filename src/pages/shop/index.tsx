import { getCookie } from 'cookies-next'
import { ShopPageMainView } from './view/main'
import { useGetMyProfileQuery } from '@apis/member'
import { env } from '@constants'

const MyShopPage = () => {
  const accessToken = getCookie(env.AUTH_TOKEN_KEY)
  const myProfile = useGetMyProfileQuery(accessToken)

  return <ShopPageMainView hasToken profile={myProfile} />
}

export default MyShopPage
