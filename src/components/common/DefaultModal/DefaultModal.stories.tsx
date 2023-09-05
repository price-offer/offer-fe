import { Button } from '@offer-ui/react'
import type { Meta, Story } from '@storybook/react'
import type { DefaultModalProps } from './types'
import { DefaultModal } from './index'

export default {
  component: DefaultModal,
  title: 'Common/DefaultModal'
} as Meta<DefaultModalProps>

const Template: Story<DefaultModalProps> = args => (
  <DefaultModal {...args} isOpen />
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
