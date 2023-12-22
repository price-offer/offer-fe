import { Text } from '@offer-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import type { BuyTabPostProps } from './types'
import { BuyTabPost as BuyTabPostComponent } from './index'
import type { OfferSummary } from '@types'

type BuyTabPost = typeof BuyTabPostComponent

const meta: Meta<BuyTabPostProps> = {
  component: BuyTabPostComponent,
  title: 'MyPage/Article/BuyTabPost'
}

export default meta

export const Primary: StoryObj<BuyTabPost> = {
  args: {
    id: 0,
    title: 'title',
    price: 0,
    location: '서울시',
    thumbnailImageUrl: '',
    liked: true,
    tradeStatus: 'SELLING',
    likeCount: 0,
    createdAt: ''
  },
  render: args => {
    const post = args as OfferSummary

    return (
      <>
        <Text styleType="subtitle01B">가격제안</Text>
        <BuyTabPostComponent {...post} activityType="offer" />
        {/* TODO: 타입 이슈 디버깅 후 다시 확인 */}
        {/* <Text styleType="subtitle01B">관심상품</Text>
        <BuyTabPostComponent {...args} /> */}
      </>
    )
  }
}
