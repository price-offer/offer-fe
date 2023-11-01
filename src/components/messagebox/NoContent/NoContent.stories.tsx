import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { NoContent as NoContentComponent } from './index'

type NoContent = typeof NoContentComponent

const meta: Meta<NoContent> = {
  component: NoContentComponent,
  title: 'Messagebox/NoContent'
}

export default meta

const NoContentWithHooks: StoryObj<NoContent>['render'] = args => {
  const [hasContent, setHasContent] = useState(false)

  const handleClickButton = () => {
    setHasContent(prev => !prev)
  }

  return (
    <>
      <button type="button" onClick={handleClickButton}>
        {hasContent ? 'no content' : 'has content'}
      </button>
      <NoContentComponent hasContent={hasContent} {...args}>
        <div>has content</div>
      </NoContentComponent>
    </>
  )
}
export const Default: StoryObj<NoContent> = {
  args: {
    image: {
      url: '/images/message.svg',
      width: '110px',
      height: '90px'
    },
    message: '쪽지 내역이 없어요.\n구매하고 싶은 상품에 가격을 제안해보세요.'
  },
  render: args => <NoContentWithHooks {...args} />
}
