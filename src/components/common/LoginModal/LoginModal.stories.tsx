import { action } from '@storybook/addon-actions/*'
import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal as LoginModalComponent } from './index'

type LoginModal = typeof LoginModalComponent

const meta: Meta<LoginModal> = {
  component: LoginModalComponent,
  title: 'Common/LoginModal'
}

export default meta

export const Default: StoryObj<LoginModal> = {
  parameters: {
    isOpen: true,
    onClose: () => {
      action('onChangeTradeStatus')('click')
    }
  },
  render: args => <LoginModalComponent {...args} />
}
