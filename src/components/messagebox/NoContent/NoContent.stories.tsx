import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import type { NoContentProps } from './types'
import { NoContent } from './index'

export default {
  component: NoContent,
  title: 'Messagebox/NoContent'
} as Meta<NoContentProps>

const Template: Story<NoContentProps> = args => {
  const [show, setShow] = useState(false)

  const handleClickButton = () => {
    setShow(prev => !prev)
  }

  return (
    <>
      <button type="button" onClick={handleClickButton}>
        {show ? 'no show' : 'show'}
      </button>
      <NoContent {...args}>
        <div>has content</div>
      </NoContent>
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  image: {
    url: '/images/message.svg',
    width: '110px',
    height: '90px'
  },
  message: '쪽지 내역이 없어요.\n구매하고 싶은 상품에 가격을 제안해보세요.'
}
