import { SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Styled } from './styled'
import type { GetPostsReq, ProfileQueryResult } from '@apis'
import { usePostTradeStatusMutation, useGetPostsQuery } from '@apis'
import type { SaleTabPostProps } from '@components'
import { Tabs, SaleTabPostList } from '@components'
import { SORT_OPTIONS, TRADE_STATUS } from '@constants'
import type { SortOption } from '@types'

export type ShopPageSaleViewProps = {
  hasToken: boolean
  profile: ProfileQueryResult
}
export const ShopPageSaleView = ({
  hasToken,
  profile
}: ShopPageSaleViewProps): ReactElement => {
  const [searchOptions, setSearchOptions] = useState<GetPostsReq>({
    sellerId: profile.data.nickname ? profile.data.id : undefined,
    tradeStatus: 'SELLING',
    sort: 'CREATED_DATE_DESC'
  })

  const posts = useGetPostsQuery(searchOptions)
  const postTradeStatus = usePostTradeStatusMutation()

  const handleChangeSearchOptions = useCallback(
    (newOption: GetPostsReq) => {
      setSearchOptions({
        ...searchOptions,
        ...newOption
      })
    },
    [searchOptions]
  )
  const handleChangeProductTradeStatus: SaleTabPostProps['onChangeTradeStatus'] =
    async (postId, tradeStatus) => {
      await postTradeStatus.mutateAsync({
        postId,
        tradeStatus: tradeStatus.code
      })

      await posts.refetch()
      profile.refetch()
    }

  useEffect(
    function fetchProfileOnMount() {
      handleChangeSearchOptions({ sellerId: profile.data.id })
    },
    [profile.data.id]
  )

  return (
    <div>
      <Styled.Divider size="bold" />
      <Styled.UserProductsWrapper>
        <Tabs>
          <Styled.SearchOptionsWrapper>
            <Styled.TabsList>
              {TRADE_STATUS.map(tradeStatus => {
                const isCurrent = tradeStatus.code === searchOptions.tradeStatus

                return (
                  <Styled.Tab
                    key={tradeStatus.code}
                    onClick={() =>
                      handleChangeSearchOptions({
                        tradeStatus: tradeStatus.code
                      })
                    }>
                    <Styled.StatusButtonLabel>
                      <Styled.Circle isCurrent={isCurrent} />
                      <Styled.StatusButton isCurrent={isCurrent}>
                        <Styled.Text isCurrent={isCurrent}>
                          {tradeStatus.name}
                        </Styled.Text>
                      </Styled.StatusButton>
                      <Styled.Text color="grayScale50">
                        {tradeStatus.code === 'SELLING'
                          ? profile.data.sellingProductCount
                          : profile.data.soldProductCount}
                      </Styled.Text>
                    </Styled.StatusButtonLabel>
                  </Styled.Tab>
                )
              })}
            </Styled.TabsList>
            <SelectBox
              colorType="none"
              items={SORT_OPTIONS}
              value={searchOptions.sort}
              onChange={(option: SortOption) =>
                handleChangeSearchOptions({ sort: option.code })
              }
            />
          </Styled.SearchOptionsWrapper>
          <Styled.ProductListPanels>
            {TRADE_STATUS.map(tradeStatus => (
              <Tabs.Panel key={tradeStatus.code}>
                <SaleTabPostList
                  hasToken={hasToken}
                  posts={posts.data?.posts || []}
                  onChangeTradeStatus={handleChangeProductTradeStatus}
                />
              </Tabs.Panel>
            ))}
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
    </div>
  )
}
