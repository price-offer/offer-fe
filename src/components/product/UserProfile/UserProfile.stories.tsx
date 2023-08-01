import type { Meta, Story } from '@storybook/react'
import type { UserProfileProps } from './types'
import { UserProfile } from './index'

export default {
  title: 'ProductDetail/UserProfile',
  component: UserProfile
} as Meta<UserProfileProps>

const Template: Story<UserProfileProps> = args => <UserProfile {...args} />

export const Default = Template.bind({})
Default.args = {
  image: 'https://picsum.photos/200/300',
  nickName: '신효정',
  location: '동작구 사당동',
  level: 1,
  transactionType: 'all',
  date: '1시간 전',
  type: 'offer'
}
