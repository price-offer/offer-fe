import type { Meta, Story } from '@storybook/react'
import { ReviewTypeArticleList } from './index'
import type { ReviewTypeArticleListProps } from './index'

export default {
  argTypes: {},
  component: ReviewTypeArticleList,
  title: 'Components/MyPage/ArticleList/ReviewTypeArticleList'
} as Meta<ReviewTypeArticleListProps>

const Template: Story<ReviewTypeArticleListProps> = args => (
  <ReviewTypeArticleList {...args} />
)
export const Primary = Template.bind({})
Primary.args = {
  reviews: [
    {
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
      score: 0,
      content: '진짜 왕 별로',
      isWritingAvailableFromCurrentMember: true,
      createdDate: '2시간 전'
    },
    {
      id: 7,
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
      score: 1,
      content: '그럭 저럭임',
      isWritingAvailableFromCurrentMember: true,
      createdDate: '2시간 전'
    },
    {
      id: 8,
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
      content: '단골 됐어요',
      isWritingAvailableFromCurrentMember: true,
      createdDate: '2시간 전'
    }
  ]
}
