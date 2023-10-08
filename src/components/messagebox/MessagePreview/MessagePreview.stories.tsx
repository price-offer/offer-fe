import type { Meta, Story } from '@storybook/react'
import type { MessagePreviewProps } from './types'
import { MessagePreview } from './index'

export default {
  component: MessagePreview,
  title: 'Messagebox/MessagePreview'
} as Meta<MessagePreviewProps>

const Template: Story<MessagePreviewProps> = args => (
  <MessagePreview {...args} />
)
export const Default = Template.bind({})
Default.args = {
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
}
