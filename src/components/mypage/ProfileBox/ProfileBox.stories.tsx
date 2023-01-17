import type { Meta, Story } from '@storybook/react'
import { ProfileBox } from './index'
import type { ProfileBoxProps } from './index'

export default {
  argTypes: {},
  component: ProfileBox,
  title: 'Components/MyPage/ProfileBox'
} as Meta<ProfileBoxProps>

const Template: Story<ProfileBoxProps> = args => <ProfileBox {...args} />
export const Primary = Template.bind({})
Primary.args = {
  CountOfCompletedProducts: 0,
  CountOfFavoriteProducts: 0,
  CountOfOnSaleProducts: 0,
  CountOfReview: 0,
  level: '1',
  nickName: '닉네임',
  profileImg: ''
}
