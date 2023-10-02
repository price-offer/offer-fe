import type { Meta, Story } from '@storybook/react'
import type { WriteReviewModalProps } from './types'

import ReviewModal from '.'
import useModal from '@hooks/useModal'

export default {
  component: ReviewModal.Write,
  title: 'MyPage/WriteReviewModal'
} as Meta<WriteReviewModalProps>

const Template: Story<WriteReviewModalProps> = args => {
  const { open, close, isOpen } = useModal()
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          open()
        }}>
        click
      </button>
      <ReviewModal.Write
        {...args}
        isOpen={isOpen}
        onClose={(): void => {
          close()
        }}
      />
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  nickname: '닉네임',
  productName: '상품이름'
}
