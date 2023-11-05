import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { DialogProps } from './types'
import { Dialog as DialogComponent } from './index'

type Dialog = typeof DialogComponent

const meta: Meta<Dialog> = {
  component: DialogComponent,
  title: 'Common/Dialog'
}

export default meta

const DefaultWithHooks = (args: DialogProps) => {
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
      {isOpen && (
        <DialogComponent
          {...args}
          onClose={() => {
            setIsOpen(false)
          }}
        />
      )}
    </>
  )
}

export const Default: StoryObj<Dialog> = {
  args: {
    dialogPositionStyle: {
      top: '50px'
    }
  },
  render: args => <DefaultWithHooks {...args}>dialog</DefaultWithHooks>
}
