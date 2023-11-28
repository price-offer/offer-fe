import styled from '@emotion/styled'
import { Divider } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import {
  SalePageContent,
  ReviewPageContent,
  BuyPageContent
} from '@components/mypage'
import { Tabs, Tab } from '@components'

import type { TradeActivityType, TradeActivityName } from '@constants'

type PageTab = {
  tab: {
    code: TradeActivityType
    name: TradeActivityName
  }
  panel(): ReactElement
}
const pageTabs: PageTab[] = [
  {
    tab: {
      code: 'sale',
      name: '판매'
    },
    panel: SalePageContent
  },
  {
    tab: {
      code: 'buy',
      name: '구매'
    },
    panel: BuyPageContent
  },
  {
    tab: {
      code: 'review',
      name: '후기'
    },
    panel: ReviewPageContent
  }
]

const MyPage = (): ReactElement => {
  const [pageIndex, setPageIndex] = useState<number>(0)

  const handleTabClick = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setPageIndex(index)
  }

  return (
    <div>
      <StyledUserName>닉네임님의 거래 활동</StyledUserName>
      <Divider />
      <Tabs>
        <StyledLayout>
          <Tabs.List>
            {pageTabs.map(({ tab }, index) => (
              <StyledTab
                key={`${tab.code}-tab`}
                isSelected={pageIndex === index}
                onClick={handleTabClick}>
                {tab.name}
              </StyledTab>
            ))}
          </Tabs.List>
        </StyledLayout>
        <Divider />
        <StyledLayout>
          <StyledTabPanels>
            {pageTabs.map(({ tab, panel }) => (
              <Tabs.Panel key={`${tab.code}-panel`}>{panel()}</Tabs.Panel>
            ))}
          </StyledTabPanels>
        </StyledLayout>
      </Tabs>
      <Divider />
    </div>
  )
}

export default MyPage

const StyledUserName = styled.p`
  ${({ theme }): string => `
    display: block;
    max-width: 1200px;
    margin: 0 auto 20px;
    padding-top: 20px;

    ${theme.fonts.headline02B};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body01B};
      margin: 16px auto;
    }

    ${theme.mediaQuery.mobile} {
      margin-left: 16px;
    }
  `}
`
const StyledLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const StyledTab = styled(Tab)<{ isSelected: boolean }>`
  ${({ theme, isSelected }): string => `
    padding: 17px 16px;
    color: ${isSelected ? theme.colors.white : theme.colors.black};
    background-color: ${isSelected ? theme.colors.black : theme.colors.white};
    border: none;
    cursor: pointer;
    ${theme.fonts.subtitle01B};
    user-select: none;

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body01B};
      padding: 16px 24px;
    }
  `}
`
const StyledTabPanels = styled(Tabs.Panels)`
  ${({ theme }): string => `
    padding-top: 40px;

    ${theme.mediaQuery.tablet} {
      padding-top: 0;
    }
  `}
`
