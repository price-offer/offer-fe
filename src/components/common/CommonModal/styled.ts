import styled from '@emotion/styled'
import { Icon as IconComponent, Modal, Text } from '@offer-ui/react'
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
  position: relative;
  display: flex;
  justify-content: center;
`

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const Title = styled.p`
  white-space: pre-wrap;

  ${({ theme }): string => theme.fonts.headline01B};
`

const Description = styled(Text)`
  color: ${({ theme }): string => theme.colors.grayScale70};
  white-space: pre-wrap;
`

const Body = styled.div<StyledTitleProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: ${({ hasLogo }): string => (hasLogo ? '20px' : '32px')};
  margin-bottom: 32px;

  text-align: center;
`

const Icon = styled(IconComponent)`
  margin-top: 42px;
  border-radius: 100px;

  background-color: ${({ theme }): string => theme.colors.grayScale20};
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Styled = {
  ModalContainer,
  Header,
  CloseButtonWrapper,
  Title,
  Description,
  Body,
  Icon,
  Footer
}
