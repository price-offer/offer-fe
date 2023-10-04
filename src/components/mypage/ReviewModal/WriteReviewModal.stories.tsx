import type { Meta, Story } from '@storybook/react'

import type { WriteReviewModalProps } from './Write/types'
import ReviewModal from '.'
import useModal from '@hooks/useModal'

export default {
  component: ReviewModal.Write,
  title: 'MyPage/WriteReviewModal'
} as Meta<WriteReviewModalProps>

const Template: Story<WriteReviewModalProps> = args => {
  const { openModal, closeModal, isOpen } = useModal()
  return (
    <>
      <button type="button" onClick={openModal}>
        click
      </button>
      <ReviewModal.Write {...args} isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  nickname: '닉네임',
  productName: '상품이름'
}
