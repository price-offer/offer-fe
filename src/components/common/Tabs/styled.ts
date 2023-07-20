import styled from '@emotion/styled'

export const StyledTab = styled.div`
  display: inline-block;
`

export const StyledPanel = styled.div<{ isCurrentTab: boolean }>`
  ${({ isCurrentTab }): string => `display:${isCurrentTab ? 'unset' : 'none'};`}
`
