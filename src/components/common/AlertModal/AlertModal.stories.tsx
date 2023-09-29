import type { Meta, Story } from '@storybook/react'
import type { AlertModalProps } from './types'
import { AlertModal } from '.'
import useModals from '@hooks/useModals'

export default {
  argTypes: {},
  component: AlertModal,
  title: 'Common/AlertModal'
} as Meta<AlertModalProps>

const Template: Story<AlertModalProps> = args => {
  const { modals, open, close } = useModals(['AlertModal'])

  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          open('AlertModal')
        }}>
        click
      </button>
      <AlertModal
        {...args}
        isOpen={modals.AlertModal?.isOpen}
        onClose={(): void => {
          close('AlertModal')
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
