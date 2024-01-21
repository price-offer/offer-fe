import { useState } from 'react'
import { Styled } from './styled'
import {
  useGetProfileQuery,
  useGetReviewsCountsQuery,
  useGetReviewsQuery
} from '@apis'
import { Tabs, ReviewTabPostList } from '@components'
import { TRADE_ACTIVITY_TYPES } from '@constants'
import type { TradeReviewActivityCodes, TradeReviewActivityNames } from '@types'

const tradeReviewActivityList = Object.entries<
  TradeReviewActivityCodes,
  TradeReviewActivityNames
>(TRADE_ACTIVITY_TYPES.review)

export type ShopPageReviewPanelProps = {
  memberId: number | null
}

export const ShopPageReviewPanel = ({ memberId }: ShopPageReviewPanelProps) => {
  const [reviewType, setReviewType] = useState<TradeReviewActivityCodes>('ALL')

  const profile = useGetProfileQuery(memberId)
  const reviewsCounts = useGetReviewsCountsQuery(profile.data.id)
  const reviews = useGetReviewsQuery({
    memberId: profile.data.id,
    lastId: 0,
    limit: 100,
    role: reviewType
  })

  const handleChangeReviewType =
    (newReviewType: TradeReviewActivityCodes) => () => {
      setReviewType(newReviewType)
    }

  return (
    <div>
      <Styled.Divider size="bold" />
      <Styled.UserProductsWrapper>
        <Tabs>
          <Styled.SearchOptionsWrapper>
            <Styled.TabsList>
              {tradeReviewActivityList.map(([code, name]) => {
                const isCurrent = code === reviewType

                return (
                  <Styled.Tab
                    key={`${code}-tab`}
                    onClick={handleChangeReviewType(code)}>
                    <Styled.StatusButtonLabel>
                      <Styled.Circle isCurrent={isCurrent} />
                      <Styled.StatusButton isCurrent={isCurrent} type="button">
                        <Styled.Text isCurrent={isCurrent}>{name}</Styled.Text>
                      </Styled.StatusButton>
                      <Styled.Text color="grayScale50">
                        {reviewsCounts.data[code]}
                      </Styled.Text>
                    </Styled.StatusButtonLabel>
                  </Styled.Tab>
                )
              })}
            </Styled.TabsList>
          </Styled.SearchOptionsWrapper>
          <Styled.ProductListPanels>
            {tradeReviewActivityList.map(([code]) => (
              <Tabs.Panel key={`${code}-panel`}>
                <ReviewTabPostList reviews={reviews.data.reviews} />
              </Tabs.Panel>
            ))}
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
    </div>
  )
}
