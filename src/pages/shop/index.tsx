import type { GetServerSidePropsContext } from 'next/types'
import { ShopPageLayout } from '@components'
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
  return <ShopPageLayout currentTab={currentTab} memberId={null} />
}

export default MyShopPage
