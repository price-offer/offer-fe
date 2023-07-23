import styled from '@emotion/styled'

const Tab = styled.div`
  display: inline-block;
`

const Panel = styled.div<{ isCurrentTab: boolean }>`
  ${({ isCurrentTab }): string => `display:${isCurrentTab ? 'unset' : 'none'};`}
`

export const Styled = {
  Tab,
  Panel
}
