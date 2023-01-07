import { render, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { Tab } from './Tab'
import { Tabs } from './Tabs'
import type { TabsProps } from './Tabs'
import userEvent from '@testing-library/user-event'

const DummyTabs = ({
  defaultTabIndex
}: Pick<TabsProps, 'defaultTabIndex'>): ReactElement => {
  return (
    <Tabs defaultTabIndex={defaultTabIndex}>
      <Tabs.List>
        <Tab>1</Tab>
        <Tab>2</Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>1번 컨텐츠</Tabs.Panel>
        <Tabs.Panel>2번 컨텐츠</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  )
}

describe('components/Tabs', () => {
  it('defaultTabIndex가 없는 경우, 인덱스 0번째 순서의 컨텐츠 패널만 화면에 보여져야 합니다.', () => {
    // Given, When
    render(<DummyTabs />)
    const TabPanels = screen.queryAllByRole('tabpanel')
    const VisibleTabPanel = TabPanels[0]

    // Then
    expect(TabPanels.length).toBe(1)
    expect(VisibleTabPanel).toHaveTextContent('1번 컨텐츠')
  })

  it('defaultTabIndex가 1인 경우, 인덱스 1번째 순서의 컨텐츠 패널만 화면에 보여져야 합니다.', () => {
    // Given, When
    render(<DummyTabs defaultTabIndex={1} />)
    const TabPanels = screen.queryAllByRole('tabpanel')
    const VisibleTabPanel = TabPanels[0]

    // Then
    expect(TabPanels.length).toBe(1)
    expect(VisibleTabPanel).toHaveTextContent('2번 컨텐츠')
  })

  it('인덱스 0번째 순서의 탭을 클릭한 경우, 인덱스 0번째 순서의 컨텐츠 패널만 보여져야 합니다.', async () => {
    // Given
    render(<DummyTabs defaultTabIndex={1} />)
    const user = userEvent.setup()
    const FirstTab = screen.getByRole('tab', {
      name: '1'
    })

    // When
    await user.click(FirstTab)
    const TabPanels = screen.queryAllByRole('tabpanel')
    const VisibleTabPanel = TabPanels[0]

    // Then
    expect(TabPanels.length).toBe(1)
    expect(VisibleTabPanel).toHaveTextContent('1번 컨텐츠')
  })
})
