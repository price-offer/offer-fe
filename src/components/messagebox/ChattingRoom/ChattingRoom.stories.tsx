import type { Meta, StoryObj } from '@storybook/react'
import { ChattingRoom as ChattingRoomComponent } from './index'

type ChattingRoom = typeof ChattingRoomComponent

const meta: Meta<ChattingRoom> = {
  component: ChattingRoomComponent,
  title: 'Messagebox/ChattingRoom'
}

export default meta

export const Default: StoryObj<ChattingRoom> = {
  args: { roomId: 1 },
  render: args => <ChattingRoomComponent {...args} />
}
