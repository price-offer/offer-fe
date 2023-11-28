import styled from '@emotion/styled'
import type { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren<unknown>

export const Layout = ({ children }: LayoutProps) => (
  <Container>{children}</Container>
)

const Container = styled.div`
  margin-top: 67px;
`
