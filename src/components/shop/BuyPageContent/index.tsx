import { SelectBox } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import { sortItems } from './types'
import { Tabs } from '@components/common'
import { BuyTabArticleList } from '@components/shop/ArticleList'
import { TRADE_ACTIVITY_TYPES } from '@constants'
import { noop } from '@utils'

const tradeBuyActivityList = Object.entries(TRADE_ACTIVITY_TYPES.buy)

const getArticles = () => {
  return []
}

const BuyPageContent = (): ReactElement => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const [articles] = useState<any>(getArticles())

  const handleTabClick = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setTabIndex(index)
  }

  return (
    <div>
      <Styled.Divider size="bold" />
      <Styled.UserProductsWrapper>
        <Tabs>
          <Styled.SearchOptionsWrapper>
            <Styled.TabsList>
              {tradeBuyActivityList.map((tradeBuyActivity, index) => {
                const isCurrent = tabIndex === index

                return (
                  <Styled.Tab
                    key={tradeBuyActivity[0]}
                    onClick={handleTabClick}>
                    <Styled.StatusButtonLabel>
                      <Styled.Circle isCurrent={isCurrent} />
                      <Styled.StatusButton isCurrent={isCurrent} type="button">
                        <Styled.Text isCurrent={isCurrent}>
                          {tradeBuyActivity[1]}
                        </Styled.Text>
                      </Styled.StatusButton>
                      <Styled.Text color="grayScale50">1</Styled.Text>
                    </Styled.StatusButtonLabel>
                  </Styled.Tab>
                )
              })}
            </Styled.TabsList>
            <SelectBox
              colorType="none"
              items={sortItems}
              value="recently"
              onChange={noop}
            />
          </Styled.SearchOptionsWrapper>
          <Styled.ProductListPanels>
            <Tabs.Panel>
              <BuyTabArticleList
                activityType={tradeBuyActivityList[tabIndex][0]}
                articles={articles}
              />
            </Tabs.Panel>
            <Tabs.Panel>
              <BuyTabArticleList
                activityType={tradeBuyActivityList[tabIndex][0]}
                articles={articles}
              />
            </Tabs.Panel>
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
    </div>
  )
}

export { BuyPageContent }
