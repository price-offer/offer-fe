import { SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Styled } from './styled'
import { Tabs } from '@components/common'
import { SaleTabArticleList } from '@components/mypage/ArticleList'
import { ProfileBox } from '@components/mypage/ProfileBox'
import { myProfile } from '@mocks/fixture'
import { getOnSaleArticles } from '@apis'
import { TRADE_STATUS } from '@constants'
import type { ArticlesElement, TradeStatusCodes } from '@types'
import { noop } from '@utils'

const sortItems = [
  {
    code: 'recently',
    name: '최신순'
  }
]

const SalePageContent = (): ReactElement => {
  const hasToken = true
  const [tradeStatusCode, setTradeStatusCode] =
    useState<TradeStatusCodes>('SELLING')
  const [articles, setArticles] = useState<ArticlesElement[]>([])

  const fetchArticles = useCallback(async (): Promise<void> => {
    const res = await getOnSaleArticles('sonny', tradeStatusCode)
    setArticles(res.elements)
  }, [tradeStatusCode])

  const handleTabClick = (newTradeStatusCode: TradeStatusCodes) => () => {
    setTradeStatusCode(newTradeStatusCode)
  }

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return (
    <Styled.ContentWrapper>
      <ProfileBox {...myProfile} />
      <Styled.Divider size="bold" />
      <Styled.UserProductsWrapper>
        <Tabs>
          <Styled.SearchOptionsWrapper>
            <Styled.TabsList>
              {TRADE_STATUS.map(tradeStatus => {
                const isCurrent = tradeStatus.code === tradeStatusCode

                return (
                  <Styled.Tab
                    key={tradeStatus.code}
                    onClick={handleTabClick(tradeStatus.code)}>
                    <Styled.StatusButtonLabel>
                      <Styled.Circle isCurrent={isCurrent} />
                      <Styled.StatusButton isCurrent={isCurrent}>
                        <Styled.Text isCurrent={isCurrent}>
                          {tradeStatus.name}
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
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
    </Styled.ContentWrapper>
  )
}

export { SalePageContent }
