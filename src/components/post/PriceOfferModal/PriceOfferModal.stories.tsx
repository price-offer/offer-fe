import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { PriceOfferModalProps } from './types'
import { PriceOfferModal as PriceOfferModalComponent } from './index'

type PriceOfferModal = typeof PriceOfferModalComponent

const meta: Meta<PriceOfferModal> = {
  component: PriceOfferModalComponent,
  title: 'Post/PriceOfferModal'
}

export default meta

const DefaultWithHooks = (args: PriceOfferModalProps) => {
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
      <PriceOfferModalComponent
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}

export const Default: StoryObj<PriceOfferModal> = {
  args: { isOpen: true },
  render: args => <DefaultWithHooks {...args} />
}
