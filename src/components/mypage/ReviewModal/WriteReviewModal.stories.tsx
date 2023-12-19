import type { Meta, StoryObj } from '@storybook/react'

import type { WriteReviewModalProps } from './Write/types'
import { ReviewModal } from '.'
import { useModal } from '@hooks'

type WriteReviewModal = typeof WriteReviewModalComponent

const WriteReviewModalComponent = ReviewModal.Write
const meta: Meta<WriteReviewModal> = {
  component: ReviewModal.Write,
  title: 'MyPage/ReviewModal/Write'
}

export default meta

const DefaultWithHooks = (args: WriteReviewModalProps) => {
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
export const Default: StoryObj<WriteReviewModal> = {
  args: { nickname: '닉네임', productName: '상품이름' },
  render: args => <DefaultWithHooks {...args} />
}
