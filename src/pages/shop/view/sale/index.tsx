import { SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { GetPostsReq } from '@apis/post'
import { useGetPostsQuery } from '@apis/post'
import { Tabs } from '@components/common'
import { SaleTabPostList } from '@components/shop/PostList'
import { SORT_OPTIONS, TRADE_STATUS } from '@constants'
import type { TradeStatusCodes } from '@types'
import { noop } from '@utils'

export type ShopPageSaleViewProps = {
  memberId: number
}
export const ShopPageSaleView = ({
  memberId
}: ShopPageSaleViewProps): ReactElement => {
  const hasToken = true
  const [tradeStatusCode, setTradeStatusCode] =
    useState<TradeStatusCodes>('SELLING')

  const searchOptions = {
    sellerId: memberId,
    tradeStatus: tradeStatusCode
  } as GetPostsReq

  const { data: postsInfo } = useGetPostsQuery(searchOptions)

  const handleTabClick = (newTradeStatusCode: TradeStatusCodes) => () => {
    setTradeStatusCode(newTradeStatusCode)
  }

  return (
    <div>
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
                      <Styled.Text color="grayScale50">
                        {postsInfo?.[tradeStatus.code].posts.length}
                      </Styled.Text>
                    </Styled.StatusButtonLabel>
                  </Styled.Tab>
                )
              })}
            </Styled.TabsList>
            <SelectBox
              colorType="none"
              items={SORT_OPTIONS}
              value="CREATED_DATE_DESC"
              onChange={noop}
            />
          </Styled.SearchOptionsWrapper>
          <Styled.ProductListPanels>
            <Tabs.Panel>
              <SaleTabPostList
                hasToken={hasToken}
                posts={postsInfo?.['SELLING'].posts || []}
                onChangeTradeStatus={noop}
              />
            </Tabs.Panel>
            <Tabs.Panel>
              <SaleTabPostList
                hasToken={hasToken}
                posts={postsInfo?.['SOLD'].posts || []}
                onChangeTradeStatus={noop}
              />
            </Tabs.Panel>
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
    </div>
  )
}
