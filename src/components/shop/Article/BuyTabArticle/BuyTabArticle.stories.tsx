import { Text } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import type { BuyTabArticleProps } from './types'
import { BuyTabArticle as BuyTabArticleComponent } from './index'

type BuyTabArticle = typeof BuyTabArticleComponent

const meta: Meta<BuyTabArticleProps> = {
  component: BuyTabArticleComponent,
  title: 'MyPage/Article/BuyTabArticle'
}

export default meta

export const Primary: StoryObj<BuyTabArticle> = {
  args: {
    activityType: 'like',
    sellerNickName: '판매자 닉네임닉네임',
    id: 4,
    mainImageUrl: '',
    title: '상품 이름 상품 이름',
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
    isReviewed: false
  },
  render: args => (
    <>
      <Text styleType="subtitle01B">가격제안</Text>
      <BuyTabArticleComponent
        {...args}
        activityType="offer"
        isReviewed={false}
      />
      <BuyTabArticleComponent {...args} activityType="offer" />
      <Text styleType="subtitle01B">관심상품</Text>
      <BuyTabArticleComponent {...args} />
    </>
  )
}
