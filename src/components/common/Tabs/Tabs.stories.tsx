import type { Meta, StoryObj } from '@storybook/react'
import { Tabs as TabsComponent, Tab } from './index'

type Tabs = typeof TabsComponent

const meta: Meta<Tabs> = {
  component: TabsComponent,
  title: 'Common/Tabs'
}

export default meta

export const Default: StoryObj<Tabs> = {
  render: args => (
    <div>
      <TabsComponent {...args}>
        <TabsComponent.List>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
        </TabsComponent.List>
        <TabsComponent.Panels>
          <TabsComponent.Panel>HeadLess Tabs Content 1</TabsComponent.Panel>
          <TabsComponent.Panel>HeadLess Tabs Content 2</TabsComponent.Panel>
          <TabsComponent.Panel>HeadLess Tabs Content 3</TabsComponent.Panel>
        </TabsComponent.Panels>
      </TabsComponent>
    </div>
  )
}
