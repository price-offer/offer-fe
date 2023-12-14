import { Divider } from '@offer-ui/react'
import { Suspense } from '@suspensive/react'
import type { GetServerSidePropsContext } from 'next'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { pageTabs } from './pageTabs'
import { Styled } from './styled'
import { ProfileBox, Tabs } from '@components'
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
  const [pageIndex, setPageIndex] = useState<number>(0)

  const handleTabClick = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setPageIndex(index)
  }

  return (
    <div>
      <Styled.UserName>{profile.nickname}님의 거래 활동</Styled.UserName>
      <Divider />
      <Tabs>
        <Styled.Layout>
          <Tabs.List>
            {pageTabs.map(({ tab }, index) => (
              <Styled.Tab
                key={`${tab.code}-tab`}
                isSelected={pageIndex === index}
                onClick={handleTabClick}>
                {tab.name}
              </Styled.Tab>
            ))}
          </Tabs.List>
        </Styled.Layout>
        <Divider />
        <Styled.Layout>
          <Suspense.CSROnly>
            <Styled.TabPanels>
              {pageTabs.map(({ tab, panel }) => (
                <Tabs.Panel key={`${tab.code}-panel`}>
                  <Styled.TabPanelContent>
                    <ProfileBox {...profile} />
                    {panel()}
                  </Styled.TabPanelContent>
                </Tabs.Panel>
              ))}
            </Styled.TabPanels>
          </Suspense.CSROnly>
        </Styled.Layout>
      </Tabs>
      <Divider />
    </div>
  )
}

export default ShopPage
