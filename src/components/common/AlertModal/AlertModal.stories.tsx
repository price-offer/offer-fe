import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import type { AlertModalProps } from './types'
import { AlertModal } from '.'

export default {
  argTypes: {},
  component: AlertModal,
  title: 'Common/AlertModal'
} as Meta<AlertModalProps>

const Template: Story<AlertModalProps> = args => {
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
      <AlertModal
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
Default.args = {
  title: 'Title',
  subTitle: 'SubTitle',
  buttonContents: '확인',
  isCheckShape: true
}
