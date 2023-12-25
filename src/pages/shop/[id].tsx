import type { GetServerSidePropsContext } from 'next'
import type { ReactElement } from 'react'
import { ShopPageMainView } from './view/main'
import { useGetMemberProfileQuery } from '@apis/member'

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
  const memberProfile = useGetMemberProfileQuery(memberId)

  return <ShopPageMainView hasToken={false} profile={memberProfile} />
}

export default ShopPage
