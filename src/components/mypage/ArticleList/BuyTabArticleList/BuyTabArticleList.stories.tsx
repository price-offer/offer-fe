import { Text } from '@offer-ui/react'
import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import type { BuyTabArticleListProps } from './types'
import { BuyTabArticleList } from './index'
import { TRADE_ACTIVITY_TYPE } from '@constants'
import type { TradeBuyActivityType } from '@constants/app'
import type { ArticlesElement } from '@types'

export default {
  component: BuyTabArticleList,
  title: 'MyPage/ArticleList/BuyTabArticleList'
} as Meta<BuyTabArticleListProps>

const articles: ArticlesElement[] = Array.from({ length: 10 }, () => 0).map(
  (_, index) => ({
    id: index,
    mainImageUrl: '',
    title: 'string',
    price: 36500,
    tradeArea: '서울시 강남구',
    tradeStatus: {
      code: 4,
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

const Template: Story<BuyTabArticleListProps> = args => {
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
      <BuyTabArticleList {...args} activityType={activityType} />
    </>
  )
}
export const Primary = Template.bind({})
Primary.args = {
  activityType: 'offer',
  articles
}
