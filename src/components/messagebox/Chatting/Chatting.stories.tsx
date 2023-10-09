import type { Meta, Story } from '@storybook/react'
import type { ChattingProps } from './types'
import { Chatting } from './index'

export default {
  component: Chatting,
  title: 'Messagebox/Chatting'
} as Meta<ChattingProps>

const Template: Story<ChattingProps> = args => <Chatting {...args} />
export const Default = Template.bind({})
Default.args = {
  userId: 1,
  messages: [
    {
      id: 10,
      content: 'offer 쪽지1',
      receiverId: 1,
      senderId: 2,
      createdDate: '2021-11-11T00:12:43'
    },
    {
      id: 8,
      content: 'offer 쪽지2',
      receiverId: 1,
      senderId: 2,
      createdDate: '2021-12-15T00:13:49'
    },
    {
      id: 6,
      content:
        ' offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3',
      receiverId: 1,
      senderId: 2,
      createdDate: '2021-12-15T00:25:31'
    },
    {
      id: 63,
      content: 'offer 쪽지3',
      receiverId: 2,
      senderId: 1,
      createdDate: '2021-12-15T01:45:41'
    }
  ]
}
