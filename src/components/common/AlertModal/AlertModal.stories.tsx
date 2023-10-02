import type { Meta, Story } from '@storybook/react'
import type { AlertModalProps } from './types'
import { AlertModal } from '.'
import useModal from '@hooks/useModal'

export default {
  argTypes: {},
  component: AlertModal,
  title: 'Common/AlertModal'
} as Meta<AlertModalProps>

const Template: Story<AlertModalProps> = args => {
  const { isOpen, open, close } = useModal()

  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          open()
        }}>
        click
      </button>
      <AlertModal
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
  title: 'Title',
  subTitle: 'SubTitle',
  buttonContents: '확인',
  hasCheckIcon: true
}
