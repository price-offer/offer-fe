import { Divider } from '@offer-ui/react'
import type { MouseEvent } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import { pageTabs } from '../../pageTabs'
import { ProfileBox, Tabs } from '@components'
import type { MyProfile, MemberProfile } from '@types'

type ShopPageMainViewProps = {
  profile: MyProfile | MemberProfile
}
export const ShopPageMainView = ({ profile }: ShopPageMainViewProps) => {
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
          <Styled.TabPanels>
            {pageTabs.map(({ tab, panel }) => (
              <Tabs.Panel key={`${tab.code}-panel`}>
                <Styled.TabPanelContent>
                  <ProfileBox {...profile} />
                  {panel({ memberId: profile.id })}
                </Styled.TabPanelContent>
              </Tabs.Panel>
            ))}
          </Styled.TabPanels>
        </Styled.Layout>
      </Tabs>
      <Divider />
    </div>
  )
}
