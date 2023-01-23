import { Text } from '@offer-ui/react'
import type { Meta, Story } from '@storybook/react'
import type { BuyTypeArticleProps } from './index'
import { BuyTypeArticle } from './index'

export default {
  argTypes: {},
  component: BuyTypeArticle,
  title: 'Components/MyPage/Article/BuyTypeArticle'
} as Meta<BuyTypeArticleProps>

const Template: Story<BuyTypeArticleProps> = args => {
  return (
    <>
      <Text styleType="subtitle01B">가격제안</Text>
      <BuyTypeArticle {...args} activityType="offer" isReviewed={false} />
      <BuyTypeArticle {...args} activityType="offer" />
      <Text styleType="subtitle01B">관심상품</Text>
      <BuyTypeArticle {...args} />
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
