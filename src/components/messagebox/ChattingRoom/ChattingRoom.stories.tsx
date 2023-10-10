import type { Meta, Story } from '@storybook/react'
import type { ChattingRoomProps } from './types'
import { ChattingRoom } from './index'

export default {
  component: ChattingRoom,
  title: 'Messagebox/ChattingRoom'
} as Meta<ChattingRoomProps>

const Template: Story<ChattingRoomProps> = args => <ChattingRoom {...args} />
export const Default = Template.bind({})
Default.args = {
  id: 1
}
