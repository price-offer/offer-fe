import { SelectBox } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import { sortItems } from './types'
import { Tabs } from '@components/common'
import { BuyTabArticleList } from '@components/mypage/ArticleList'
import { ProfileBox } from '@components/mypage/ProfileBox'
import { myProfile } from '@mocks/fixture'
import type { TradeBuyActivityType } from '@constants'
import { TRADE_STATUS, TRADE_ACTIVITY_TYPE } from '@constants'
import type { ArticlesElement } from '@types'
import { noop } from '@utils'

const tradeStatusList = TRADE_STATUS.filter(item => item.code !== 2)
const tradeBuyActivityList = Object.entries(TRADE_ACTIVITY_TYPE.buy)

const getArticles = (): ArticlesElement[] => {
  return Array.from({ length: 10 }, () => 0).map((_, index) => {
    const tradeStatus =
      index % 2 !== 0 ? tradeStatusList[0] : tradeStatusList[1]

    return {
      id: index,
      mainImageUrl: '',
      title: `${tradeStatus.name}인 상품`,
      price: 36500,
      tradeArea: '서울시 강남구',
      tradeStatus,
      createdDate: '2023.01.25',
      modifiedDate: '2023.01.25',
      isLiked: false,
      likeCount: 0,
      isReviewed: !!(index % 2 !== 0),
      sellerNickName: 'hypeboy'
    }
  })
}

const BuyPageContent = (): ReactElement => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const [articles] = useState<ArticlesElement[]>(getArticles())

  const handleTabClick = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setTabIndex(index)
  }

  return (
    <div>
      <Styled.ContentWrapper>
        <ProfileBox {...myProfile} />
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
                        <Styled.StatusButton
                          isCurrent={isCurrent}
                          type="button">
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
                  activityType={
                    tradeBuyActivityList[tabIndex][0] as TradeBuyActivityType
                  }
                  articles={articles}
                />
              </Tabs.Panel>
              <Tabs.Panel>
                <BuyTabArticleList
                  activityType={
                    tradeBuyActivityList[tabIndex][0] as TradeBuyActivityType
                  }
                  articles={articles}
                />
              </Tabs.Panel>
            </Styled.ProductListPanels>
          </Tabs>
        </Styled.UserProductsWrapper>
      </Styled.ContentWrapper>
    </div>
  )
}

export { BuyPageContent }
