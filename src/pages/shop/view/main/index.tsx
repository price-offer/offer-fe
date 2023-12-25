import { Divider } from '@offer-ui/react'
import type { MouseEvent } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import { pageTabs } from '../../pageTabs'
import type { ProfileQueryResult } from '@apis'
import { ProfileBox, Tabs } from '@components'

type ShopPageMainViewProps = {
  hasToken: boolean
  profile: ProfileQueryResult
}
export const ShopPageMainView = ({
  profile,
  hasToken
}: ShopPageMainViewProps) => {
  const [pageIndex, setPageIndex] = useState<number>(0)

  const handleTabClick = (
    _: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setPageIndex(index)
  }

  return (
    <div>
      <Styled.UserName>{profile.data.nickname}님의 거래 활동</Styled.UserName>
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
                  <ProfileBox {...profile.data} />
                  {panel({ profile, hasToken })}
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
