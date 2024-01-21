import type { GetServerSidePropsContext } from 'next'
import type { ReactElement } from 'react'
import { ShopPageView } from './view'
import type { TradeActivityCodes } from '@types'

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => {
  const { id, tab = 'sale' } = query

  return {
    props: {
      memberId: id,
      currentTab: tab
    }
  }
}

type ShopPageProps = {
  memberId: string
  currentTab: TradeActivityCodes
}
const ShopPage = ({ memberId, currentTab }: ShopPageProps): ReactElement => {
  return <ShopPageView currentTab={currentTab} memberId={Number(memberId)} />
}

export default ShopPage
