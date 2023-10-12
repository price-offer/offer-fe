import type { ReactElement } from 'react'
import { Styled } from './styled'
import type {} from './types'
import { ICON } from '@constants/icons'

const { Banner } = ICON

const Header = (): ReactElement => {
  return (
    <>
      <Styled.HeaderContainer />
      <Banner />
    </>
  )
}

export { Header }
