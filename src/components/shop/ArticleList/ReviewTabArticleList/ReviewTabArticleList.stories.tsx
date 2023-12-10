import type { Meta, StoryObj } from '@storybook/react'
import { ReviewTabArticleList as ReviewTabArticleListComponent } from './index'

type ReviewTabArticleList = typeof ReviewTabArticleListComponent

const meta: Meta<ReviewTabArticleList> = {
  component: ReviewTabArticleListComponent,
  title: 'MyPage/ArticleList/ReviewTabArticleList'
}

export default meta

const REVIEWS_MOCK = [
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

export const Primary: StoryObj<ReviewTabArticleList> = {
  args: {
    reviews: REVIEWS_MOCK
  },
  render: args => <ReviewTabArticleListComponent {...args} />
}
