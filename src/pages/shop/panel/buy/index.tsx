import { SelectBox } from '@offer-ui/react'
import { useState } from 'react'
import { Styled } from './styled'
import { LikePanelView } from './view/like'
import { OfferPanelView } from './view/offer'
import { useGetMyOffersQuery, useGetLikedPostsQuery } from '@apis'
import { Tabs } from '@components'
import { TRADE_ACTIVITY_TYPES, SORT_OPTIONS } from '@constants'
import type {
  SortOption,
  SortOptionCodes,
  TradeBuyActivityCodes,
  TradeBuyActivityNames
} from '@types'

const tradeBuyActivityTabs = Object.entries<
  TradeBuyActivityCodes,
  TradeBuyActivityNames
>(TRADE_ACTIVITY_TYPES.buy)

export const ShopPageBuyPanel = () => {
  const [sortOptionCode, setSortOptionCode] =
    useState<SortOptionCodes>('CREATED_DATE_DESC')
  const [activityType, setActivityType] =
    useState<TradeBuyActivityCodes>('like')

  const offers = useGetMyOffersQuery({ sort: sortOptionCode })
  const likedPosts = useGetLikedPostsQuery({ sort: sortOptionCode })

  const handleChangeSortOption = (newSortOption: SortOption) => {
    setSortOptionCode(newSortOption.code)
  }

  return (
    <div>
      <Styled.Divider size="bold" />
      <Styled.UserProductsWrapper>
        <Tabs>
          <Styled.SearchOptionsWrapper>
            <Styled.TabsList>
              {tradeBuyActivityTabs.map(([code, name]) => {
                const isCurrent = code === activityType

                return (
                  <Styled.Tab
                    key={`${code}-tab`}
                    onClick={() => setActivityType(code)}>
                    <Styled.StatusButtonLabel>
                      <Styled.Circle isCurrent={isCurrent} />
                      <Styled.StatusButton isCurrent={isCurrent} type="button">
                        <Styled.Text isCurrent={isCurrent}>{name}</Styled.Text>
                      </Styled.StatusButton>
                      <Styled.Text color="grayScale50">
                        {code === 'like'
                          ? likedPosts.data?.posts.length
                          : offers.data?.offers.length}
                      </Styled.Text>
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
              <LikePanelView sortOptionCode={sortOptionCode} />
            </Tabs.Panel>
            <Tabs.Panel>
              <OfferPanelView sortOptionCode={sortOptionCode} />
            </Tabs.Panel>
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
    </div>
  )
}
