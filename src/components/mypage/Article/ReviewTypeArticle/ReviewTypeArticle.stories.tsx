import type { Meta, Story } from '@storybook/react'
import { ReviewTypeArticle } from './index'
import type { ReviewTypeArticleProps } from './index'

export default {
  argTypes: {},
  component: ReviewTypeArticle,
  title: 'Components/MyPage/Article/ReviewTypeArticle'
} as Meta<ReviewTypeArticleProps>

const Template: Story<ReviewTypeArticleProps> = args => (
  <ReviewTypeArticle {...args} />
)
export const Primary = Template.bind({})
Primary.args = {
  id: 6,
  reviewer: {
    id: 1,
    profileImageUrl: '',
    nickname: '닉네임',
    offerLevel: 1
  },
  article: {
    id: 1,
    title: '거래한 상품의 제목'
  },
  score: 2,
  content: '쿨거래 조아요',
  isWritingAvailableFromCurrentMember: true,
  createdDate: '2시간 전'
}
