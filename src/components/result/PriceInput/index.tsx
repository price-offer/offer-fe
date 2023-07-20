import { useMedia, Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import {
  StyledDIM,
  PriceDialogDesktop,
  Price,
  InputWrapper,
  MinimumInput,
  MaximumInput,
  ButtonWrapper,
  CancelButton,
  ApplyButton
} from './styled'
import type { PriceInputProps } from './types'

const PriceInput = ({ isOpen, onClose }: PriceInputProps): ReactElement => {
  const [dialogIsOpen, setIsOpen] = useState<boolean>(false)
  const { desktop } = useMedia()
  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen])

  const handleCancelClick = (): void => {
    setIsOpen(false)
    onClose(false)
  }
  return dialogIsOpen ? (
    desktop ? (
      <PriceDialogDesktop>
        <Price>가격</Price>
        <InputWrapper>
          <MinimumInput isPrice placeholder="최소 금액"></MinimumInput>~
          <MaximumInput isPrice placeholder="최대 금액"></MaximumInput>
        </InputWrapper>
        <Divider direction="horizontal" />
        <ButtonWrapper>
          <CancelButton styleType="ghost" onClick={handleCancelClick}>
            취소
          </CancelButton>
          <ApplyButton styleType="solidPrimary">적용하기</ApplyButton>
        </ButtonWrapper>
      </PriceDialogDesktop>
    ) : (
      <StyledDIM>
        <PriceDialogDesktop>
          <Price>가격</Price>
          <InputWrapper>
            <MinimumInput isPrice placeholder="최소 금액"></MinimumInput>~
            <MaximumInput isPrice placeholder="최대 금액"></MaximumInput>
          </InputWrapper>
          <Divider direction="horizontal" />
          <ButtonWrapper>
            <CancelButton styleType="ghost" onClick={handleCancelClick}>
              취소
            </CancelButton>
            <ApplyButton styleType="solidPrimary">적용하기</ApplyButton>
          </ButtonWrapper>
        </PriceDialogDesktop>
      </StyledDIM>
    )
  ) : (
    <></>
  )
}

export { PriceInput }
