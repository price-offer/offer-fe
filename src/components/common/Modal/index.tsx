import {
  Button,
  IconButton,
  Modal as ModalContainer,
  Text
} from '@offer-ui/react'
import type { ReactElement, ReactNode } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import type { StyledProps } from '@types'

export interface ModalProps {
  isOpen?: boolean
  hasLogo?: boolean
  title: ReactNode
  description?: string
  primaryButtonText?: string
  ghostButtonText?: string
  children?: ReactNode
  onClose(): void
}
type StyledLogoContainerProps = StyledProps<ModalProps, 'hasLogo'>

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
      <StyledHeader>
        {hasLogo && (
          <StyledLogoContainer hasLogo={hasLogo}>
            <Image alt="logo" height={18} src="/images/logo.svg" width={70} />
          </StyledLogoContainer>
        )}
        <StyledCloseButton colorType="gray30" icon="close" onClick={onClose} />
        <Text styleType="headline01B" tag="p">
          {title}
        </Text>
        <StyledDescription styleType="body01R" tag="p">
          {description}
        </StyledDescription>
      </StyledHeader>
      <div>{children}</div>
      <StyledFooter>
        {primaryButtonText && <Button size="large">{primaryButtonText}</Button>}
        {ghostButtonText && (
          <Button size="large" styleType="ghost">
            {ghostButtonText}
          </Button>
        )}
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
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin-bottom: 32px;
  text-align: center;
`
const StyledLogoContainer = styled.div<StyledLogoContainerProps>`
  margin-bottom: ${({ hasLogo }): string => (hasLogo ? '20px' : '32px')};
`
const StyledCloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
`
const StyledDescription = styled(Text)`
  color: ${({ theme }): string => theme.colors.grayScale.gray70};
`
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
