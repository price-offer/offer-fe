import styled from '@emotion/styled'
import {
  Icon,
  // IconButton,
  Modal as ModalContainer,
  Text
} from '@offer-ui/react'
import type { StyledTitleProps } from './types'

export const StyledModalContainer = styled(ModalContainer)`
  width: 400px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 320px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 320px;
  }
`
export const StyledHeader = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  text-align: center;
`
// export const StyledCloseButton = styled(IconButton)`
//   position: absolute;
//   right: 0;
//   top: 0;
// `
export const StyledTitle = styled(Text)<StyledTitleProps>`
  margin-top: ${({ hasLogo }): string => (hasLogo ? '20px' : '32px')};
`
export const StyledDescription = styled(Text)`
  color: ${({ theme }): string => theme.colors.grayScale70};
`
export const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledIcon = styled(Icon)`
  margin-top: 42px;
  background-color: ${({ theme }): string => theme.colors.grayScale20};
  border-radius: 100px;
`
export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 32px;
`
