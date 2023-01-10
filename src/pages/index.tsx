import styled from '@emotion/styled'
import { Avatar } from '@offer-ui/react'
import type { NextPage } from 'next'
import { theme } from '@styles/themes'
const Home: NextPage = () => {
  return (
    <div>
      <TestAvatar alt="test" src="test" theme={theme}></TestAvatar>
    </div>
  )
}

export default Home

interface Test {
  theme: any
}

const TestAvatar = styled(Avatar)<Test>`
  ${({ theme }): string => theme.mediaQuery.tablet} {
    .img {
      ${({ theme }): string => theme.avatar.image.large}
    }
    ${({ theme }): string => theme.avatar.wrapper.large}
    background-color: ${({ theme }): string => theme.colors.background.gray90};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  }
`
