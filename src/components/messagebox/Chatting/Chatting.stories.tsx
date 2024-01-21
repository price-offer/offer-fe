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
    content: 'offer 쪽지1',
    member: {
      id: 1,
      nickname: '주영',
      imageUrl: ''
    },
    sendTime: '2021-11-11T00:12:43'
  },
  {
    content: 'offer 쪽지2',
    member: {
      id: 2,
      nickname: '수림',
      imageUrl: ''
    },
    sendTime: '2021-12-15T00:13:49'
  },
  {
    content:
      ' offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3 offer 쪽지3',
    member: {
      id: 1,
      nickname: '주영',
      imageUrl: ''
    },
    sendTime: '2021-12-15T00:25:31'
  },
  {
    content: 'offer 쪽지3',
    member: {
      id: 2,
      nickname: '수림',
      imageUrl: ''
    },
    sendTime: '2021-12-15T01:45:41'
  },
  {
    content: 'offer 쪽지3',
    member: {
      id: 1,
      nickname: '주영',
      imageUrl: ''
    },
    sendTime: '2021-12-15T01:45:41'
  },
  {
    content: 'offer 쪽지3',
    member: {
      id: 1,
      nickname: '주영',
      imageUrl: ''
    },
    sendTime: '2021-12-15T01:45:41'
  },
  {
    content: 'offer 쪽지3',
    member: {
      id: 1,
      nickname: '주영',
      imageUrl: ''
    },
    sendTime: '2021-12-15T01:45:41'
  }
]

export const Default: StoryObj<Chatting> = {
  args: {
    userId: 1,
    messages: MESSAGES_MOCK
  },
  render: args => <ChattingComponent {...args} />
}
