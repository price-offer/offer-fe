import styled from '@emotion/styled'
import { useMedia } from '@offer-ui/react'
import { useRouter } from 'next/router'
import type { PropsWithChildren } from 'react'
import { Header } from '@components'

type LayoutProps = PropsWithChildren<unknown>

const NO_HEADER_PATHS: { [key: string]: string[] } = {
  desktop: [],
  tablet: ['/post'],
  mobile: ['/post']
}
type MediaTypeKeys = keyof typeof NO_HEADER_PATHS

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const media = useMedia()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [key] = Object.entries(media).find(([_, value]) => value) || []
  // TODO: UseMediaType export 해서 타입 지정 해주기
  const currentMedia = key as MediaTypeKeys
  const hasHeader = !NO_HEADER_PATHS[currentMedia].includes(router.pathname)

  return (
    <Container>
      {hasHeader && <Header />}
      {children}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 67px;
`
