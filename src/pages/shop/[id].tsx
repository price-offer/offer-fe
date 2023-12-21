import type { GetServerSidePropsContext } from 'next'
import type { ReactElement } from 'react'
import { ShopPageMainView } from './view/main'
import { useProfile } from '@hooks'

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return {
    props: {
      memberId: context.query.id
    }
  }
}

type ShopPageProps = {
  memberId: string
}
const ShopPage = ({ memberId }: ShopPageProps): ReactElement => {
  const { profile } = useProfile(memberId)

  return <ShopPageMainView profile={profile} />
}

export default ShopPage
