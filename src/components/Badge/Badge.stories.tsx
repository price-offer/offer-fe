import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Badge } from './index'

export default {
  argTypes: {},
  component: Badge,
  title: 'Component/Badge'
} as ComponentMeta<typeof Badge>

export const Primary: ComponentStory<typeof Badge> = () => <Badge></Badge>
