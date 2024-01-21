import type { Meta, StoryObj } from '@storybook/react'
import { ReviewTabPost as ReviewTabPostComponent } from './index'

type ReviewTabPost = typeof ReviewTabPostComponent

const meta: Meta<ReviewTabPost> = {
  component: ReviewTabPostComponent,
  title: 'MyPage/Article/ReviewTabPost'
}

export default meta

export const Primary: StoryObj<ReviewTabPost> = {
  args: {
    id: 6,
    reviewTargetMember: {
      id: 1,
      profileImageUrl: '',
      nickname: '닉네임',
      offerLevel: 1
    },
    score: 0,
    post: {
      id: 0,
      title: ''
    },
    content: '',
    createdDate: ''
  },
  render: args => <ReviewTabPostComponent {...args} />
}
