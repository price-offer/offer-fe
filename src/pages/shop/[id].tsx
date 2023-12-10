import { Divider } from '@offer-ui/react'
import { useRouter } from 'next/router'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { pageTabs } from './pageTabs'
import { Styled } from './styled'
import { useMyProfileQuery, useProfileQuery } from '@apis/member'
import { Tabs, ProfileBox } from '@components'

const getCookie = (key: string) => key

const ShopPage = (): ReactElement => {
  const token = getCookie('token')
  const { query } = useRouter()
  const memberId = query.id as string

  const [tabIndex, setTabIndex] = useState<number>(0)
  const { data: myProfile } = useMyProfileQuery(token)
  const { data: memberProfile } = useProfileQuery(memberId)

  const isMyProfile = memberId === String(myProfile?.data.id)
  const profile = isMyProfile ? myProfile : memberProfile

  const handleTabClick = (
    _: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setTabIndex(index)
  }

  return (
    <div>
      <Styled.UserName>{profile?.data.nickname}님의 거래 활동</Styled.UserName>
      <Divider />
      <Tabs>
        <Styled.Layout>
          <Tabs.List>
            {pageTabs.map(({ tab }, index) => (
              <Styled.Tab
                key={`${tab.code}-tab`}
                isSelected={tabIndex === index}
                onClick={handleTabClick}>
                {tab.name}
              </Styled.Tab>
            ))}
          </Tabs.List>
        </Styled.Layout>
        <Divider />
        <Styled.Layout>
          <Styled.TabPanels>
            {pageTabs.map(({ tab, panel }) => (
              <Styled.TabPanel key={`${tab.code}-panel`}>
                <ProfileBox {...profile?.data} />
                {panel()}
              </Styled.TabPanel>
            ))}
          </Styled.TabPanels>
        </Styled.Layout>
      </Tabs>
      <Divider />
    </div>
  )
}

export default ShopPage
