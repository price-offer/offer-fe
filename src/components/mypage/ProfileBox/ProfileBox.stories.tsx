import type { Meta, Story } from '@storybook/react'
import type { ProfileBoxProps } from '.'
import { ProfileBox } from '.'
import { myProfile } from '@mocks/fixture'

export default {
  argTypes: {},
  component: ProfileBox,
  title: 'MyPage/ProfileBox'
} as Meta<ProfileBoxProps>

const Template: Story<ProfileBoxProps> = args => <ProfileBox {...args} />
export const Primary = Template.bind({})
Primary.args = myProfile
