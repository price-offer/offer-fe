import { SelectBox } from '@offer-ui/react'
import { useEffect, useState } from 'react'
import { Styled } from './styled'
import type { GetPostsReq } from '@apis'
import {
  useUpdateTradeStatusMutation,
  useGetPostsQuery,
  useGetProfileQuery
} from '@apis'
import type { SaleTabPostProps } from '@components'
import { Tabs, SaleTabPostList } from '@components'
import { SORT_OPTIONS, TRADE_STATUS } from '@constants'
import type { SortOption } from '@types'

export type ShopPageSalePanelProps = {
  isLogin: boolean
  memberId: number | null
}
export const ShopPageSalePanel = ({
  isLogin,
  memberId
}: ShopPageSalePanelProps) => {
  const [searchOptions, setSearchOptions] = useState<GetPostsReq>({
    sellerId: memberId ? memberId : undefined,
    tradeStatus: 'SELLING',
    sort: 'CREATED_DATE_DESC'
  })

  const profile = useGetProfileQuery(memberId)
  const posts = useGetPostsQuery(searchOptions)
  const updateTradeStatus = useUpdateTradeStatusMutation()

  useEffect(
    function fetchPostsOnMount() {
      if (!profile.data.id) {
        return
      }

      setSearchOptions(prevOptions => ({
        ...prevOptions,
        sellerId: profile.data.id
      }))
    },
    [profile.data.id]
  )

  const handleChangeSearchOptions = (newOption: GetPostsReq) =>
    setSearchOptions({
      ...searchOptions,
      ...newOption
    })
  const handleChangeProductTradeStatus: SaleTabPostProps['onChangeTradeStatus'] =
    async (postId, tradeStatus) => {
      await updateTradeStatus.mutateAsync({
        postId,
        tradeStatus: tradeStatus.code
      })

      await posts.refetch()
      profile.refetch()
    }

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
                  isLogin={isLogin}
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
