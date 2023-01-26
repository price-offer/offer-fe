import styled from '@emotion/styled'
import { Text, Divider } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { BuyPageContent } from './BuyPageContent'
import { ReviewPageContent } from './ReviewPageContent'
import { SalePageContent } from './SalePageContent'
import { Tabs, Tab } from '@components'
import type { TradeActivityType, TradeActivityName } from '@constants'

interface PageTab {
  code: TradeActivityType
  name: TradeActivityName
}
const pageTabs: PageTab[] = [
  {
    code: 'sale',
    name: '판매'
  },
  {
    code: 'buy',
    name: '구매'
  },
  {
    code: 'review',
    name: '후기'
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
      <StyledUserName styleType="headline02B">
        닉네임님의 거래 활동
      </StyledUserName>
      <Divider />

      <Tabs>
        <StyledLayout>
          <Tabs.List>
            {pageTabs.map((_page, index) => (
              <StyledTab
                key={_page.code}
                isSelected={pageIndex === index}
                onClick={handleTabClick}>
                {_page.name}
              </StyledTab>
            ))}
          </Tabs.List>
        </StyledLayout>
        <Divider />
        <StyledLayout>
          <StyledTabPanels>
            <Tabs.Panel>
              <SalePageContent />
            </Tabs.Panel>
            <Tabs.Panel>
              <BuyPageContent />
            </Tabs.Panel>
            <Tabs.Panel>
              <ReviewPageContent />
            </Tabs.Panel>
          </StyledTabPanels>
        </StyledLayout>
      </Tabs>
      <Divider />
    </div>
  )
}

export default MyPage

const StyledUserName = styled(Text)`
  ${({ theme }): string => `
    display: block;
    max-width: 1200px;
    margin: 20px auto;

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body01B};
      margin: 16px auto;
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
