import type { Meta, Story } from '@storybook/react'
import { Tab, Tabs } from './index'
import type { TabsProps } from './index'

export default {
  argTypes: {
    defaultTabIndex: {
      control: 'number'
    }
  },
  component: Tabs,
  title: 'Components/Tabs'
} as Meta<TabsProps>

const Template: Story<TabsProps> = args => (
  <div>
    <Tabs {...args}>
      <Tabs.List>
        <Tab>1</Tab>
        <Tab>2</Tab>
        <Tab>3</Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>HeadLess Tabs Content 1</Tabs.Panel>
        <Tabs.Panel>HeadLess Tabs Content 2</Tabs.Panel>
        <Tabs.Panel>HeadLess Tabs Content 3</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </div>
)
export const Default = Template.bind({})
