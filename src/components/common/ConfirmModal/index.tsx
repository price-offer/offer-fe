import {
  Button
  // IconButton,
} from '@offer-ui/react'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ConfirmModalProps } from './types'

const ConfirmModal = ({
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
    <Styled.ModalContainer isOpen={isOpen} onClose={onClose}>
      <Styled.Header>
        {hasLogo && (
          <Image alt="logo" height={18} src="/images/logo.svg" width={70} />
        )}
        {/* <Styled.CloseButton color="gray30" icon="close" onClick={onClose} /> */}
        <Styled.Title hasLogo={hasLogo} styleType="headline01B" tag="p">
          {/* {title} */}
        </Styled.Title>
        <Styled.Description styleType="body01R" tag="p">
          {description}
        </Styled.Description>
      </Styled.Header>
      <Styled.Body>
        {hasCheckIcon && <Styled.Icon color="white" size={82} type="check" />}
      </Styled.Body>
      <Styled.Footer>
        {primaryButtonText && <Button size="large">{primaryButtonText}</Button>}
        {ghostButtonText && (
          <Button size="large" styleType="ghost">
            {ghostButtonText}
          </Button>
        )}
        {children}
      </Styled.Footer>
    </Styled.ModalContainer>
  )
}

export { ConfirmModalProps, ConfirmModal }
