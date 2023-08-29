import type { Meta, Story } from '@storybook/react'
import { EditProfileModal } from './index'

export default {
  component: EditProfileModal,
  title: 'Components/Mypage/EditProfileModal'
} as Meta

const Template: Story = args => <EditProfileModal {...args} />
export const Default = Template.bind({})
