import {
  Button
  // IconButton,
} from '@offer-ui/react'
import Image from 'next/image'
import type { ReactElement } from 'react'
import {
  StyledModalContainer,
  StyledHeader,
  StyledTitle,
  StyledDescription,
  StyledBody,
  StyledIcon,
  StyledFooter
} from './styled'
import type { ConfirmModalProps } from './types'

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
