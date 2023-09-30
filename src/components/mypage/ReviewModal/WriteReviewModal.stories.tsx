import type { Meta, Story } from '@storybook/react'
import type { WriteReviewModalProps } from './types'
import { WriteReviewModal } from '.'
import useModals from '@hooks/useModals'

export default {
  component: WriteReviewModal,
  title: 'MyPage/WriteReviewModal'
} as Meta<WriteReviewModalProps>

const Template: Story<WriteReviewModalProps> = args => {
  const { modals, open, close } = useModals(['WriteReviewModal'])
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          open('WriteReviewModal')
        }}>
        click
      </button>
      <WriteReviewModal
        {...args}
        isOpen={modals.ReadReviewModal?.isOpen}
        onClose={(): void => {
          close('WriteReviewModal')
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
