import type { Meta, StoryObj } from '@storybook/react'
import { MessagePreview as MessagePreviewComponent } from './index'

type MessagePreview = typeof MessagePreviewComponent

const meta: Meta<MessagePreview> = {
  component: MessagePreviewComponent,
  title: 'Messagebox/MessagePreview'
}

export default meta

export const Default: StoryObj<MessagePreview> = {
  args: {
    partner: {
      id: 1,
      nickname: 'offerer',
      imageUrl: ''
    },
    post: {
      id: 1,
      price: 10000,
      thumbnailImageUrl: ''
    },
    offerPrice: 123,
    lastContent:
      '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
    lastSendTime: '2시간 전',
    notReadCnt: 0
  },
  render: args => <MessagePreviewComponent {...args} />
}
