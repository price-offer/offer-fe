import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { MessageBoxPlaceholder as MessageBoxPlaceholderComponent } from './index'

type MessageBoxPlaceholder = typeof MessageBoxPlaceholderComponent

const meta: Meta<MessageBoxPlaceholder> = {
  component: MessageBoxPlaceholderComponent,
  title: 'Messagebox/MessageBoxPlaceholder'
}

export default meta

const MessageBoxPlaceholderWithHooks: StoryObj<MessageBoxPlaceholder>['render'] =
  args => {
    const [hasContent, setHasContent] = useState(false)

    const handleClickButton = () => {
      setHasContent(prev => !prev)
    }

    return (
      <>
        <button type="button" onClick={handleClickButton}>
          {hasContent ? 'no content' : 'has content'}
        </button>
        {hasContent ? (
          <MessageBoxPlaceholderComponent {...args} />
        ) : (
          <div>has content</div>
        )}
      </>
    )
  }
export const Default: StoryObj<MessageBoxPlaceholder> = {
  args: {
    image: {
      url: '/images/message.svg',
      width: '110px',
      height: '90px'
    },
    message: '쪽지 내역이 없어요.\n구매하고 싶은 상품에 가격을 제안해보세요.'
  },
  render: args => <MessageBoxPlaceholderWithHooks {...args} />
}
