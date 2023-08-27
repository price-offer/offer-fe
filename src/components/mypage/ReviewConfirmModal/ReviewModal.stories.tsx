import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import type { ReviewConfirmModalProps } from './types'
import { ReviewConfirmModal } from '.'

export default {
  argTypes: {},
  component: ReviewConfirmModal,
  title: 'Components/MyPage/ProfileBox'
} as Meta<ReviewConfirmModalProps>

const Template: Story<ReviewConfirmModalProps> = args => {
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
      <ReviewConfirmModal
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
Default.args = {}
