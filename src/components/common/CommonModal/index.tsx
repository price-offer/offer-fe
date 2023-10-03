import { IconButton } from '@offer-ui/react'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { CommonModalProps } from './types'

const CommonModal = ({
  isOpen = false,
  onClose,
  hasLogo = false,
  title,
  description = '',
  buttons
}: CommonModalProps): ReactElement => {
  return (
    <Styled.ModalContainer isOpen={isOpen} onClose={onClose}>
      <Styled.Header>
        {hasLogo && (
          <Image alt="logo" height={18} src="/images/logo.svg" width={70} />
        )}
        <Styled.CloseButtonWrapper>
          <IconButton color="grayScale30" icon="close" onClick={onClose} />
        </Styled.CloseButtonWrapper>
      </Styled.Header>
      <Styled.Body hasLogo={hasLogo}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description styleType="body01R" tag="p">
          {description}
        </Styled.Description>
      </Styled.Body>
      <Styled.Footer>{buttons}</Styled.Footer>
    </Styled.ModalContainer>
  )
}

export { CommonModalProps, CommonModal }
