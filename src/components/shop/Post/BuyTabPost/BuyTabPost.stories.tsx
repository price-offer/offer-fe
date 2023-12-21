import { Text } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import type { BuyTabPostProps } from './types'
import { BuyTabPost as BuyTabPostComponent } from './index'

type BuyTabPost = typeof BuyTabPostComponent

const meta: Meta<BuyTabPostProps> = {
  component: BuyTabPostComponent,
  title: 'MyPage/Article/BuyTabPost'
}

export default meta

export const Primary: StoryObj<BuyTabPost> = {
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
      <BuyTabPostComponent {...args} activityType="offer" isReviewed={false} />
      <BuyTabPostComponent {...args} activityType="offer" />
      <Text styleType="subtitle01B">관심상품</Text>
      <BuyTabPostComponent {...args} />
    </>
  )
}
