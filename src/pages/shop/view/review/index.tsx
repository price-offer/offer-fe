import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import { Tabs } from '@components/common'
import { ReviewTabPostList } from '@components/shop/PostList'
import { TRADE_ACTIVITY_TYPES } from '@constants'

const tradeReviewActivityList = Object.entries(TRADE_ACTIVITY_TYPES.review)

const getReviews = () => {
  return []
}

export type ShopPageReviewViewProps = {
  memberId: number
}

export const ShopPageReviewView = ({
  memberId
}: ShopPageReviewViewProps): ReactElement => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const [reviews] = useState<any>(getReviews())

  console.log(memberId)

  const handleTabClick = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setTabIndex(index)
  }

  return (
    <div>
      <Styled.Divider size="bold" />
      <Styled.UserProductsWrapper>
        <Tabs>
          <Styled.SearchOptionsWrapper>
            <Styled.TabsList>
              {tradeReviewActivityList.map((tradeReviewActivity, index) => {
                const isCurrent = tabIndex === index

                return (
                  <Styled.Tab
                    key={tradeReviewActivity[0]}
                    onClick={handleTabClick}>
                    <Styled.StatusButtonLabel>
                      <Styled.Circle isCurrent={isCurrent} />
                      <Styled.StatusButton isCurrent={isCurrent} type="button">
                        <Styled.Text isCurrent={isCurrent}>
                          {tradeReviewActivity[1]}
                        </Styled.Text>
                      </Styled.StatusButton>
                      <Styled.Text color="grayScale50">1</Styled.Text>
                    </Styled.StatusButtonLabel>
                  </Styled.Tab>
                )
              })}
            </Styled.TabsList>
          </Styled.SearchOptionsWrapper>
          <Styled.ProductListPanels>
            <Tabs.Panel>
              <ReviewTabPostList reviews={reviews} />
            </Tabs.Panel>
            <Tabs.Panel>
              <ReviewTabPostList reviews={reviews} />
            </Tabs.Panel>
            <Tabs.Panel>
              <ReviewTabPostList reviews={reviews} />
            </Tabs.Panel>
          </Styled.ProductListPanels>
        </Tabs>
      </Styled.UserProductsWrapper>
    </div>
  )
}
