import type { Meta, Story } from '@storybook/react'
import type { ReviewModalProps } from './types'
import { ReviewModal } from '.'
import useModals from '@hooks/useModals'

export default {
  component: ReviewModal,
  title: 'MyPage/ReviewModal'
} as Meta<ReviewModalProps>

const Template: Story<ReviewModalProps> = args => {
  const { modals, open, close } = useModals(['ReviewModal'])
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          open('ReviewModal')
        }}>
        click
      </button>
      <ReviewModal
        {...args}
        isOpen={modals.ReviewModal?.isOpen}
        onClose={(): void => {
          close('ReviewModal')
        }}
      />
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  nickname: '닉네임',
  productName: '상품이름',
  isReadMode: false
}
