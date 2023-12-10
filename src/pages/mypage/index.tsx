import { Divider } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { pageTabs } from './pageTabs'
import { Styled } from './styled'
import { useMyProfileQuery } from '@apis/member'
import { Tabs, ProfileBox } from '@components'

const getCookie = (key: string) => key

const MyPage = (): ReactElement => {
  const accessToken = getCookie('accessToken')
  const [pageIndex, setPageIndex] = useState<number>(0)
  const { data: myProfile } = useMyProfileQuery(accessToken)

  const handleTabClick = (
    _: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setPageIndex(index)
  }

  return (
    <div>
      <Styled.UserName>닉네임님의 거래 활동</Styled.UserName>
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
              <Styled.TabPanel key={`${tab.code}-panel`}>
                <ProfileBox {...myProfile?.data} />
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

export default MyPage
