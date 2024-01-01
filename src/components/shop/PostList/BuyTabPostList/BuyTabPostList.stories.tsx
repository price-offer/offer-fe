import { Text } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { BuyTabPostList as BuyTabPostListComponent } from './index'
import { TRADE_ACTIVITY_TYPES } from '@constants'
import type { TradeBuyActivityCodes } from '@types'

type BuyTabArticleList = typeof BuyTabPostListComponent

const meta: Meta<BuyTabArticleList> = {
  component: BuyTabPostListComponent,
  title: 'MyPage/ArticleList/BuyTabArticleList'
}

export default meta

const PrimaryWithHooks = () => {
  const [activityType, setActivityType] =
    useState<TradeBuyActivityCodes>('offer')

  return (
    <>
      <button type="button" onClick={(): void => setActivityType('offer')}>
        가격제안
      </button>
      <button type="button" onClick={(): void => setActivityType('like')}>
        관심상품
      </button>
      <div>
        <Text styleType="subtitle01B">
          {TRADE_ACTIVITY_TYPES.buy[activityType]}
        </Text>
      </div>
      <BuyTabPostListComponent activityType="like" posts={[]} />
    </>
  )
}
export const Primary: StoryObj<BuyTabArticleList> = {
  args: { activityType: 'like', posts: [] },
  render: () => <PrimaryWithHooks />
}
