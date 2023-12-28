import { SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import { useGetLikedPostsQuery } from '@apis/like'
import { useGetMyOffersQuery } from '@apis/offer'
import { Tabs } from '@components/common'
import { BuyTabPostList } from '@components/shop/PostList'
import { TRADE_ACTIVITY_TYPES, SORT_OPTIONS } from '@constants'
import type {
  SortOption,
  SortOptionCodes,
  TradeBuyActivityCodes,
  TradeBuyActivityNames
} from '@types'

const tradeBuyActivityList = Object.entries<
  TradeBuyActivityCodes,
  TradeBuyActivityNames
>(TRADE_ACTIVITY_TYPES.buy)

export const ShopPageBuyView = (): ReactElement => {
  const [sortOptionCode, setSortOptionCode] =
    useState<SortOptionCodes>('CREATED_DATE_DESC')
  const [activityType, setActivityType] =
    useState<TradeBuyActivityCodes>('like')

  const offers = useGetMyOffersQuery({ sort: sortOptionCode })
  const likedPosts = useGetLikedPostsQuery({ sort: sortOptionCode })

  const handleChangeSortOption = (newSortOption: SortOption) => {
    setSortOptionCode(newSortOption.code)
  }
  const handleChangeActivityType =
    (newActivityType: TradeBuyActivityCodes) => (): void =>
      setActivityType(newActivityType)

  return (
    <div>
      <Styled.Divider size="bold" />
      <Styled.UserProductsWrapper>
        <Tabs>
          <Styled.SearchOptionsWrapper>
            <Styled.TabsList>
              {tradeBuyActivityList.map(([code, name]) => {
                const isCurrent = code === activityType

                return (
                  <Styled.Tab
                    key={`${code}-tab`}
                    onClick={handleChangeActivityType(code)}>
                    <Styled.StatusButtonLabel>
                      <Styled.Circle isCurrent={isCurrent} />
                      <Styled.StatusButton isCurrent={isCurrent} type="button">
                        <Styled.Text isCurrent={isCurrent}>{name}</Styled.Text>
                      </Styled.StatusButton>
                      <Styled.Text color="grayScale50">1</Styled.Text>
                    </Styled.StatusButtonLabel>
                  </Styled.Tab>
                )
              })}
            </Styled.TabsList>
            <SelectBox
              colorType="none"
              items={SORT_OPTIONS}
              value={sortOptionCode}
              onChange={handleChangeSortOption}
            />
          </Styled.SearchOptionsWrapper>
          <Styled.ProductListPanels>
            <Tabs.Panel>
              <BuyTabPostList
                activityType="like"
                posts={likedPosts.data?.posts || []}
              />
            </Tabs.Panel>
            <Tabs.Panel>
              <BuyTabPostList
                activityType="offer"
                posts={offers.data?.offers || []}
              />
            </Tabs.Panel>
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
    </div>
  )
}
