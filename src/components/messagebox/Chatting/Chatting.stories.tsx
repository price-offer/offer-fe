import type { Meta, StoryObj } from '@storybook/react'
import { Chatting as ChattingComponent } from './index'

type Chatting = typeof ChattingComponent

const meta: Meta<Chatting> = {
  component: ChattingComponent,
  title: 'Messagebox/Chatting'
}

export default meta

const MESSAGES_MOCK = [
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
    id: 61,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  },
  {
    id: 62,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  },
  {
    id: 63,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  },
  {
    id: 64,
    content: 'offer 쪽지3',
    receiverId: 2,
    senderId: 1,
    createdDate: '2021-12-15T01:45:41'
  }
]

export const Default: StoryObj<Chatting> = {
  args: {
    userId: 1,
    receiverImageUrl: 'https://picsum.photos/id/237/200/300',
    messages: MESSAGES_MOCK
  },
  render: args => <ChattingComponent {...args} />
}
