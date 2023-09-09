import { Button } from '@offer-ui/react'
import type { Meta, Story } from '@storybook/react'
import type { CommonModalProps } from './types'
import { CommonModal } from './index'

export default {
  component: CommonModal,
  title: 'Common/CommonModal'
} as Meta<CommonModalProps>

const Template: Story<CommonModalProps> = args => (
  <CommonModal {...args} isOpen />
)

export const Default = Template.bind({})
Default.args = {
  description: '지금 바로 Offer에서 첫 거래를 시작해볼까요?',
  hasLogo: true,
  title: '부드러운 냉장고님 반가워요!',
  buttons: [
    <Button key="first">첫 판매하기</Button>,
    <Button key="ok" styleType="ghost">
      괜찮아요
    </Button>
  ]
}
