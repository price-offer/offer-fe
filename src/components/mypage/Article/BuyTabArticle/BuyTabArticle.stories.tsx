import { Text } from '@offer-ui/react'
import type { Meta, Story } from '@storybook/react'
import type { BuyTabArticleProps } from './index'
import { BuyTabArticle } from './index'

export default {
  argTypes: {},
  component: BuyTabArticle,
  title: 'Components/MyPage/Article/BuyTabArticle'
} as Meta<BuyTabArticleProps>

const Template: Story<BuyTabArticleProps> = args => {
  return (
    <>
      <Text styleType="subtitle01B">가격제안</Text>
      <BuyTabArticle {...args} activityType="offer" isReviewed={false} />
      <BuyTabArticle {...args} activityType="offer" />
      <Text styleType="subtitle01B">관심상품</Text>
      <BuyTabArticle {...args} />
    </>
  )
}
export const Primary = Template.bind({})
Primary.args = {
  activityType: 'like',
  sellerNickName: '판매자 닉네임닉네임',
  id: 4,
  mainImageUrl: '',
  title: '상품 이름 상품 이름',
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
  isReviewed: false
}
