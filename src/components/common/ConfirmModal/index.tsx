import styled from '@emotion/styled'
import {
  Button,
  Icon,
  // IconButton,
  Modal as ModalContainer,
  Text
} from '@offer-ui/react'
import Image from 'next/image'
import type { ReactElement, ReactNode } from 'react'
import type { StyledProps } from '@types'

export type ConfirmModalProps = {
  isOpen?: boolean
  hasLogo?: boolean
  title: ReactNode
  description?: string
  primaryButtonText?: ReactNode
  hasCheckIcon?: boolean
  ghostButtonText?: ReactNode
  children?: ReactNode
  onClose(): void
}
type StyledTitleProps = StyledProps<ConfirmModalProps, 'hasLogo'>

export const ConfirmModal = ({
  isOpen = false,
  onClose,
  hasLogo = false,
  // title,
  hasCheckIcon = false,
  description = '',
  primaryButtonText = '',
  ghostButtonText = '',
  children
}: ConfirmModalProps): ReactElement => {
  return (
    <StyledModalContainer isOpen={isOpen} onClose={onClose}>
      <StyledHeader>
        {hasLogo && (
          <Image alt="logo" height={18} src="/images/logo.svg" width={70} />
        )}
        {/* <StyledCloseButton color="gray30" icon="close" onClick={onClose} /> */}
        <StyledTitle hasLogo={hasLogo} styleType="headline01B" tag="p">
          {/* {title} */}
        </StyledTitle>
        <StyledDescription styleType="body01R" tag="p">
          {description}
        </StyledDescription>
      </StyledHeader>
      <StyledBody>
        {hasCheckIcon && <StyledIcon color="white" size={82} type="check" />}
      </StyledBody>
      <StyledFooter>
        {primaryButtonText && <Button size="large">{primaryButtonText}</Button>}
        {ghostButtonText && (
          <Button size="large" styleType="ghost">
            {ghostButtonText}
          </Button>
        )}
        {children}
      </StyledFooter>
    </StyledModalContainer>
  )
}

const StyledModalContainer = styled(ModalContainer)`
  width: 400px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 320px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 320px;
  }
`
const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;

  text-align: center;
`
// const StyledCloseButton = styled(IconButton)`
//   position: absolute;
//   right: 0;
//   top: 0;
// `
const StyledTitle = styled(Text)<StyledTitleProps>`
  margin-top: ${({ hasLogo }): string => (hasLogo ? '20px' : '32px')};
`
const StyledDescription = styled(Text)`
  color: ${({ theme }): string => theme.colors.grayScale70};
`
const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledIcon = styled(Icon)`
  margin-top: 42px;
  border-radius: 100px;

  background-color: ${({ theme }): string => theme.colors.grayScale20};
`
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 32px;
`
