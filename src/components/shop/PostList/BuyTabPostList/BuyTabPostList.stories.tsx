import { Text } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { BuyTabPostListProps } from './types'
import { BuyTabPostList as BuyTabPostListComponent } from './index'
import { TRADE_ACTIVITY_TYPES } from '@constants'
import type { PostSummary, TradeBuyActivityCodes } from '@types'

type BuyTabArticleList = typeof BuyTabPostListComponent

const meta: Meta<BuyTabArticleList> = {
  component: BuyTabPostListComponent,
  title: 'MyPage/ArticleList/BuyTabArticleList'
}

export default meta

const posts: PostSummary[] = Array.from({ length: 10 }, () => 0).map(
  (_, index) => ({
    id: index,
    title: 'title',
    price: 0,
    location: '서울시',
    thumbnailImageUrl: '',
    liked: true,
    tradeStatus: 'SELLING',
    likeCount: 0,
    createdAt: ''
  })
)

const PrimaryWithHooks = (args: BuyTabPostListProps) => {
  const [activityType, setActivityType] =
    useState<TradeBuyActivityCodes>('offer')
  const posts = args.posts as PostSummary[]

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
      <BuyTabPostListComponent activityType="like" posts={posts} />
    </>
  )
}
export const Primary: StoryObj<BuyTabArticleList> = {
  args: { activityType: 'like', posts },
  render: args => <PrimaryWithHooks {...args} />
}
