import { ShopPageMainView } from './view/main'
import { useAuth } from '@hooks/useAuth'

const MyShopPage = () => {
  const { user } = useAuth()

  return <ShopPageMainView profile={user} />
}

export default MyShopPage
