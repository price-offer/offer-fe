import {
  Button,
  IconButton,
  Modal as ModalContainer,
  Text
} from '@offer-ui/react'
import type { ReactElement, ReactNode } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

export interface ModalProps {
  isOpen?: boolean
  height?: string
  hasLogo?: boolean
  title: string
  description?: string
  primaryButtonText?: string
  ghostButtonText?: string
  children?: ReactNode
  onClose(): void
}

export const Modal = ({
  isOpen = false,
  onClose,
  hasLogo = false,
  title,
  description = '',
  primaryButtonText = '',
  ghostButtonText = '',
  children
}: ModalProps): ReactElement => {
  return (
    <StyledModalContainer isOpen={isOpen} onClose={onClose}>
      <StyledTopWrapper>
        {hasLogo && (
          <Image alt="logo" height={18} src="/images/logo.svg" width={70} />
        )}
        <StyledCloseButton colorType="gray30" icon="close" onClick={onClose} />
      </StyledTopWrapper>
      <StyledContentWrapper hasLogo={hasLogo}>
        <Text styleType="headline01B" tag="p">
          {title}
        </Text>
        <StyledDescription styleType="body01R" tag="p">
          {description}
        </StyledDescription>
      </StyledContentWrapper>
      {children}
      <StyledButtonWrapper>
        {primaryButtonText && <Button size="large">{primaryButtonText}</Button>}
        {ghostButtonText && (
          <Button size="large" styleType="ghost">
            {ghostButtonText}
          </Button>
        )}
      </StyledButtonWrapper>
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
const StyledTopWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`
const StyledContentWrapper = styled.div<{ hasLogo: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  margin-bottom: 32px;
  margin-top: ${({ hasLogo }): string => (hasLogo ? '24px' : '36px')};
`
const StyledCloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
`
const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const StyledDescription = styled(Text)`
  color: ${({ theme }): string => theme.colors.grayScale.gray70};
`
