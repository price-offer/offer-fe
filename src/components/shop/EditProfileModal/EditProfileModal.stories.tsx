import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { EditProfileModalProps } from './types'
import { EditProfileModal as EditProfileModalComponent } from './index'

type EditProfileModal = typeof EditProfileModalComponent

const meta: Meta<EditProfileModal> = {
  component: EditProfileModalComponent,
  title: 'Mypage/EditProfileModal'
}

export default meta

const DefaultWithHooks = (args: EditProfileModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true)
        }}>
        open
      </button>
      <EditProfileModalComponent
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
        {...args}
      />
    </>
  )
}

export const Default: StoryObj<EditProfileModal> = {
  render: args => <DefaultWithHooks {...args} />
}
