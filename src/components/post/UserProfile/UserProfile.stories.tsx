import type { Meta, StoryObj } from '@storybook/react'
import { UserProfile as UserProfileComponent } from './index'

type UserProfile = typeof UserProfileComponent

const meta: Meta<UserProfile> = {
  title: 'Post/UserProfile',
  component: UserProfileComponent
}

export default meta

export const Default: StoryObj<UserProfile> = {
  args: {
    image: 'https://picsum.photos/200/300',
    nickName: '신효정',
    location: '동작구 사당동',
    level: 1,
    transactionType: 'all',
    date: '1시간 전',
    type: 'offer'
  },
  render: args => <UserProfileComponent {...args} />
}
