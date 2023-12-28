import type { Meta, StoryObj } from '@storybook/react'
import type { ReadReviewModalProps } from './Read/types'
import { ReviewModal } from '.'
import { useModal } from '@hooks'

type ReadReviewModal = typeof ReadReviewModalComponent

const ReadReviewModalComponent = ReviewModal.Read
const meta: Meta<ReadReviewModal> = {
  component: ReadReviewModalComponent,
  title: 'MyPage/ReviewModal/Read'
}

export default meta

const DefaultWithHooks = (args: ReadReviewModalProps) => {
  const { openModal, closeModal, isOpen } = useModal()

  return (
    <>
      <button type="button" onClick={openModal}>
        click
      </button>
      <ReviewModal.Read {...args} isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
export const Default: StoryObj<ReadReviewModal> = {
  args: {
    nickname: '닉네임',
    productName: '상품이름',
    content: '리뷰',
    score: 'smile'
  },
  render: args => <DefaultWithHooks {...args} />
}
