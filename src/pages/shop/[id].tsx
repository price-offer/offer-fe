import type { GetServerSidePropsContext } from 'next'
import type { ReactElement } from 'react'
import { ShopPageMainView } from './panel/main'

export const getServerSideProps = (context: GetServerSidePropsContext) => ({
  props: {
    memberId: context.query.id
  }
})

type ShopPageProps = {
  memberId: string
}
const ShopPage = ({ memberId }: ShopPageProps): ReactElement => {
  return <ShopPageMainView memberId={Number(memberId)} />
}

export default ShopPage
