import type { GetServerSidePropsContext } from 'next/types'
import { ShopPageView } from './view'
import type { TradeActivityCodes } from '@types'

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => {
  const { tab = 'sale' } = query

  return {
    props: {
      currentTab: tab
    }
  }
}
type MyShopPageProps = {
  currentTab: TradeActivityCodes
}
const MyShopPage = ({ currentTab }: MyShopPageProps) => {
  return <ShopPageView currentTab={currentTab} memberId={null} />
}

export default MyShopPage
