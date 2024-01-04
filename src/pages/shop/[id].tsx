import type { GetServerSidePropsContext } from 'next'
import type { ReactElement } from 'react'
import { ShopPageView } from './view'

export const getServerSideProps = (context: GetServerSidePropsContext) => ({
  props: {
    memberId: context.query.id
  }
})

type ShopPageProps = {
  memberId: string
}
const ShopPage = ({ memberId }: ShopPageProps): ReactElement => {
  return <ShopPageView memberId={Number(memberId)} />
}

export default ShopPage
