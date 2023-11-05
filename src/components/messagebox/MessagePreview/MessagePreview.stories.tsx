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
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  render: args => <MessagePreviewComponent {...args} />
}
