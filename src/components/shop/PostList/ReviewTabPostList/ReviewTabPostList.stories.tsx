import type { Meta, StoryObj } from '@storybook/react'
import { ReviewTabPostList as ReviewTabPostListComponent } from './index'

type ReviewTabPostList = typeof ReviewTabPostListComponent

const meta: Meta<ReviewTabPostList> = {
  component: ReviewTabPostListComponent,
  title: 'MyPage/ArticleList/ReviewTabPostList'
}

export default meta

const REVIEWS_MOCK = [
  {
    id: 6,
    reviewer: {
      id: 1,
      profileImageUrl: '',
      nickname: '닉네임'
    },
    score: 0,
    post: {
      id: 0,
      title: ''
    },
    content: '',
    createdDate: ''
  },
  {
    id: 7,
    reviewer: {
      id: 1,
      profileImageUrl: '',
      nickname: '닉네임'
    },
    score: 1,
    post: {
      id: 0,
      title: ''
    },
    content: '',
    createdDate: ''
  },
  {
    id: 6,
    reviewer: {
      id: 1,
      profileImageUrl: '',
      nickname: '닉네임'
    },
    score: 2,
    post: {
      id: 0,
      title: ''
    },
    content: '',
    createdDate: ''
  }
]

export const Primary: StoryObj<ReviewTabPostList> = {
  args: {
    reviews: REVIEWS_MOCK
  },
  render: args => <ReviewTabPostListComponent {...args} />
}
