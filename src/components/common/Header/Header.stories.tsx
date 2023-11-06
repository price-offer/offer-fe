import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './index'

const meta: Meta = {
  component: Header,
  title: 'Common/Header'
}

export default meta

export const Default: StoryObj = {
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Header />
}
