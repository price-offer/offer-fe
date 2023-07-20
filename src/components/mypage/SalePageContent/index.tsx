import { SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useEffect, useState, useCallback } from 'react'
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
import { getOnSaleArticles } from '@apis'
import { ProfileBox, Tabs, SaleTabArticleList } from '@components'
import { TRADE_STATUS } from '@constants'
import { myProfile } from '@mocks/fixture'
import type { ArticlesElement, TradeStatusCode } from '@types'
import { noop } from '@utils'

const sortItems = [
  {
    code: 'recently',
    name: '최신순'
  }
]

const tradeStatusList = TRADE_STATUS.filter(item => item.code !== 2)

export const SalePageContent = (): ReactElement => {
  const hasToken = true
  const [tradeStatusCode, setTradeStatusCode] = useState<TradeStatusCode>(4)
  const [articles, setArticles] = useState<ArticlesElement[]>([])

  const fetchArticles = useCallback(async (): Promise<void> => {
    const res = await getOnSaleArticles('sonny', tradeStatusCode)
    setArticles(res.elements)
  }, [tradeStatusCode])

  const handleTabClick = (newTradeStatusCode: TradeStatusCode) => () => {
    setTradeStatusCode(newTradeStatusCode)
  }

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return (
    <StyledContentWrapper>
      <ProfileBox {...myProfile} />
      <StyledDivider size="bold" />
      <StyledUserProductsWrapper>
        <Tabs>
          <StyledSearchOptionsWrapper>
            <StyledTabsList>
              {tradeStatusList.map(tradeStatus => {
                const isCurrent = tradeStatus.code === tradeStatusCode

                return (
                  <StyledTab
                    key={tradeStatus.code}
                    onClick={handleTabClick(tradeStatus.code)}>
                    <StyledStatusButtonLabel>
                      <StyledCircle isCurrent={isCurrent} />
                      <StyledStatusButton isCurrent={isCurrent}>
                        <StyledText isCurrent={isCurrent}>
                          {tradeStatus.name}
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
              <SaleTabArticleList
                articles={articles}
                hasToken={hasToken}
                onChangeTradeStatus={noop}
              />
            </Tabs.Panel>
            <Tabs.Panel>
              <SaleTabArticleList
                articles={articles}
                hasToken={hasToken}
                onChangeTradeStatus={noop}
              />
            </Tabs.Panel>
          </StyledProductListPanels>
        </Tabs>
      </StyledUserProductsWrapper>
    </StyledContentWrapper>
  )
}
