import { SelectBox } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import {
  StyledContentWrapper,
  StyledSearchOptionsWrapper,
  StyledTabsList,
  StyledTab,
  StyledStatusButtonLabel,
  StyledCircle,
  StyledStatusButton,
  StyledText,
  StyledUserProductsWrapper,
  StyledProductListPanels,
  StyledDivider
} from './styled'
import { sortItems } from './types'
import { ProfileBox, Tabs, BuyTabArticleList } from '@components'
import type { TradeBuyActivityType } from '@constants'
import { TRADE_STATUS, TRADE_ACTIVITY_TYPE } from '@constants'
import { myProfile } from '@mocks/fixture'
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

export const BuyPageContent = (): ReactElement => {
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
      <StyledContentWrapper>
        <ProfileBox {...myProfile} />
        <StyledDivider size="bold" />
        <StyledUserProductsWrapper>
          <Tabs>
            <StyledSearchOptionsWrapper>
              <StyledTabsList>
                {tradeBuyActivityList.map((tradeBuyActivity, index) => {
                  const isCurrent = tabIndex === index

                  return (
                    <StyledTab
                      key={tradeBuyActivity[0]}
                      onClick={handleTabClick}>
                      <StyledStatusButtonLabel>
                        <StyledCircle isCurrent={isCurrent} />
                        <StyledStatusButton isCurrent={isCurrent} type="button">
                          <StyledText isCurrent={isCurrent}>
                            {tradeBuyActivity[1]}
                          </StyledText>
                        </StyledStatusButton>
                        <StyledText color="grayScale50">1</StyledText>
                      </StyledStatusButtonLabel>
                    </StyledTab>
                  )
                })}
              </StyledTabsList>
              <SelectBox
                colorType="none"
                items={sortItems}
                value="recently"
                onChange={noop}
              />
            </StyledSearchOptionsWrapper>
            <StyledProductListPanels>
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
            </StyledProductListPanels>
          </Tabs>
        </StyledUserProductsWrapper>
      </StyledContentWrapper>
    </div>
  )
}
