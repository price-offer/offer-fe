import { useMedia, Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import { Styled } from './styled'
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
      <Styled.PriceDialogDesktop>
        <Styled.Price>가격</Styled.Price>
        <Styled.InputWrapper>
          <Styled.MinimumInput isPrice placeholder="최소 금액" />
          ~
          <Styled.MaximumInput isPrice placeholder="최대 금액" />
        </Styled.InputWrapper>
        <Divider direction="horizontal" />
        <Styled.ButtonWrapper>
          <Styled.CancelButton styleType="ghost" onClick={handleCancelClick}>
            취소
          </Styled.CancelButton>
          <Styled.ApplyButton styleType="solidPrimary">
            적용하기
          </Styled.ApplyButton>
        </Styled.ButtonWrapper>
      </Styled.PriceDialogDesktop>
    ) : (
      <Styled.Dim>
        <Styled.PriceDialogDesktop>
          <Styled.Price>가격</Styled.Price>
          <Styled.InputWrapper>
            <Styled.MinimumInput isPrice placeholder="최소 금액" />
            ~
            <Styled.MaximumInput isPrice placeholder="최대 금액" />
          </Styled.InputWrapper>
          <Divider direction="horizontal" />
          <Styled.ButtonWrapper>
            <Styled.CancelButton styleType="ghost" onClick={handleCancelClick}>
              취소
            </Styled.CancelButton>
            <Styled.ApplyButton styleType="solidPrimary">
              적용하기
            </Styled.ApplyButton>
          </Styled.ButtonWrapper>
        </Styled.PriceDialogDesktop>
      </Styled.Dim>
    )
  ) : (
    <></>
  )
}

export { PriceInput, PriceInputProps }
