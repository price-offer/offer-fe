import type { Meta, Story } from '@storybook/react'
import type { ReviewTabArticleListProps } from './types'
import { ReviewTabArticleList } from './index'

export default {
  argTypes: {},
  component: ReviewTabArticleList,
  title: 'MyPage/ArticleList/ReviewTabArticleList'
} as Meta<ReviewTabArticleListProps>

const Template: Story<ReviewTabArticleListProps> = args => (
  <ReviewTabArticleList {...args} />
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
