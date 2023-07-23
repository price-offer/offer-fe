import styled from '@emotion/styled'
import {
  Icon as IconComponent,
  // IconButton,
  Modal,
  Text
} from '@offer-ui/react'
import type { StyledTitleProps } from './types'

const ModalContainer = styled(Modal)`
  width: 400px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 320px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 320px;
  }
`

const Header = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  text-align: center;
`

//  const CloseButton = styled(IconButton)`
//   position: absolute;
//   right: 0;
//   top: 0;
// `

const Title = styled(Text)<StyledTitleProps>`
  margin-top: ${({ hasLogo }): string => (hasLogo ? '20px' : '32px')};
`

const Description = styled(Text)`
  color: ${({ theme }): string => theme.colors.grayScale70};
`

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(IconComponent)`
  margin-top: 42px;
  background-color: ${({ theme }): string => theme.colors.grayScale20};
  border-radius: 100px;
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 32px;
`

export const Styled = {
  ModalContainer,
  Header,
  Title,
  Description,
  Body,
  Icon,
  Footer
}
