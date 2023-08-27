import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import type { ReviewModalProps } from './types'
import { ReviewModal } from '.'

export default {
  argTypes: {},
  component: ReviewModal,
  title: 'Components/MyPage/ProfileBox'
} as Meta<ReviewModalProps>

const Template: Story<ReviewModalProps> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          setIsOpen(true)
        }}>
        click
      </button>
      <ReviewModal
        {...args}
        isOpen={isOpen}
        onClose={(): void => {
          setIsOpen(false)
        }}
      />
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  nickName: '닉네임',
  productName: '상품이름'
}
