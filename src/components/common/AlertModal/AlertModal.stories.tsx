import type { Meta, StoryObj } from '@storybook/react'
import type { AlertModalProps } from './types'
import { AlertModal as AlertModalComponent } from '.'
import { useModal } from '@hooks'

type AlertModal = typeof AlertModalComponent

const meta: Meta<AlertModal> = {
  component: AlertModalComponent,
  title: 'Common/AlertModal'
}

export default meta

const DefaultWithHooks = (args: AlertModalProps) => {
  const { openModal, closeModal, isOpen } = useModal()

  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          openModal()
        }}>
        click
      </button>
      <AlertModalComponent
        {...args}
        isOpen={isOpen}
        onClose={(): void => {
          closeModal()
        }}
      />
    </>
  )
}

export const Default: StoryObj<AlertModal> = {
  args: {
    title: 'Title',
    subTitle: 'SubTitle',
    buttonContents: '확인',
    hasCheckIcon: true
  },
  render: args => <DefaultWithHooks {...args} />
}
