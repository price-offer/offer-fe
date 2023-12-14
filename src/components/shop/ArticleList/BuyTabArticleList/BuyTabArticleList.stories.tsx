import { Text } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { BuyTabArticleListProps } from './types'
import { BuyTabArticleList as BuyTabArticleListComponent } from './index'
import type { TradeBuyActivityType } from '@constants/app'
import { TRADE_ACTIVITY_TYPE } from '@constants'
import type { ArticlesElement } from '@types'

type BuyTabArticleList = typeof BuyTabArticleListComponent

const meta: Meta<BuyTabArticleList> = {
  component: BuyTabArticleListComponent,
  title: 'MyPage/ArticleList/BuyTabArticleList'
}

export default meta

const articles: ArticlesElement[] = Array.from({ length: 10 }, () => 0).map(
  (_, index) => ({
    id: index,
    mainImageUrl: '',
    title: 'string',
    price: 36500,
    tradeArea: '서울시 강남구',
    tradeStatus: {
      code: 'SELLING',
      name: '판매중'
    },
    createdDate: '2021-12-10T14:25:30',
    modifiedDate: '2021-12-10T14:25:30',
    isLiked: false,
    likeCount: 0,
    isReviewed: !!(index % 2 !== 0),
    sellerNickName: 'hypeboy'
  })
)

const PrimaryWithHooks = (args: BuyTabArticleListProps) => {
  const [activityType, setActivityType] =
    useState<TradeBuyActivityType>('offer')

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
          {TRADE_ACTIVITY_TYPE.buy[activityType]}
        </Text>
      </div>
      <BuyTabArticleListComponent {...args} activityType={activityType} />
    </>
  )
}
export const Primary: StoryObj<BuyTabArticleList> = {
  args: { activityType: 'offer', articles },
  render: args => <PrimaryWithHooks {...args} />
}
